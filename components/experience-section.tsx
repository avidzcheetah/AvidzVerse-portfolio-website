'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Users, Trophy, Calendar } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('leadership');
  
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

  const leadership = [
    {
      title: 'Executive Director',
      organization: 'Nalanda Global Institute of Education (PVT) Ltd.',
      period: 'Mar 2025 - Present',
      type: 'Executive Leadership',
      description: 'Leading strategic initiatives in educational technology and institutional development.',
    },
    {
      title: 'Social Media Manager',
      organization: 'Vetgrow (PVT) Ltd.',
      period: 'Oct 2024 - Present',
      type: 'Executive Leadership',
      description: 'Managing digital marketing strategies and brand presence across multiple platforms.',
    },
    {
      title: 'Vice Chairman',
      organization: 'IEEE RAS Student Branch Chapter, University of Jaffna',
      period: 'Mar 2025 - Present',
      type: 'IEEE Leadership',
      description: 'Leading robotics and automation initiatives, organizing technical workshops and competitions.',
    },
    {
      title: 'Vice Chairman',
      organization: 'IEEE CIS Student Branch Chapter, University of Jaffna',
      period: 'Feb 2025 - Present',
      type: 'IEEE Leadership',
      description: 'Spearheading computational intelligence projects and research collaborations.',
    },
    {
      title: 'Membership Coordinator',
      organization: 'IEEE RAS Student Branch Chapter',
      period: 'Feb 2024 - Mar 2025',
      type: 'IEEE Leadership',
      description: 'Managed membership growth and engagement activities, achieving significant expansion.',
    },
    {
      title: 'Faculty Coordinator',
      organization: 'SEDS YARL, University of Jaffna',
      period: 'Apr 2024 - Present',
      type: 'Community Leadership',
      description: 'Coordinating space and engineering development activities for student community.',
    },
    {
      title: 'Student Ambassador',
      organization: 'LetsUpgrade Higher Education Community, India',
      period: 'Mar 2025',
      type: 'Community Leadership',
      description: 'Representing international educational initiatives and fostering cross-cultural collaboration.',
    },
  ];

  const achievements = [
    {
      title: 'AlgoRhythm – Champions',
      date: 'Jan 2025',
      description: 'First place in competitive programming and algorithmic problem-solving contest.',
      category: 'Competition',
    },
    {
      title: 'IEEE Regional Exemplary Student Branch Award',
      date: '2024',
      description: 'Recognition for outstanding contributions to IEEE student activities at University of Jaffna.',
      category: 'Recognition',
    },
    {
      title: 'Cloud Connect 2025 Participant',
      date: '2025',
      description: 'Participated in cloud computing conference with GDG Cloud Sri Lanka.',
      category: 'Conference',
    },
    {
      title: 'IEEEXtreme 18.0 Participant',
      date: '2024',
      description: 'Competed in the world\'s largest programming competition with Team EFacByteMinds.',
      category: 'Competition',
    },
  ];

  const executiveRoles = leadership.filter(role => role.type === 'Executive Leadership');
  const ieeeRoles = leadership.filter(role => role.type === 'IEEE Leadership');
  const communityRoles = leadership.filter(role => role.type === 'Community Leadership');

  // Theme-based background style
  const backgroundStyle = isDark
    ? {
        background: `
          radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, rgba(2, 8, 23, 0.98) 0%, rgba(15, 23, 42, 0.95) 100%)
        `
      }
    : {
        background: `
          radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, rgba(248, 250, 252, 0.98) 0%, rgba(226, 232, 240, 0.95) 100%)
        `
      };

  return (
    <>
      <style jsx>{`
        /* Professional Background Animations */
        @keyframes professionalFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.4; 
          }
          33% { 
            transform: translateY(-15px) rotate(90deg) scale(1.05); 
            opacity: 0.7; 
          }
          66% { 
            transform: translateY(8px) rotate(180deg) scale(0.95); 
            opacity: 0.5; 
          }
        }
        
        @keyframes networkConnect {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: scale(1.3); 
            opacity: 0.8; 
          }
        }
        
        @keyframes dataFlow {
          0% { 
            transform: translateY(-50px); 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(50vh); 
            opacity: 0; 
          }
        }
        
        /* Card Entrance Animations */
        @keyframes cardSlideUp {
          0% { 
            transform: translateY(40px) scale(0.95); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
        }
        
        @keyframes cardFadeIn {
          0% { 
            transform: translateX(-30px) scale(0.9); 
            opacity: 0; 
          }
          100% { 
            transform: translateX(0) scale(1); 
            opacity: 1; 
          }
        }
        
        @keyframes iconBounce {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
          }
          50% { 
            transform: scale(1.1) rotate(5deg); 
          }
        }
        
        @keyframes borderGlow {
          0%, 100% { 
            border-color: ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}; 
          }
          50% { 
            border-color: ${isDark ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.4)'}; 
          }
        }
        
        /* Achievement Trophy Animation */
        @keyframes trophyShine {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
            filter: brightness(1); 
          }
          50% { 
            transform: scale(1.15) rotate(-5deg); 
            filter: brightness(1.3); 
          }
        }
        
        /* Main Animation Classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .card-animate {
          animation: cardSlideUp 0.6s ease-out;
        }
        
        .card-animate:nth-child(2n) {
          animation: cardFadeIn 0.6s ease-out;
        }
        
        .icon-animate {
          transition: all 0.3s ease;
        }
        
        .icon-animate:hover {
          animation: iconBounce 0.6s ease-in-out;
        }
        
        /* Professional Card Styling */
        .professional-card {
          background: ${isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
          backdrop-filter: blur(12px);
          border: 1px solid ${isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(148, 163, 184, 0.2)'};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .professional-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}, transparent);
          transition: left 0.6s ease;
        }
        
        .professional-card:hover::before {
          left: 100%;
        }
        
        .professional-card:hover {
          background: ${isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px ${isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.15)'};
        }
        
        /* Border Animation for Leadership Cards */
        .executive-card {
          border-left: 4px solid #3b82f6;
          animation: borderGlow 3s ease-in-out infinite;
        }
        
        .ieee-card {
          border-left: 4px solid #8b5cf6;
        }
        
        .community-card {
          border-left: 4px solid #22c55e;
        }
        
        /* Achievement Card Special Effects */
        .achievement-card {
          position: relative;
          overflow: hidden;
        }
        
        .achievement-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, ${isDark ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 215, 0, 0.05)'} 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .achievement-card:hover::after {
          opacity: 1;
        }
        
        .trophy-icon {
          transition: all 0.3s ease;
        }
        
        .achievement-card:hover .trophy-icon {
          animation: trophyShine 0.8s ease-in-out;
        }
        
        /* Section Header Animations */
        .section-header {
          position: relative;
        }
        
        .section-header::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #22c55e);
          transition: width 0.6s ease;
        }
        
        .section-header.animate-in::after {
          width: 60px;
        }
        
        /* Stagger Effects */
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        
        /* Background Professional Elements */
        .professional-element {
          position: absolute;
          animation: professionalFloat 10s ease-in-out infinite;
        }
        
        .network-node {
          position: absolute;
          width: 6px;
          height: 6px;
          background: ${isDark ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.4)'};
          border-radius: 50%;
          animation: networkConnect 4s ease-in-out infinite;
        }
        
        .data-stream {
          position: absolute;
          font-family: 'Courier New', monospace;
          font-size: 10px;
          color: ${isDark ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.2)'};
          animation: dataFlow 6s linear infinite;
        }
        
        /* Tab Animation */
        .tab-modern {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .tab-modern:hover {
          transform: translateY(-2px);
        }
        
        /* Badge Animations */
        .badge-modern {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .badge-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.4s ease;
        }
        
        .badge-modern:hover::before {
          left: 100%;
        }
        
        .badge-modern:hover {
          transform: scale(1.05);
        }
      `}</style>

      <section 
        ref={sectionRef}
        id="experience" 
        className="py-24 relative overflow-hidden"
        style={backgroundStyle}
      >
        {/* Professional Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Professional Geometric Elements */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`professional-${i}`}
              className="professional-element"
              style={{
                left: `${15 + i * 12}%`,
                top: `${10 + i * 15}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                i % 3 === 0 ? 'from-blue-500/10 to-purple-500/10' :
                i % 3 === 1 ? 'from-purple-500/10 to-green-500/10' :
                'from-green-500/10 to-blue-500/10'
              }`} />
            </div>
          ))}
          
          {/* Network Connection Nodes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`network-${i}`}
              className="network-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
          
          {/* Data Streams */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`data-${i}`}
              className="data-stream"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            >
              {['→', '↗', '↘', '←', '↙', '↖'][i]}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll section-header">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-green-600'} bg-clip-text text-transparent`}>
              Professional Experience & Leadership
            </h2>
            <div className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              A track record of leadership excellence across executive positions, 
              IEEE activities, and community engagement, demonstrating strong organizational and strategic skills.
            </div>
          </div>

          <div className="animate-on-scroll stagger-1">
            <Tabs defaultValue="leadership" className="w-full" onValueChange={setActiveTab}>
              <TabsList className={`grid w-full grid-cols-2 mb-8 ${isDark ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
                <TabsTrigger value="leadership" className="tab-modern">Leadership Roles</TabsTrigger>
                <TabsTrigger value="achievements" className="tab-modern">Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="leadership" className="space-y-8">
                {/* Executive Leadership */}
                <div className="space-y-6 animate-on-scroll stagger-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <Building className="h-6 w-6 text-blue-600 icon-animate" />
                    </div>
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>Executive Leadership</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {executiveRoles.map((role, index) => (
                      <Card key={index} className={`card-animate stagger-${index + 3} professional-card executive-card group`}>
                        <CardHeader>
                          <CardTitle className={`text-lg group-hover:text-blue-600 transition-colors ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                            {role.title}
                          </CardTitle>
                          <CardDescription className={`space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            <div className="font-medium">{role.organization}</div>
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-3 w-3 icon-animate" />
                              {role.period}
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{role.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* IEEE Leadership */}
                <div className="space-y-6 animate-on-scroll stagger-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      <Users className="h-6 w-6 text-purple-600 icon-animate" />
                    </div>
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>IEEE Leadership Excellence</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {ieeeRoles.map((role, index) => (
                      <Card key={index} className={`card-animate stagger-${index + 4} professional-card ieee-card group`}>
                        <CardHeader>
                          <CardTitle className={`text-lg group-hover:text-purple-600 transition-colors ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                            {role.title}
                          </CardTitle>
                          <CardDescription className={`space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            <div className="font-medium">{role.organization}</div>
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-3 w-3 icon-animate" />
                              {role.period}
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{role.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Community Leadership */}
                <div className="space-y-6 animate-on-scroll stagger-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <Users className="h-6 w-6 text-green-600 icon-animate" />
                    </div>
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>Community Leadership</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {communityRoles.map((role, index) => (
                      <Card key={index} className={`card-animate stagger-${index + 5} professional-card community-card group`}>
                        <CardHeader>
                          <CardTitle className={`text-lg group-hover:text-green-600 transition-colors ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                            {role.title}
                          </CardTitle>
                          <CardDescription className={`space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            <div className="font-medium">{role.organization}</div>
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-3 w-3 icon-animate" />
                              {role.period}
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{role.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="achievements" className="space-y-8">
                <div className="flex items-center gap-3 mb-8 animate-on-scroll stagger-2">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                    <Trophy className="h-6 w-6 text-yellow-600 icon-animate" />
                  </div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>Recognition & Achievements</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className={`card-animate stagger-${index + 3} professional-card achievement-card group`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className={`mb-2 badge-modern ${isDark ? 'border-yellow-400/30 text-yellow-400' : 'border-yellow-600/30 text-yellow-600'}`}>
                            {achievement.category}
                          </Badge>
                          <Trophy className="h-4 w-4 text-yellow-600 trophy-icon" />
                        </div>
                        <CardTitle className={`text-lg group-hover:text-yellow-600 transition-colors ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                          {achievement.title}
                        </CardTitle>
                        <CardDescription className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          <Calendar className="h-3 w-3 icon-animate" />
                          {achievement.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{achievement.description}</p>
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