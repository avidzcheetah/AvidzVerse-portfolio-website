'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Shield, Cpu, Network, Code2, Database, Layout, Smartphone, ChevronRight, X } from 'lucide-react';
import { getSkillsData, SkillsData, SkillCategory } from '@/app/actions/skills';
import * as Dialog from '@radix-ui/react-dialog';

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
        color: 'border-energy-blue',
        textColor: 'text-energy-blue',
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

  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);

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
              className={`glass-panel p-6 sm:p-8 border-t-2 ${domain.color} relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:-translate-y-1`}
              onClick={() => setSelectedCategory(domain)}
            >
              <div className="absolute top-4 right-4 text-slate-600 group-hover:text-energy-blue transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>

              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-space-800/0 group-hover:bg-space-800/40 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 pr-8">
                  <div className={`p-2 rounded bg-space-900 border ${domain.color} ${domain.textColor}`}>
                    {renderIcon(domain.iconName)}
                  </div>
                  <h3 className="text-lg font-display tracking-widest text-slate-200 uppercase">
                    {domain.domain}
                  </h3>
                </div>

                <div className="space-y-6">
                  {domain.nodes.slice(0, 5).map((node, i) => (
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
                  {domain.nodes.length > 5 && (
                    <div className="pt-4 border-t border-space-700/50">
                      <p className="text-[10px] font-display uppercase tracking-widest text-slate-500 group-hover:text-energy-blue transition-colors">
                        + {domain.nodes.length - 5} More Skills Detected
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Neural Detail Popup */}
        <Dialog.Root open={!!selectedCategory} onOpenChange={(open) => !open && setSelectedCategory(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] animate-in fade-in duration-300" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-2xl bg-space-900 border border-space-700 rounded-xl p-6 md:p-10 z-[101] shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300 outline-none">
              {selectedCategory && (
                <>
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded bg-space-800 border ${selectedCategory.color} ${selectedCategory.textColor} animate-pulse`}>
                        {renderIcon(selectedCategory.iconName)}
                      </div>
                      <div>
                        <Dialog.Title className="text-xl md:text-2xl font-display font-bold tracking-[0.2em] text-slate-200 uppercase">
                          {selectedCategory.domain}
                        </Dialog.Title>
                        <p className="text-[10px] font-display text-energy-blue/60 tracking-widest uppercase mt-1">Full Neural Node Analysis</p>
                      </div>
                    </div>
                    <Dialog.Close asChild>
                      <button className="p-2 text-slate-500 hover:text-white transition-colors">
                        <X className="w-6 h-6" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {selectedCategory.nodes.map((node, i) => (
                      <div key={i} className="group/node">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-sm font-sans text-slate-300">
                            {node.name}
                          </span>
                          <span className={`text-xs font-display tracking-wider ${selectedCategory.textColor}`}>
                            {node.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-space-800 rounded-full overflow-hidden border border-space-700">
                          <div 
                            className={`h-full ${selectedCategory.color.replace('border-', 'bg-')} ${selectedCategory.textColor} shadow-[0_0_10px_currentColor]`}
                            style={{ width: `${node.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-6 border-t border-space-700 flex justify-between items-center text-[10px] font-display tracking-widest text-slate-500 uppercase">
                    <span>AvidzVerse.Neural.Core_v2.01</span>
                    <span className="text-energy-blue/40">Encryption Active</span>
                  </div>
                </>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
