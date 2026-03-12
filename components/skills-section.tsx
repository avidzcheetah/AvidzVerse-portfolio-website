'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Shield, Cpu, Network } from 'lucide-react';

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const skillNodes = [
    {
      domain: 'Cyber Defenses',
      icon: <Shield className="w-5 h-5" />,
      color: 'border-energy-blue',
      textColor: 'text-energy-blue',
      nodes: [
        { name: 'Vulnerability Analysis', level: 85 },
        { name: 'Penetration Testing', level: 80 },
        { name: 'Network Security', level: 88 },
        { name: 'Bash Scripting', level: 90 },
      ]
    },
    {
      domain: 'AI Architectures',
      icon: <Network className="w-5 h-5" />,
      color: 'border-energy-violet',
      textColor: 'text-energy-violet',
      nodes: [
        { name: 'Machine Learning', level: 80 },
        { name: 'LLM Integration', level: 78 },
        { name: 'Data Analysis', level: 82 },
        { name: 'PyCaret / Streamlit', level: 80 },
      ]
    },
    {
      domain: 'Core Programming',
      icon: <Terminal className="w-5 h-5" />,
      color: 'border-energy-teal',
      textColor: 'text-energy-teal',
      nodes: [
        { name: 'Java / Python', level: 90 },
        { name: 'React / Next.js', level: 85 },
        { name: 'JavaScript / C++', level: 80 },
        { name: 'Tailwind / CSS', level: 85 },
      ]
    },
    {
      domain: 'Hardware Integration',
      icon: <Cpu className="w-5 h-5" />,
      color: 'border-energy-gold',
      textColor: 'text-energy-gold',
      nodes: [
        { name: 'Arduino Prog.', level: 88 },
        { name: 'IoT Development', level: 82 },
        { name: 'Microcontrollers', level: 80 },
        { name: 'Sensors / Circuits', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-light text-slate-200 tracking-widest uppercase">
            Tech <span className="font-bold">Matrix</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Faint connecting background lines for "Node" look */}
          <div className="absolute inset-0 pointer-events-none hidden md:block" style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(31, 40, 51, 0.4) 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }} />

          {skillNodes.map((domain, index) => (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass-panel p-6 sm:p-8 border-t-2 ${domain.color} relative overflow-hidden group`}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-space-800/0 group-hover:bg-space-800/50 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-2 rounded bg-space-900 border ${domain.color} ${domain.textColor}`}>
                    {domain.icon}
                  </div>
                  <h3 className="text-lg font-display tracking-widest text-slate-200 uppercase">
                    {domain.domain}
                  </h3>
                </div>

                <div className="space-y-6">
                  {domain.nodes.map((node, i) => (
                    <div key={i} className="group/node">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-sans text-slate-400 group-hover/node:text-slate-200 transition-colors">
                          {node.name}
                        </span>
                        <span className={`text-xs font-display tracking-wider ${domain.textColor} opacity-60 group-hover/node:opacity-100 transition-opacity`}>
                          {node.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-space-900 rounded-full overflow-hidden border border-space-700">
                        <motion.div 
                          className={`h-full ${domain.color.replace('border-', 'bg-')} shadow-[0_0_10px_currentColor]`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${node.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
