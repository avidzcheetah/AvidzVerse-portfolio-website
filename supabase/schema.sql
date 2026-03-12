-- Drop existing tables if re-initializing
DROP TABLE IF EXISTS public.hero_section CASCADE;

-- Create Hero Section Table
CREATE TABLE public.hero_section (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'AVIDU',
  subtitle TEXT NOT NULL DEFAULT 'WITHARANA',
  tagline TEXT NOT NULL DEFAULT 'Computer Engineering Undergraduate',
  description TEXT NOT NULL DEFAULT 'Cybersecurity enthusiast with a passion for astronomy...',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert initial default row
INSERT INTO public.hero_section (title, subtitle, tagline, description) 
VALUES (
  'AVIDU', 
  'WITHARANA', 
  'Computer Engineering Undergraduate', 
  'Cybersecurity enthusiast with a passion for astronomy and computer engineering. Actively contributing to various organizations, showcasing a proactive approach to learning and implementing cybersecurity solutions.'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.hero_section ENABLE ROW LEVEL SECURITY;

-- Allow public read access to everyone
CREATE POLICY "Allow public read access" ON public.hero_section
  FOR SELECT USING (true);

-------------------------------------------------------
-- ABOUT SECTION
-------------------------------------------------------
DROP TABLE IF EXISTS public.about_section CASCADE;

CREATE TABLE public.about_section (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  description TEXT NOT NULL DEFAULT '',
  education_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  roles_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

INSERT INTO public.about_section (description, education_json, roles_json)
VALUES (
  'Cybersecurity enthusiast with a passion for astronomy...',
  '[{"degree": "BSc. Engineering (Hons.) in Computer Engineering", "institution": "University of Jaffna", "period": "Feb 2023 - Present"}]',
  '[{"title": "Associate Software Developer", "org": "Enigma Solutions", "period": "July 2025 - Present"}]'
);

ALTER TABLE public.about_section ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access about" ON public.about_section FOR SELECT USING (true);


-------------------------------------------------------
-- ACADEMIC SECTION
-------------------------------------------------------
DROP TABLE IF EXISTS public.academic_section CASCADE;

CREATE TABLE public.academic_section (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  degrees_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  diplomas_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

INSERT INTO public.academic_section (degrees_json, diplomas_json)
VALUES ('[]'::jsonb, '[]'::jsonb);

ALTER TABLE public.academic_section ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access academic" ON public.academic_section FOR SELECT USING (true);


-------------------------------------------------------
-- SKILLS SECTION
-------------------------------------------------------
DROP TABLE IF EXISTS public.skills_section CASCADE;

CREATE TABLE public.skills_section (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  categories_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

INSERT INTO public.skills_section (categories_json) VALUES ('[]'::jsonb);

ALTER TABLE public.skills_section ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access skills" ON public.skills_section FOR SELECT USING (true);


-------------------------------------------------------
-- PROJECTS SECTION
-------------------------------------------------------
DROP TABLE IF EXISTS public.projects_section CASCADE;

CREATE TABLE public.projects_section (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  projects_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

INSERT INTO public.projects_section (projects_json) VALUES ('[]'::jsonb);

ALTER TABLE public.projects_section ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access projects" ON public.projects_section FOR SELECT USING (true);


-------------------------------------------------------
-- EXPERIENCE SECTION
-------------------------------------------------------
DROP TABLE IF EXISTS public.experience_section CASCADE;

CREATE TABLE public.experience_section (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  experiences_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  volunteering_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  awards_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

INSERT INTO public.experience_section (experiences_json, volunteering_json, awards_json) 
VALUES ('[]'::jsonb, '[]'::jsonb, '[]'::jsonb);

ALTER TABLE public.experience_section ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access experience" ON public.experience_section FOR SELECT USING (true);

