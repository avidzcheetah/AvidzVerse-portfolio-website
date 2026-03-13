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

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
You are an expert technical resume analyzer and portfolio developer. 
Below is a list of projects (missions) and some GitHub profile information for a developer named Avidu Witharana.
Your task is to generate a structured "Tech Matrix" (Skill Levels) based ON THESE WORKS. 

### CONTEXT:
MISSIONS:
${JSON.stringify(missions, null, 2)}

${githubText}

### INSTRUCTIONS:
1. Identify the core domains (e.g., "Cybersecurity & Web", "Machine Learning & AI", "Programming Languages", "Web Development", "Embedded Systems & IoT", "Tools & Frameworks").
2. For each domain, pick appropriate icons: Shield, Network, Cpu, Database, Code2, Layout, Smartphone, or Terminal.
3. Assign "Node" levels (0-100) based on the complexity and frequency of use in the missions.
4. "Embedded Systems & IoT" MUST be included if there are relevant projects (like Arduino/Automation).
5. Output EXACTLY a JSON structure following the SkillsData interface:
{
  "categories_json": [
    {
      "domain": "Domain Name",
      "iconName": "IconString",
      "color": "border-energy-blue", // Choose from: border-energy-blue, border-energy-teal, border-energy-violet, border-energy-gold, border-slate-400
      "textColor": "text-energy-blue", // MUST match the color choice (e.g. text-energy-blue for border-energy-blue)
      "nodes": [
        { "name": "Skill Name", "level": 85 }
      ]
    }
  ]
}

Only return the JSON. No preamble.
`;

    const result = await model.generateContent(prompt);
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
