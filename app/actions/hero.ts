'use server';

import { supabaseAdmin } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';

export interface HeroData {
  id?: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
}

export async function getHeroData(): Promise<HeroData | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('hero_section')
      .select('*')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching hero data:', error);
      return null;
    }
    
    return data as HeroData | null;
  } catch (error) {
    console.error('Exception fetching hero data:', error);
    return null;
  }
}

export async function updateHeroData(formData: HeroData) {
  try {
    const { id, title, subtitle, tagline, description } = formData;
    
    // Check if we already have a record
    const existing = await getHeroData();
    
    let result;
    if (existing?.id) {
      result = await supabaseAdmin
        .from('hero_section')
        .update({ title, subtitle, tagline, description, updated_at: new Date().toISOString() })
        .eq('id', existing.id)
        .select()
        .single();
    } else {
      result = await supabaseAdmin
        .from('hero_section')
        .insert([{ title, subtitle, tagline, description }])
        .select()
        .single();
    }

    if (result.error) throw result.error;

    // Invalidate the cache for the home page so it refetches
    revalidatePath('/');
    revalidatePath('/admin/hero');

    return { success: true };
  } catch (error: any) {
    console.error('Failed to update hero data:', error);
    return { success: false, error: error.message || 'Failed to update database' };
  }
}
