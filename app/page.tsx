'use client';

import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { AcademicSection } from '@/components/academic-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { SleekNav } from '@/components/sleek-nav';
import { AmbientBackground } from '@/components/ambient-background';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div className="min-h-screen bg-space-900 text-slate-200">
      <AmbientBackground />
      <SleekNav />
      
      <main className="relative z-10 flex flex-col gap-24 pb-24">
        {/* We will replace these one by one with the new Sci-Fi variants */}
        <HeroSection />
        <AboutSection />
        <AcademicSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  ) : null;
}