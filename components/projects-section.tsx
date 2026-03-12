'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Terminal, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Types for our project data
type ProjectType = 'all' | 'cyber' | 'ai' | 'web' | 'hardware';

interface Project {
  title: string;
  category: ProjectType;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Completed' | 'In Progress' | 'Archived';
  color: string;
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<ProjectType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Avidz-Vulnerability-Scanner',
      category: 'cyber',
      description: 'An advanced automated vulnerability assessment tool built in Python.',
      longDescription: 'Avidz-Vulnerability-Scanner is designed to actively discover and report security loopholes in web applications. Features include XSS, SQLi, and CSRF detection modules. It leverages concurrent scanning techniques to minimize execution time while maximizing coverage.',
      techStack: ['Python', 'Requests', 'BeautifulSoup', 'Concurrent.futures'],
      githubUrl: 'https://github.com/avidzcheetah/Avidz-Vulnerability-Scanner',
      status: 'Completed',
      color: 'energy-blue'
    },
    {
      title: 'Threat Intel AI Engine',
      category: 'ai',
      description: 'NLP-based threat intelligence aggregator and analyzer.',
      longDescription: 'A machine learning system that scrapes various threat intel feeds (Twitter, CVE databases, dark web forums) and uses NLP to categorize and prioritize emerging threats. Provides a dashboard for SOC analysts to quickly identify pertinent risks.',
      techStack: ['Python', 'Transformers', 'FastAPI', 'React', 'MongoDB'],
      status: 'In Progress',
      color: 'energy-violet'
    },
    {
      title: 'Jayaweera Tyre Traders ERP',
      category: 'web',
      description: 'Comprehensive business management system for a retail tyre company.',
      longDescription: 'Built from scratch to handle inventory management, sales tracking, and customer relationship management. Features a modern glassmorphic dashboard, real-time stock alerts, and role-based access control.',
      techStack: ['Next.js', 'Tailwind', 'Supabase', 'PostgreSQL'],
      liveUrl: 'https://jayaweeratyres.com',
      status: 'Completed',
      color: 'energy-teal'
    },
    {
      title: 'Secure IoT Access Node',
      category: 'hardware',
      description: 'Biometric and cryptographic hardware access controller.',
      longDescription: 'A custom-built hardware device using ESP32 that integrates fingerprint parsing with encrypted MQTT communication to control physical access points. Includes a web interface for credential management.',
      techStack: ['C++', 'ESP32', 'FreeRTOS', 'MQTT', 'WebSockets'],
      githubUrl: 'https://github.com/avidzcheetah',
      status: 'Archived',
      color: 'energy-gold'
    },
    {
      title: 'Decentralized Identity Vault',
      category: 'cyber',
      description: 'Blockchain-backed personal identity management protocol.',
      techStack: ['Solidity', 'Web3.js', 'React', 'IPFS'],
      status: 'In Progress',
      color: 'energy-blue'
    },
    {
      title: 'Cyberpunk Portfolio V1',
      category: 'web',
      description: 'Previous iteration of portfolio featuring a grunge cyberpunk aesthetic.',
      techStack: ['React', 'Framer Motion', 'Tailwind'],
      githubUrl: 'https://github.com/avidzcheetah/AvidzVerse-portfolio-website',
      status: 'Completed',
      color: 'energy-teal'
    }
  ];

  const filters: { id: ProjectType; label: string }[] = [
    { id: 'all', label: 'All Operations' },
    { id: 'cyber', label: 'Cyber Sec' },
    { id: 'ai', label: 'AI Models' },
    { id: 'web', label: 'Web Systems' },
    { id: 'hardware', label: 'Hardware' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-space-700 pb-6"
        >
          <div className="flex items-center gap-4">
            <FolderGit2 className="w-10 h-10 text-energy-blue" />
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-light text-slate-200 tracking-wider">
                ACTIVE <span className="font-bold text-energy-blue text-glow">MISSIONS</span>
              </h2>
            </div>
          </div>
          
          {/* Tactical Filter Hub */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-xs font-display tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'border-energy-blue bg-energy-blue/10 text-energy-blue shadow-[0_0_10px_rgba(102,252,241,0.3)]' 
                    : 'border-space-700 text-slate-400 hover:border-slate-500 hover:text-slate-200 bg-space-900/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className={`glass-panel border-t-2 border-${project.color} group cursor-pointer flex flex-col h-full hover:border-${project.color}/80 transition-all hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
              >
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <Terminal className={`w-8 h-8 text-${project.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                    <Badge variant="outline" className="font-display tracking-widest text-[10px] uppercase border-space-700 bg-space-800 text-slate-300">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-200 mb-2 font-display tracking-wide group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 font-sans leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-space-700/50">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs font-display tracking-wider text-slate-500 bg-space-800 px-2 py-1 rounded border border-space-700">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs font-display tracking-wider text-slate-500 px-1 py-1">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Decorative bottom bar */}
                <div className={`h-1 w-full bg-gradient-to-r from-${project.color}/20 via-${project.color}/80 to-${project.color}/20 opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal/Expanded View for Selected Project */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-space-900/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className={`w-full max-w-3xl glass-panel border border-${selectedProject.color}/50 rounded-lg overflow-hidden flex flex-col max-h-[90vh]`}
              >
                {/* Modal Header */}
                <div className={`p-6 border-b border-space-700 flex justify-between items-start bg-gradient-to-r from-space-800 to-space-900 relative overflow-hidden`}>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-${selectedProject.color}`} />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Terminal className={`w-5 h-5 text-${selectedProject.color}`} />
                      <span className="text-xs font-display tracking-widest text-slate-400 uppercase">Mission Dossier</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-white">{selectedProject.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-white bg-space-800 p-2 rounded-full border border-space-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                  <div className="mb-8">
                    <h4 className="text-sm font-display tracking-widest text-{selectedProject.color} uppercase mb-3 border-b border-space-700 pb-2">Overview</h4>
                    <p className="text-slate-300 font-sans leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-display tracking-widest text-slate-400 uppercase mb-3 border-b border-space-700 pb-2">Tech Architecture</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span key={idx} className={`text-sm font-display tracking-wider text-${selectedProject.color} bg-${selectedProject.color}/10 px-3 py-1.5 rounded border border-${selectedProject.color}/20`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer (Links) */}
                <div className="p-6 border-t border-space-700 bg-space-800/50 flex flex-wrap gap-4 mt-auto">
                  {selectedProject.githubUrl && (
                    <Button 
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      className="bg-space-700 hover:bg-space-600 text-white border border-space-600 font-display tracking-widest uppercase transition-all"
                    >
                      <Github className="w-4 h-4 mr-2" /> View Source
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button 
                      onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      className={`bg-${selectedProject.color} text-space-900 hover:bg-${selectedProject.color}/80 font-display tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(var(--${selectedProject.color}),0.4)]`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Launch System <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                  {!selectedProject.githubUrl && !selectedProject.liveUrl && (
                    <span className="text-sm font-display tracking-widest text-slate-500 uppercase flex items-center">
                      Classified / Internal Infrastructure
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
