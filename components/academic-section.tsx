'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Award, CheckCircle2 } from 'lucide-react';

export function AcademicSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const degrees = [
    {
      title: 'BSc. Engineering (Hons.) in Computer Engineering',
      institution: 'University of Jaffna',
      period: 'Feb 2023 - Present',
      status: 'In Progress',
      color: 'energy-blue',
      details: [
        'Specializing in Software Engineering and Hardware Integration.',
        'Core coursework: Data Structures, Algorithms, Computer Architecture.',
        'Active member of the University Cyber Security Society.'
      ]
    },
    {
      title: 'BSc. Information Technology and Cyber Security',
      institution: 'PSB University Cambodia',
      period: 'Sep 2023 - Feb 2026',
      status: 'In Progress',
      color: 'energy-violet',
      details: [
        'Focus on Network Security, Cryptography, and Ethical Hacking.',
        'Practical labs simulating real-world cyber attack and defense scenarios.',
        'Dual-degree concurrent enrollment.'
      ]
    }
  ];

  const diplomas = [
    {
      title: 'Cyber Threat Intelligence 101',
      institution: 'arcX',
      period: 'Certification',
      status: 'Valid',
      color: 'energy-teal'
    },
    {
      title: 'Ethical Hacking Essentials (EHE)',
      institution: 'EC-Council',
      period: 'Certification',
      status: 'Valid',
      color: 'energy-gold'
    }
  ];

  return (
    <section id="academic" className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end gap-4 border-b border-space-700 pb-4"
        >
          <BookOpen className="w-10 h-10 text-slate-400 mb-1" />
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-light text-slate-200 tracking-wider">
              ACADEMIC <span className="font-bold text-white text-glow">RECORDS</span>
            </h2>
          </div>
        </motion.div>

        <div className="space-y-16">
          
          {/* Degree Programs */}
          <div>
            <h3 className="text-lg font-display tracking-widest text-energy-blue uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-energy-blue" />
              Degree Initiatives
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {degrees.map((degree, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className={`glass-panel p-6 border-l-2 border-l-${degree.color} relative group overflow-hidden`}
                >
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${degree.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`text-xs font-display tracking-widest text-${degree.color} border border-${degree.color}/30 px-2 py-1 rounded bg-${degree.color}/10 uppercase`}>
                        {degree.status}
                      </div>
                      <span className="text-xs font-sans text-slate-500">{degree.period}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-200 mb-1 leading-snug">{degree.title}</h4>
                    <p className="text-sm text-slate-400 font-display tracking-wide mb-4">{degree.institution}</p>
                    
                    <ul className="space-y-2 mt-4">
                      {degree.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                          <CheckCircle2 className={`w-4 h-4 text-${degree.color} shrink-0 mt-0.5`} />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications / Diplomas */}
          <div>
            <h3 className="text-lg font-display tracking-widest text-energy-teal uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-energy-teal" />
              Certifications & Diplomas
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {diplomas.map((diploma, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                  className={`glass-panel p-4 border border-space-700 hover:border-${diploma.color}/50 transition-colors flex items-center gap-4`}
                >
                  <div className={`p-3 rounded bg-space-800 text-${diploma.color} shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{diploma.title}</h4>
                    <p className="text-xs text-slate-400 font-display mt-1">{diploma.institution}</p>
                  </div>
                  <div className="ml-auto text-xs text-slate-500 font-sans">
                    {diploma.period}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}