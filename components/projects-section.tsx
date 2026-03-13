'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Terminal, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProjectsData, ProjectItem } from '@/app/actions/projects';

type ProjectType = 'all' | 'cyber' | 'ai' | 'web';

// ProjectItem interface imported from actions


export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<ProjectType>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const [projectsList, setProjectsList] = useState<ProjectItem[]>([
    {
      title: 'JamHub',
      category: ['web'],
      description: 'Real-time Collaborative Music Platform.',
      longDescription: 'Developed a web platform that enables real-time collaborative music sessions where multiple users can create or join jam rooms and play virtual instruments together with low latency audio interaction using WebAudio, WebSockets, TypeScript, and modern web technologies.',
      techStack: ['TypeScript', 'WebAudio', 'WebSockets', 'React'],
      githubUrl: 'https://github.com/avidzcheetah/JamHub',
      liveUrl: 'https://jamhub.vercel.app',
      status: 'July 2025 - Present',
      color: 'energy-blue'
    },
    {
      title: 'ML Intrusion Detection System',
      category: ['ai', 'cyber'],
      description: 'Real-time Machine Learning Intrusion Detection System.',
      longDescription: 'Developed a real-time network intrusion detection system that combines Supervised (Random Forest) and Unsupervised (Autoencoder) machine learning to detect both known and zero-day attacks. Features live packet capture, real-time classification, and explainable AI visualization.',
      techStack: ['Python', 'Random Forest', 'Autoencoder', 'Network Security'],
      githubUrl: 'https://github.com/avidzcheetah',
      liveUrl: '',
      status: 'Dec 2025 - Feb 2026',
      color: 'energy-violet'
    },
    {
      title: 'EngNext',
      category: ['web'],
      description: 'Career Platform connecting engineering graduates with companies.',
      longDescription: 'Developed a platform connecting engineering graduates with companies, enabling profile creation, job applications, and recruitment management through student, company, and admin dashboards for streamlined hiring.',
      techStack: ['Next.js', 'React', 'TypeScript', 'Node.js'],
      githubUrl: 'https://github.com/avidzcheetah',
      liveUrl: '',
      status: 'Aug 2025 - Oct 2026',
      color: 'energy-teal'
    },
    {
      title: 'AvidzVerse Portfolio',
      category: ['web'],
      description: 'Modern personal portfolio website.',
      longDescription: 'Developed a modern personal portfolio website using React, TypeScript, HTML, and CSS to present bio, skills, and project showcase with a responsive, mobile friendly interface, fast load times, an integrated contact form, and direct links to GitHub, LinkedIn, and other social profiles.',
      techStack: ['React', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
      githubUrl: 'https://github.com/avidzcheetah/AvidzVerse-portfolio-website',
      liveUrl: 'https://avidzverse.vercel.app',
      status: 'Jun 2025',
      color: 'energy-blue'
    },
    {
      title: 'Lab Rescheduling System',
      category: ['web'],
      description: 'Web-based lab rescheduling system for the Faculty of Engineering.',
      longDescription: 'Developed a web-based lab rescheduling system for the Faculty of Engineering, University of Jaffna with request and approval workflows, automated email notifications, real time tracking, attendance logging, and role-based dashboards.',
      techStack: ['React.js', 'Next.js', 'PHP', 'MySQL', 'Tailwind CSS', 'EmailJS'],
      githubUrl: 'https://github.com/avidzcheetah',
      liveUrl: '',
      status: 'Jun 2025',
      color: 'energy-gold'
    },
    {
      title: 'Mew',
      category: ['ai'],
      description: 'Real-time AI Chatbot integrating OpenAI and Gemini.',
      longDescription: 'Developed Mew, a real time AI chatbot built with React that integrates OpenAI ChatGPT and Google Gemini AI, with message streaming, auto resizable input, auto scrolling, Markdown formatting, dark mode, and loading indicators.',
      techStack: ['React', 'JavaScript', 'CSS', 'OpenAI API', 'Gemini API'],
      githubUrl: 'https://github.com/avidzcheetah',
      liveUrl: 'https://mew.vercel.app',
      status: 'Nov 2024 - Dec 2024',
      color: 'energy-violet'
    },
    {
      title: 'Crawler',
      category: ['cyber'],
      description: 'Bash Web Crawler and Vulnerability Checker.',
      longDescription: 'Developed a Bash script to crawl webpages, extract key content such as headings, paragraphs, and links, and detect security issues including insecure forms, external script loading, and missing Content Security Policies.',
      techStack: ['Bash', 'Linux', 'Web Security'],
      githubUrl: 'https://github.com/avidzcheetah',
      liveUrl: '',
      status: 'Oct 2024',
      color: 'energy-teal'
    },
    {
      title: 'RepoSpector',
      category: ['cyber'],
      description: 'GitHub Repository Analysis Tool.',
      longDescription: 'Developed a Python based tool using the GitHub API to analyze repositories by reviewing documentation, open issues, pull requests, dependencies, security, and licensing, with automated issue creation for critical problems.',
      techStack: ['Python', 'GitHub API', 'JSON', 'Automation'],
      githubUrl: 'https://github.com/avidzcheetah',
      liveUrl: '',
      status: 'Dec 2024',
      color: 'energy-gold'
    }
  ]);

  useEffect(() => {
    async function loadData() {
      const data = await getProjectsData();
      if (data && data.projects_json.length > 0) {
        setProjectsList(data.projects_json);
      }
    }
    loadData();
  }, []);

  const filters: { id: ProjectType; label: string }[] = [
    { id: 'all', label: 'All Operations' },
    { id: 'cyber', label: 'Cyber Sec' },
    { id: 'ai', label: 'AI Models' },
    { id: 'web', label: 'Web Systems' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsList 
    : projectsList.filter(p => {
        const cats = Array.isArray(p.category) ? p.category : [p.category as unknown as ProjectType].filter(Boolean);
        return cats.includes(activeFilter);
      });

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
                    <Badge variant="outline" className="font-display tracking-wider text-[10px] uppercase border-space-700 bg-space-800 text-slate-300 text-center leading-tight">
                      {project.status.split(' - ').map((part, idx) => (
                        <React.Fragment key={idx}>
                          {part}
                          {idx === 0 && project.status.includes(' - ') && <br />}
                        </React.Fragment>
                      ))}
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
                      <span key={idx} className="text-xs font-display tracking-wider text-slate-500 bg-space-800 px-2 py-1 rounded border border-space-700 flex-shrink-0">
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
                    <h4 className={`text-sm font-display tracking-widest text-${selectedProject.color} uppercase mb-3 border-b border-space-700 pb-2`}>Overview</h4>
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
