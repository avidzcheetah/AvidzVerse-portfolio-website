'use server';

import { supabaseAdmin } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface VolunteeringItem {
  role: string;
  org: string;
  period: string;
}

export interface AwardItem {
  title: string;
  date: string;
  description: string;
}

export interface ExperienceData {
  id?: string;
  experiences_json: ExperienceItem[];
  volunteering_json: VolunteeringItem[];
  awards_json: AwardItem[];
}

export async function getExperienceData(): Promise<ExperienceData | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('experience_section')
      .select('*')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching experience data:', error);
      return null;
    }
    
    return data as ExperienceData | null;
  } catch (error) {
    console.error('Exception fetching experience data:', error);
    return null;
  }
}

export async function updateExperienceData(formData: ExperienceData) {
  try {
    const { id, experiences_json, volunteering_json, awards_json } = formData;
    
    const existing = await getExperienceData();
    
    let result;
    if (existing?.id) {
      result = await supabaseAdmin
        .from('experience_section')
        .update({ 
          experiences_json, 
          volunteering_json, 
          awards_json, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', existing.id)
        .select()
        .single();
    } else {
      result = await supabaseAdmin
        .from('experience_section')
        .insert([{ experiences_json, volunteering_json, awards_json }])
        .select()
        .single();
    }

    if (result.error) throw result.error;

    revalidatePath('/');
    revalidatePath('/admin/experience');

    return { success: true };
  } catch (error: any) {
    console.error('Failed to update experience data:', error);
    return { success: false, error: error.message || 'Failed to update database' };
  }
}
