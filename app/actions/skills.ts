'use server';

import { supabaseAdmin } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';

export interface SkillNode {
  name: string;
  level: number;
}

export interface SkillCategory {
  domain: string;
  iconName: string;
  color: string;
  textColor: string;
  nodes: SkillNode[];
}

export interface SkillsData {
  id?: string;
  categories_json: SkillCategory[];
}

export async function getSkillsData(): Promise<SkillsData | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('skills_section')
      .select('*')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching skills data:', error);
      return null;
    }
    
    return data as SkillsData | null;
  } catch (error) {
    console.error('Exception fetching skills data:', error);
    return null;
  }
}

export async function updateSkillsData(formData: SkillsData) {
  try {
    const { id, categories_json } = formData;
    
    const existing = await getSkillsData();
    
    let result;
    if (existing?.id) {
      result = await supabaseAdmin
        .from('skills_section')
        .update({ 
          categories_json, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', existing.id)
        .select()
        .single();
    } else {
      result = await supabaseAdmin
        .from('skills_section')
        .insert([{ categories_json }])
        .select()
        .single();
    }

    if (result.error) throw result.error;

    revalidatePath('/');
    revalidatePath('/admin/skills');

    return { success: true };
  } catch (error: any) {
    console.error('Failed to update skills data:', error);
    return { success: false, error: error.message || 'Failed to update database' };
  }
}
