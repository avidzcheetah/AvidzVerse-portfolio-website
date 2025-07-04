'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('featured');
  
  // Determine current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isClient]);

  const projects = [
    {
      id: 1,
      title: 'Mew – Real-time AI Chatbot',
      category: 'AI Innovation',
      period: 'Dec 2024 - Feb 2025',
      description: 'State-of-the-art chatbot integrating React, OpenAI\'s ChatGPT, and Google\'s Gemini AI with real-time message streaming, auto-resizable text fields, markdown support, and dark mode.',
      technologies: ['React', 'ChatGPT', 'Gemini AI', 'JavaScript', 'CSS', 'HTML'],
      github: 'https://github.com/avidzcheetah/mew',
      demo: 'https://mew-chatbot.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Liver Disease Prediction Using PyCaret',
      category: 'AI Innovation',
      period: 'Mar 2025',
      description: 'ML model processing 554 patient records with comprehensive data preprocessing, demonstrating AI application in healthcare for early disease detection.',
      technologies: ['Python', 'PyCaret', 'Pandas', 'Machine Learning', 'Streamlit'],
      github: 'https://github.com/avidzcheetah/liver-disease-prediction',
      demo: 'https://liver-disease-ml.streamlit.app',
      featured: true,
    },
    {
      id: 3,
      title: 'Scalable Network Simulation',
      category: 'Cybersecurity',
      period: 'Ongoing',
      description: 'Designed secure network infrastructure for multi-department university campus with VLAN segmentation, achieving 30% scalability capacity for future growth.',
      technologies: ['Cisco Packet Tracer', 'VLANs', 'Subnetting', 'Layer 3 Switching', 'QoS'],
      github: 'https://github.com/avidzcheetah/network-simulation',
      demo: 'https://youtube.com/watch?v=network-demo',
      featured: true,
    },
    {
      id: 4,
      title: 'Bash Web Crawler & Vulnerability Checker',
      category: 'Cybersecurity',
      period: 'Oct 2024',
      description: 'Advanced security tool for webpage content extraction and vulnerability assessment with security checks for insecure forms, external scripts, and CSP policies.',
      technologies: ['Bash', 'HTML Parsing', 'Web Security', 'Vulnerability Assessment'],
      github: 'https://github.com/avidzcheetah/bash-web-crawler',
      demo: null,
      featured: false,
    },
    {
      id: 5,
      title: 'mFlix – Movie Dashboard',
      category: 'Full-Stack',
      period: 'Nov 2024 - Dec 2024',
      description: 'Complete movie management platform with CRUD operations via Server Actions, responsive design with Tailwind CSS, and MongoDB integration.',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Vercel'],
      github: 'https://github.com/avidzcheetah/mflix',
      demo: 'https://mflix-dashboard.vercel.app',
      featured: true,
    },
    {
      id: 6,
      title: 'Fast Line Follower – Dextron',
      category: 'Robotics',
      period: 'Competition Project',
      description: 'Autonomous robot developed by Team MeowBotz for competition with Arduino Nano-powered system and 5-IR sensor integration.',
      technologies: ['C++', 'Arduino', 'Embedded Systems', 'Sensor Integration'],
      github: 'https://github.com/avidzcheetah/dextron-robot',
      demo: null,
      featured: false,
    },
    {
      id: 7,
      title: 'Python Snake Game',
      category: 'Full-Stack',
      period: 'Learning Project',
      description: 'Classic gaming implementation demonstrating programming fundamentals and game development concepts.',
      technologies: ['Python', 'Pygame', 'Game Development'],
      github: 'https://github.com/avidzcheetah/python-snake',
      demo: null,
      featured: false,
    },
    {
      id: 8,
      title: 'Instagram Secure Password Tool',
      category: 'Cybersecurity',
      period: 'Security Project',
      description: 'Enhanced security tool forked and improved from open source with advanced password encryption and security features.',
      technologies: ['Python', 'Cryptography', 'Security'],
      github: 'https://github.com/avidzcheetah/instagram-password-tool',
      demo: null,
      featured: false,
    },
  ];

  const categories = ['All', 'AI Innovation', 'Cybersecurity', 'Full-Stack', 'Robotics'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  // Theme-based background style
  const backgroundStyle = isDark
    ? {
        background: `
          radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)
        `
      }
    : {
        background: `
          radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.9) 100%)
        `
      };

  return (
    <>
      <style jsx>{`
        /* Geometric Background Animations */
        @keyframes geometricFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.3; 
          }
          33% { 
            transform: translateY(-20px) rotate(120deg) scale(1.1); 
            opacity: 0.6; 
          }
          66% { 
            transform: translateY(10px) rotate(240deg) scale(0.9); 
            opacity: 0.4; 
          }
        }
        
        @keyframes prismRotate {
          0% { 
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); 
            opacity: 0.2; 
          }
          50% { 
            transform: rotateX(180deg) rotateY(180deg) rotateZ(90deg); 
            opacity: 0.5; 
          }
          100% { 
            transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg); 
            opacity: 0.2; 
          }
        }
        
        @keyframes networkPulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.4; 
          }
          50% { 
            transform: scale(1.2); 
            opacity: 0.8; 
          }
        }
        
        @keyframes codeMatrix {
          0% { 
            transform: translateY(-100px); 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh); 
            opacity: 0; 
          }
        }
        
        /* Card Entrance Animations */
        @keyframes cardSlideIn {
          0% { 
            transform: translateY(60px) scale(0.9); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
        }
        
        @keyframes cardFlipIn {
          0% { 
            transform: rotateY(90deg) scale(0.8); 
            opacity: 0; 
          }
          100% { 
            transform: rotateY(0deg) scale(1); 
            opacity: 1; 
          }
        }
        
        @keyframes badgeWave {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
          }
          50% { 
            transform: scale(1.05) rotate(2deg); 
          }
        }
        
        /* Main Animation Classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .card-animate {
          animation: cardSlideIn 0.6s ease-out;
        }
        
        .card-animate:nth-child(2n) {
          animation: cardFlipIn 0.6s ease-out;
        }
        
        .badge-wave {
          animation: badgeWave 2s ease-in-out infinite;
        }
        
        .badge-wave:nth-child(2n) {
          animation-delay: 0.2s;
        }
        
        .badge-wave:nth-child(3n) {
          animation-delay: 0.4s;
        }
        
        /* Stagger Effects */
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        
        /* Background Effects */
        .geometric-shape {
          position: absolute;
          animation: geometricFloat 8s ease-in-out infinite;
        }
        
        .prism-effect {
          position: absolute;
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, ${isDark ? 'rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)' : 'rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05)'});
          border-radius: 12px;
          animation: prismRotate 12s linear infinite;
        }
        
        .network-node {
          position: absolute;
          width: 8px;
          height: 8px;
          background: ${isDark ? 'rgba(99, 102, 241, 0.6)' : 'rgba(99, 102, 241, 0.4)'};
          border-radius: 50%;
          animation: networkPulse 3s ease-in-out infinite;
        }
        
        .code-particle {
          position: absolute;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: ${isDark ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.2)'};
          animation: codeMatrix 8s linear infinite;
        }
        
        /* Glass Morphism Effects */
        .glass-card {
          background: ${isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
          backdrop-filter: blur(16px);
          border: 1px solid ${isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(148, 163, 184, 0.2)'};
          box-shadow: 0 8px 32px ${isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
        }
        
        .glass-card:hover {
          background: ${isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px ${isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.15)'};
        }
        
        /* Tab Animation */
        .tab-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          transition: all 0.3s ease;
        }
        
        /* Button Hover Effects */
        .btn-glow {
          position: relative;
          overflow: hidden;
        }
        
        .btn-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-glow:hover::before {
          left: 100%;
        }
      `}</style>

      <section 
        ref={sectionRef}
        id="projects" 
        className="py-24 relative overflow-hidden"
        style={backgroundStyle}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Geometric Shapes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`geometric-${i}`}
              className="geometric-shape"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full" />
            </div>
          ))}
          
          {/* Prism Effects */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`prism-${i}`}
              className="prism-effect"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
              }}
            />
          ))}
          
          {/* Network Nodes */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`node-${i}`}
              className="network-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
          
          {/* Code Particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`code-${i}`}
              className="code-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            >
              {['{ }', '< >', '[ ]', '( )', '/**/'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600'} bg-clip-text text-transparent`}>
              Featured Projects
            </h2>
            <div className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              A showcase of innovative projects spanning AI, cybersecurity, full-stack development, 
              and robotics, demonstrating technical excellence and practical problem-solving.
            </div>
          </div>

          <div className="animate-on-scroll">
            <Tabs defaultValue="featured" className="w-full" onValueChange={setActiveTab}>
              <TabsList className={`grid w-full grid-cols-2 mb-8 relative ${isDark ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
                <TabsTrigger value="featured" className="relative z-10">Featured Projects</TabsTrigger>
                <TabsTrigger value="all" className="relative z-10">All Projects</TabsTrigger>
              </TabsList>
              
              <TabsContent value="featured" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredProjects.map((project, index) => (
                    <Card 
                      key={project.id} 
                      className={`card-animate stagger-${index + 1} group glass-card transition-all duration-500 hover:shadow-2xl`}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge 
                            variant="outline" 
                            className={`mb-2 badge-wave ${isDark ? 'border-blue-400/30 text-blue-400' : 'border-blue-600/30 text-blue-600'}`}
                          >
                            {project.category}
                          </Badge>
                          {project.featured && (
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-transform" />
                          )}
                        </div>
                        <CardTitle className={`group-hover:text-primary transition-colors ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                          {project.title}
                        </CardTitle>
                        <CardDescription className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          <Calendar className="h-3 w-3" />
                          {project.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className={`text-xs badge-wave transition-all duration-300 ${
                                isDark 
                                  ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50' 
                                  : 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50'
                              }`}
                              style={{ animationDelay: `${techIndex * 0.1}s` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" variant="outline" className="btn-glow" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3 mr-1" />
                              Code
                            </a>
                          </Button>
                          {project.demo && (
                            <Button size="sm" className="btn-glow" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="all" className="space-y-8">
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {categories.map((category, index) => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "default" : "outline"}
                      size="sm"
                      className={`btn-glow transition-all duration-300 ${
                        activeCategory === category 
                          ? 'scale-110 shadow-lg' 
                          : 'hover:scale-105'
                      }`}
                      onClick={() => setActiveCategory(category)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                    <Card 
                      key={project.id} 
                      className={`card-animate stagger-${(index % 6) + 1} group glass-card transition-all duration-500 hover:shadow-2xl`}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge 
                            variant="outline" 
                            className={`mb-2 badge-wave ${isDark ? 'border-blue-400/30 text-blue-400' : 'border-blue-600/30 text-blue-600'}`}
                          >
                            {project.category}
                          </Badge>
                          {project.featured && (
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-transform" />
                          )}
                        </div>
                        <CardTitle className={`group-hover:text-primary transition-colors ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                          {project.title}
                        </CardTitle>
                        <CardDescription className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          <Calendar className="h-3 w-3" />
                          {project.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className={`text-xs badge-wave transition-all duration-300 ${
                                isDark 
                                  ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50' 
                                  : 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50'
                              }`}
                              style={{ animationDelay: `${techIndex * 0.1}s` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" variant="outline" className="btn-glow" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3 mr-1" />
                              Code
                            </a>
                          </Button>
                          {project.demo && (
                            <Button size="sm" className="btn-glow" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
