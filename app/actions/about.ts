'use server';

import { supabaseAdmin } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface RoleItem {
  title: string;
  org: string;
  period: string;
}

export interface AboutData {
  id?: string;
  description: string;
  education_json: EducationItem[];
  roles_json: RoleItem[];
}

export async function getAboutData(): Promise<AboutData | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('about_section')
      .select('*')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching about data:', error);
      return null;
    }
    
    return data as AboutData | null;
  } catch (error) {
    console.error('Exception fetching about data:', error);
    return null;
  }
}

export async function updateAboutData(formData: AboutData) {
  try {
    const { id, description, education_json, roles_json } = formData;
    
    const existing = await getAboutData();
    
    let result;
    if (existing?.id) {
      result = await supabaseAdmin
        .from('about_section')
        .update({ 
          description, 
          education_json, 
          roles_json, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', existing.id)
        .select()
        .single();
    } else {
      result = await supabaseAdmin
        .from('about_section')
        .insert([{ description, education_json, roles_json }])
        .select()
        .single();
    }

    if (result.error) throw result.error;

    revalidatePath('/');
    revalidatePath('/admin/about');

    return { success: true };
  } catch (error: any) {
    console.error('Failed to update about data:', error);
    return { success: false, error: error.message || 'Failed to update database' };
  }
}
