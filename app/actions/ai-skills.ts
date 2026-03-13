'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { supabaseAdmin } from '@/lib/supabase-server';
import { getProjectsData } from './projects';
import { updateSkillsData, SkillsData } from './skills';
import { revalidatePath } from 'next/cache';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

export async function generateSkillsWithAI() {
  try {
    if (!genAI) {
      throw new Error('GEMINI_API_KEY is not configured in the environment.');
    }

    // 1. Fetch Projects for context
    const projectsData = await getProjectsData();
    const missions = projectsData?.projects_json || [];
    
    // 2. Fetch GitHub data (Public info for avidzcheetah)
    // We'll use a simple fetch since we don't have a broad octokit setup, 
    // and the user explicitly mentioned analyzing their profile/repos.
    let githubText = '';
    try {
      const profileRes = await fetch('https://api.github.com/users/avidzcheetah');
      const profile = await profileRes.json();
      
      const reposRes = await fetch('https://api.github.com/users/avidzcheetah/repos?sort=updated&per_page=10');
      const repos = await reposRes.json();
      
      githubText = `
GitHub Profile: ${profile.bio || 'Developer'}
Public Repositories Summary:
${Array.isArray(repos) ? repos.map((r: any) => `- ${r.name}: ${r.description || 'No description'}`).join('\n') : 'N/A'}
`;
    } catch (e) {
      console.error('Failed to fetch GitHub data:', e);
      githubText = 'GitHub data not available via public API.';
    }

    // We'll try common model versions to avoid 404 errors in different regions
    const modelNames = ['gemini-1.5-flash-latest', 'gemini-1.5-flash', 'gemini-1.0-pro'];
    let model = genAI.getGenerativeModel({ model: modelNames[0] });

    const prompt = `
You are an expert technical resume analyzer and portfolio developer. 
Below is a list of projects (missions) and some GitHub profile information for a developer named Avidu Witharana.
Your task is to generate a structured "Tech Matrix" (Skill Levels) based ON THESE WORKS. 

### CONTEXT:
MISSIONS:
${JSON.stringify(missions, null, 2)}

${githubText}

### INSTRUCTIONS:
1. **Dynamic Analysis**: Analyze the missions and GitHub data to extract EXACT tool names and skill domains. DO NOT use a fixed list of skills. Find what is actually used (e.g., if "Next.js" is in techStack, use it).
2. **Proficiency Filtering**: Only include skills where the developer demonstrates high proficiency (level >= 60%). Ignore minor or peripheral tools.
3. **Core Domains**: Organize skills into logical domains like "Cybersecurity", "AI & Data Science", "Web Systems", etc. Choose the most fitting icons.
4. **Embedded Systems**: Ensure "Embedded Systems & IoT" is present if there is evidence of hardware/automation work.
5. **Output Structure**: Return EXACTLY a JSON structure following the SkillsData interface.
{
  "categories_json": [
    {
      "domain": "Domain Name",
      "iconName": "IconString",
      "color": "border-energy-blue", // Choose from: border-energy-blue, border-energy-teal, border-energy-violet, border-energy-gold, border-slate-400
      "textColor": "text-energy-blue",
      "nodes": [
        { "name": "Dynamic Skill Name", "level": 85 }
      ]
    }
  ]
}

Only return the JSON. No preamble.
`;

    let result;
    let success = false;
    let lastError = '';

    for (const modelName of modelNames) {
      try {
        const currentModel = genAI.getGenerativeModel({ model: modelName });
        result = await currentModel.generateContent(prompt);
        success = true;
        break;
      } catch (e: any) {
        lastError = e.message;
        console.warn(`Model ${modelName} failed: ${e.message}. Trying next...`);
        continue;
      }
    }

    if (!success || !result) {
      throw new Error(`AI Generation failed on all attempted models. Last error: ${lastError}`);
    }

    const response = await result.response;
    let text = response.text();
    
    // Clean up markdown code blocks if present
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    const skillsData: SkillsData = JSON.parse(text);

    // Save to DB
    const updateResult = await updateSkillsData(skillsData);
    
    if (!updateResult.success) {
      throw new Error(updateResult.error || 'Failed to update skills in database.');
    }

    revalidatePath('/');
    revalidatePath('/admin/skills');

    return { success: true, data: skillsData };

  } catch (error: any) {
    console.error('AI Skill Generation Error:', error);
    return { success: false, error: error.message || 'An error occurred during AI analysis.' };
  }
}
