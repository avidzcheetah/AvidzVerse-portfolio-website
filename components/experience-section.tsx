'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Trophy, ChevronRight, Activity } from 'lucide-react';

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  
  const [activeTab, setActiveTab] = useState<'ranks' | 'achievements'>('ranks');

  const experiences = [
    {
      role: 'Executive Director',
      company: 'Nalanda Global Institute of Education (PVT) Ltd.',
      period: 'March 2025 - Present',
      points: [
        'Strategic oversight of technology integration in educational programs.',
        'Spearheading initiatives to modernize the institute\'s digital infrastructure.',
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Quantara IT Solutions (PVT) Ltd.',
      period: 'August 2025 - Present',
      points: [
        'Developing secure, highly available backend systems and APIs.',
        'Collaborating with cross-functional teams to integrate AI-driven features.',
        'Implementing CI/CD pipelines and security audits for ongoing projects.'
      ]
    },
    {
      role: 'Security Analyst Trainee',
      company: 'CyberOps Defense Team (Mock/Simulation)',
      period: 'January 2024 - June 2024',
      points: [
        'Participated in red team / blue team war games simulating APTs.',
        'Analyzed network traffic logs using Wireshark and Splunk to identify anomalies.',
        'Drafted incident response reports for simulated breaches.'
      ]
    }
  ];

  const awards = [
    {
      title: 'Top 10 Finalist - National Cyber Hackathon',
      date: '2024',
      description: 'Secured a top 10 position out of 200+ teams by successfully penetrating a hardened CTF environment within 24 hours.'
    },
    {
      title: 'Excellence in AI Implementation',
      date: '2023',
      description: 'Awarded for developing an innovative machine learning model for predictive maintenance in industrial IoT.'
    },
    {
      title: 'Dean\'s List',
      date: '2023, 2024',
      description: 'Maintained a GPA within the top 5% of the engineering faculty for multiple consecutive semesters.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-space-900 border border-energy-violet/30 mb-6 shadow-[0_0_30px_rgba(166,74,201,0.2)]">
            <Activity className="w-8 h-8 text-energy-violet" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-light text-slate-200 tracking-wider">
            SERVICE <span className="font-bold text-energy-violet text-glow-violet">LOGS</span>
          </h2>
        </motion.div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-1 inline-flex rounded-lg overflow-hidden border border-space-700">
            <button
              onClick={() => setActiveTab('ranks')}
              className={`flex items-center gap-2 px-6 py-3 font-display tracking-widest text-sm uppercase transition-all ${
                activeTab === 'ranks' 
                  ? 'bg-energy-violet/20 text-energy-violet border-b-2 border-energy-violet shadow-[inset_0_-2px_10px_rgba(166,74,201,0.2)]' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-space-800'
              }`}
            >
              <ShieldCheck className="w-4 h-4" /> Operational Ranks
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex items-center gap-2 px-6 py-3 font-display tracking-widest text-sm uppercase transition-all ${
                activeTab === 'achievements' 
                  ? 'bg-energy-gold/20 text-energy-gold border-b-2 border-energy-gold shadow-[inset_0_-2px_10px_rgba(242,169,0,0.2)]' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-space-800'
              }`}
            >
              <Trophy className="w-4 h-4" /> Achievements
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* Experience Timeline */}
            {activeTab === 'ranks' && (
              <motion.div
                key="ranks"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="relative pl-6 md:pl-0"
              >
                {/* Central Timeline Line (Desktop) / Left Line (Mobile) */}
                <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-energy-violet/80 via-energy-violet/20 to-transparent transform md:-translate-x-1/2" />

                <div className="space-y-12">
                  {experiences.map((exp, i) => (
                    <div key={i} className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} justify-center items-center w-full`}>
                      
                      {/* Timeline Node */}
                      <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-space-900 border-2 border-energy-violet shadow-[0_0_15px_rgba(166,74,201,0.5)] transform -translate-x-1/2 z-10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-energy-violet animate-pulse" />
                      </div>

                      {/* Content Card */}
                      <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${i % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                        <div className={`glass-panel p-6 border-b-2 border-t border-r border-l border-space-700 hover:border-energy-violet/50 transition-colors group ${i % 2 === 0 ? 'border-b-energy-violet' : 'border-b-energy-violet'}`}>
                          
                          <div className={`text-xs font-display tracking-widest text-energy-violet mb-2 ${i % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                            {exp.period}
                          </div>
                          
                          <h3 className="text-xl font-bold text-slate-200 mb-1">{exp.role}</h3>
                          <h4 className="text-sm font-display tracking-wide text-slate-400 mb-4">{exp.company}</h4>
                          
                          <ul className={`space-y-2 mt-4 text-sm text-slate-400 ${i % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                            {exp.points.map((point, idx) => (
                              <li key={idx} className={`flex items-start gap-2 ${i % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                                {i % 2 === 0 || window.innerWidth < 768 ? (
                                  <ChevronRight className="w-4 h-4 text-energy-violet mt-0.5 shrink-0" />
                                ) : null}
                                <span>{point}</span>
                                {i % 2 !== 0 && window.innerWidth >= 768 ? (
                                  <ChevronRight className="w-4 h-4 text-energy-violet mt-0.5 shrink-0 rotate-180" />
                                ) : null}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Empty spacer for the other side */}
                      <div className="hidden md:block md:w-5/12" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Awards Grid */}
            {activeTab === 'achievements' && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {awards.map((award, i) => (
                  <div key={i} className="glass-panel p-6 border-t border-l border-r border-space-700 border-b-2 border-b-energy-gold group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 rounded bg-energy-gold/10 border border-energy-gold/30 flex items-center justify-center mb-6 shadow-[inset_0_0_15px_rgba(242,169,0,0.2)] group-hover:bg-energy-gold/20 transition-colors">
                      <Trophy className="w-6 h-6 text-energy-gold" />
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-200 leading-tight pr-4">{award.title}</h3>
                      <span className="text-xs font-display text-energy-gold border border-energy-gold/30 px-2 py-1 rounded bg-space-900 shrink-0">
                        {award.date}
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-400 mt-4 leading-relaxed bg-space-900/50 p-3 rounded border border-space-700">
                      {award.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}