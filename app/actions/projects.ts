'use server';

import { supabaseAdmin } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';

export type ProjectType = 'all' | 'cyber' | 'ai' | 'web';

export interface ProjectItem {
  title: string;
  category: ProjectType;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  status: string;
  color: string;
}

export interface ProjectsData {
  id?: string;
  projects_json: ProjectItem[];
}

export async function getProjectsData(): Promise<ProjectsData | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('projects_section')
      .select('*')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching projects data:', error);
      return null;
    }
    
    return data as ProjectsData | null;
  } catch (error) {
    console.error('Exception fetching projects data:', error);
    return null;
  }
}

export async function updateProjectsData(formData: ProjectsData) {
  try {
    const { id, projects_json } = formData;
    
    const existing = await getProjectsData();
    
    let result;
    if (existing?.id) {
      result = await supabaseAdmin
        .from('projects_section')
        .update({ 
          projects_json, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', existing.id)
        .select()
        .single();
    } else {
      result = await supabaseAdmin
        .from('projects_section')
        .insert([{ projects_json }])
        .select()
        .single();
    }

    if (result.error) throw result.error;

    revalidatePath('/');
    revalidatePath('/admin/projects');

    return { success: true };
  } catch (error: any) {
    console.error('Failed to update projects data:', error);
    return { success: false, error: error.message || 'Failed to update database' };
  }
}
