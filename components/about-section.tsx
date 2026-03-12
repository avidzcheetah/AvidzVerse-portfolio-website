'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Building, Target, Server } from 'lucide-react';

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const education = [
    {
      degree: 'BSc. Engineering (Hons.) in Computer Engineering',
      institution: 'University of Jaffna',
      period: 'Feb 2023 - Present',
    },
    {
      degree: 'BSc. in Information Technology & Cybersecurity',
      institution: 'PSB University Cambodia',
      period: 'Sep 2023 - Present',
    },
  ];

  const roles = [
    {
      title: 'Executive Director',
      org: 'Nalanda Global Institute of Education (PVT) Ltd.',
      period: 'Mar 2025 - Present',
    },
    {
      title: 'Software Engineer',
      org: 'Quantara IT Solutions (PVT) Ltd.',
      period: 'Aug 2025 - Present',
    },
  ];

  return (
    <section id="about" className="py-32 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center justify-between border-b border-space-700 pb-4"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-light text-slate-200 tracking-wider">
              DOSSIER <span className="text-energy-blue font-bold">///</span>
            </h2>
            <p className="text-slate-500 font-display mt-2 tracking-widest uppercase text-sm">Subject: Avidu Witharana</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-energy-violet/60 font-display text-sm tracking-widest border border-energy-violet/20 px-4 py-2 rounded glass-panel-light">
            <span className="w-2 h-2 rounded-full bg-energy-violet animate-pulse" />
            Classified Info
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column - Biography & Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="glass-panel p-6 border-l-4 border-l-energy-blue hover:border-l-energy-teal transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-energy-blue w-6 h-6" />
                <h3 className="text-xl font-display tracking-wider text-slate-200 uppercase">Primary Directive</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans text-sm">
                "Currently working on combining AI and CySec for a secure cyberspace."
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['AI Innovation', 'Cybersecurity', 'Research', 'Leadership'].map((tag) => (
                  <span key={tag} className="text-xs font-display tracking-wider text-energy-teal bg-energy-teal/10 border border-energy-teal/20 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-space-800/50 backdrop-blur border border-space-700 p-6 rounded relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-energy-violet to-transparent" />
              <p className="text-slate-400 leading-relaxed font-sans text-sm relative z-10">
                A passionate technologist at the intersection of cybersecurity and artificial intelligence, 
                dedicated to creating secure and innovative solutions for the digital future. Dual-degree 
                undergraduate managing multiple technical and leadership roles.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Data Grid (Education & Roles) */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            
            {/* Education Data Block */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="glass-panel p-6 relative group"
            >
              <div className="absolute top-4 right-4 text-space-700 group-hover:text-energy-teal/20 transition-colors">
                <GraduationCap className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-display tracking-widest text-slate-300 uppercase mb-6 flex items-center gap-2">
                <span className="text-energy-teal">01.</span> Academic Records
              </h3>
              
              <div className="space-y-6 relative z-10">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-energy-teal shadow-[0_0_8px_theme(colors.energy.teal)]" />
                      {i !== education.length - 1 && <div className="w-px h-full bg-space-700 my-1" />}
                    </div>
                    <div className="pb-4">
                      <p className="text-xs font-display text-slate-500 mb-1">{edu.period}</p>
                      <h4 className="text-sm font-bold text-slate-200 leading-tight">{edu.degree}</h4>
                      <p className="text-sm text-slate-400 mt-1">{edu.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Current Roles Data Block */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass-panel p-6 relative group"
            >
              <div className="absolute top-4 right-4 text-space-700 group-hover:text-energy-violet/20 transition-colors">
                <Building className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-display tracking-widest text-slate-300 uppercase mb-6 flex items-center gap-2">
                <span className="text-energy-violet">02.</span> Active Postings
              </h3>
              
              <div className="space-y-6 relative z-10">
                {roles.map((role, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full border border-energy-violet bg-space-900" />
                      {i !== roles.length - 1 && <div className="w-px h-full border-l border-dashed border-space-700 my-1" />}
                    </div>
                    <div className="pb-4">
                      <p className="text-xs font-display text-slate-500 mb-1">{role.period}</p>
                      <h4 className="text-sm font-bold text-slate-200 leading-tight">{role.title}</h4>
                      <p className="text-sm text-slate-400 mt-1">{role.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
