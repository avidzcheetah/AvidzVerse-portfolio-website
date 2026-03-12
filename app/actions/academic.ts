'use server';

import { supabaseAdmin } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';

export interface DegreeItem {
  title: string;
  institution: string;
  period: string;
  status: string;
  color: string;
  details: string[];
}

export interface DiplomaItem {
  title: string;
  institution: string;
  period: string;
  status: string;
  color: string;
}

export interface AcademicData {
  id?: string;
  degrees_json: DegreeItem[];
  diplomas_json: DiplomaItem[];
}

export async function getAcademicData(): Promise<AcademicData | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('academic_section')
      .select('*')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching academic data:', error);
      return null;
    }
    
    return data as AcademicData | null;
  } catch (error) {
    console.error('Exception fetching academic data:', error);
    return null;
  }
}

export async function updateAcademicData(formData: AcademicData) {
  try {
    const { id, degrees_json, diplomas_json } = formData;
    
    const existing = await getAcademicData();
    
    let result;
    if (existing?.id) {
      result = await supabaseAdmin
        .from('academic_section')
        .update({ 
          degrees_json, 
          diplomas_json, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', existing.id)
        .select()
        .single();
    } else {
      result = await supabaseAdmin
        .from('academic_section')
        .insert([{ degrees_json, diplomas_json }])
        .select()
        .single();
    }

    if (result.error) throw result.error;

    revalidatePath('/');
    revalidatePath('/admin/academic');

    return { success: true };
  } catch (error: any) {
    console.error('Failed to update academic data:', error);
    return { success: false, error: error.message || 'Failed to update database' };
  }
}
