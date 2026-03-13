'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Shield, Cpu, Network, Code2, Database, Layout, Smartphone } from 'lucide-react';
import { getSkillsData, SkillsData } from '@/app/actions/skills';

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const [skillsData, setSkillsData] = useState<SkillsData>({
    categories_json: [
      {
        domain: 'Cybersecurity & Web',
        iconName: 'Shield',
        color: 'border-energy-blue',
        textColor: 'text-energy-blue',
        nodes: [
          { name: 'Vulnerability Analysis', level: 85 },
          { name: 'Web Security', level: 88 },
          { name: 'Penetration Testing', level: 80 },
        ]
      },
      {
        domain: 'Machine Learning & AI',
        iconName: 'Network',
        color: 'border-energy-violet',
        textColor: 'text-energy-violet',
        nodes: [
          { name: 'Large Language Models (LLMs)', level: 85 },
          { name: 'AI Chatbots', level: 90 },
          { name: 'ChatGPT / Gemini AI', level: 88 },
        ]
      },
      {
        domain: 'Programming Languages',
        iconName: 'Terminal',
        color: 'border-energy-teal',
        textColor: 'text-energy-teal',
        nodes: [
          { name: 'Java / Python', level: 90 },
          { name: 'JavaScript / Bash', level: 85 },
          { name: 'C++', level: 80 },
        ]
      },
      {
        domain: 'Web Development',
        iconName: 'Code2',
        color: 'border-energy-gold',
        textColor: 'text-energy-gold',
        nodes: [
          { name: 'React / Next.js', level: 85 },
          { name: 'HTML / CSS / Tailwind', level: 95 },
          { name: 'TypeScript / JavaScript', level: 88 }
        ]
      },
      {
        domain: 'Embedded Systems & IoT',
        iconName: 'Cpu',
        color: 'border-slate-400',
        textColor: 'text-slate-400',
        nodes: [
          { name: 'Arduino Prog.', level: 88 },
          { name: 'Automation', level: 82 },
          { name: 'Microcontrollers', level: 80 },
        ]
      },
      {
        domain: 'Tools & Frameworks',
        iconName: 'Terminal',
        color: 'border-energy-blue',
        textColor: 'text-energy-blue',
        nodes: [
          { name: 'Git / VS Code / Android Studio', level: 90 },
          { name: 'Linux', level: 85 },
        ]
      }
    ]
  });

  useEffect(() => {
    async function loadData() {
      const data = await getSkillsData();
      if (data) {
        setSkillsData(data);
      }
    }
    loadData();
  }, []);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Terminal':
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

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
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-1.5 h-1.5 rounded-full bg-energy-blue animate-pulse" />
            <span className="text-[10px] font-display tracking-[0.3em] text-energy-blue/60 uppercase">AI Neural Analysis Active</span>
          </div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Faint connecting background lines for "Node" look */}
          <div className="absolute inset-0 pointer-events-none hidden md:block" style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(31, 40, 51, 0.4) 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }} />

          {skillsData.categories_json.map((domain, index) => (
            <motion.div
              key={index}
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
                    {renderIcon(domain.iconName)}
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
                          className={`h-full ${domain.color.replace('border-', 'bg-')} ${domain.textColor} shadow-[0_0_10px_currentColor]`}
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
