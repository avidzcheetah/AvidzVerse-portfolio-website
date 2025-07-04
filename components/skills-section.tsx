'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Shield, Brain, Cpu } from 'lucide-react';
import { useTheme } from 'next-themes';

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  const { theme, systemTheme } = useTheme();
  
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
            
            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-progress');
              }, index * 100);
            });

            // Animate badges
            const badges = entry.target.querySelectorAll('.badge-animate');
            badges.forEach((badge, index) => {
              setTimeout(() => {
                badge.classList.add('animate-badge');
              }, 600 + index * 50);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isClient]);

  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: <Code className="h-6 w-6" />,
      color: isDark ? 'text-blue-400' : 'text-blue-600',
      gradient: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
      ],
      technologies: ['Git', 'Visual Studio Code', 'Android Studio', 'Linux', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      title: 'Cybersecurity Expertise',
      icon: <Shield className="h-6 w-6" />,
      color: isDark ? 'text-red-400' : 'text-red-600',
      gradient: 'from-red-500 to-pink-400',
      skills: [
        { name: 'Vulnerability Analysis', level: 85 },
        { name: 'Penetration Testing', level: 80 },
        { name: 'Network Security', level: 88 },
        { name: 'Web Security', level: 82 },
        { name: 'Bash Scripting', level: 90 },
        { name: 'VLAN Implementation', level: 85 },
      ],
      technologies: ['Subnetting', 'QoS Configuration', 'Security Auditing', 'Incident Response'],
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="h-6 w-6" />,
      color: isDark ? 'text-purple-400' : 'text-purple-600',
      gradient: 'from-purple-500 to-indigo-400',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'AI Chatbots', level: 85 },
        { name: 'LLM Integration', level: 78 },
        { name: 'Data Analysis', level: 82 },
        { name: 'PyCaret', level: 75 },
        { name: 'Streamlit', level: 80 },
      ],
      technologies: ['ChatGPT', 'Gemini AI', 'Pandas', 'TensorFlow', 'PyTorch'],
    },
    {
      title: 'Embedded Systems',
      icon: <Cpu className="h-6 w-6" />,
      color: isDark ? 'text-green-400' : 'text-green-600',
      gradient: 'from-green-500 to-emerald-400',
      skills: [
        { name: 'Arduino Programming', level: 88 },
        { name: 'IoT Development', level: 82 },
        { name: 'Automation', level: 85 },
        { name: 'Microcontrollers', level: 80 },
        { name: 'Sensor Integration', level: 85 },
        { name: 'Circuit Design', level: 75 },
      ],
      technologies: ['ESP32', 'Raspberry Pi', 'Bluetooth', 'WiFi', 'Serial Communication'],
    },
  ];

  // Theme-based styles
  const backgroundStyle = isDark
    ? {
        background: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, rgba(34, 197, 94, 0.04) 0%, transparent 50%),
          linear-gradient(135deg, rgba(2, 8, 23, 0.98) 0%, rgba(15, 23, 42, 0.95) 100%)
        `
      }
    : {
        background: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, rgba(248, 250, 252, 0.98) 0%, rgba(226, 232, 240, 0.95) 100%)
        `
      };

  return (
    <>
      <style jsx>{`
        /* Enhanced Star Animations */
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
          25% { 
            opacity: 0.8; 
            transform: scale(1.3); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5); 
          }
          75% { 
            opacity: 0.6; 
            transform: scale(1.2); 
          }
        }
        
        @keyframes starPulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(0.8); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.4); 
          }
        }
        
        @keyframes starRotate {
          0% { 
            transform: rotate(0deg) scale(1); 
            opacity: 0.4; 
          }
          25% { 
            transform: rotate(90deg) scale(1.2); 
            opacity: 0.8; 
          }
          50% { 
            transform: rotate(180deg) scale(1.5); 
            opacity: 1; 
          }
          75% { 
            transform: rotate(270deg) scale(1.2); 
            opacity: 0.6; 
          }
          100% { 
            transform: rotate(360deg) scale(1); 
            opacity: 0.4; 
          }
        }
        
        @keyframes shootingStar {
          0% { 
            transform: translateX(-200px) translateY(200px) rotate(45deg); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            transform: translateX(100vw) translateY(-200px) rotate(45deg); 
            opacity: 0; 
          }
        }
        
        @keyframes constellation {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.1; 
          }
          50% { 
            transform: translateY(-15px) rotate(180deg); 
            opacity: 0.3; 
          }
        }
        
        /* Animation Classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .progress-bar {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1s ease-out;
        }
        
        .progress-bar.animate-progress {
          transform: scaleX(1);
        }
        
        .badge-animate {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        
        .badge-animate.animate-badge {
          opacity: 1;
          transform: scale(1);
        }
        
        /* Stagger delays */
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        
        /* Enhanced Star Effects */
        .star {
          position: absolute;
          border-radius: 50%;
          animation: twinkle 4s infinite;
        }
        
        .star-small {
          width: 2px;
          height: 2px;
          background: ${isDark ? 'white' : 'black'};
          box-shadow: 0 0 6px ${isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
        }
        
        .star-medium {
          width: 3px;
          height: 3px;
          background: ${isDark ? 'white' : 'black'};
          box-shadow: 0 0 8px ${isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'};
          animation: starPulse 3s infinite;
        }
        
        .star-large {
          width: 4px;
          height: 4px;
          background: ${isDark ? '#ffffff' : '#000000'};
          box-shadow: 0 0 12px ${isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'};
          animation: starRotate 6s infinite;
        }
        
        .star:nth-child(2n) {
          animation-delay: 1s;
        }
        
        .star:nth-child(3n) {
          animation-delay: 2s;
        }
        
        .star:nth-child(4n) {
          animation-delay: 3s;
        }
        
        .star:nth-child(5n) {
          animation-delay: 0.5s;
        }
        
        .shooting-star {
          position: absolute;
          width: 4px;
          height: 2px;
          background: linear-gradient(45deg, transparent, ${isDark ? 'white' : 'black'}, transparent);
          border-radius: 2px;
          animation: shootingStar 12s linear infinite;
        }
        
        .shooting-star:nth-child(2n) {
          animation-delay: 4s;
          animation-duration: 10s;
        }
        
        .shooting-star:nth-child(3n) {
          animation-delay: 8s;
          animation-duration: 14s;
        }
        
        .constellation-effect {
          position: absolute;
          width: 120px;
          height: 120px;
          opacity: ${isDark ? '0.1' : '0.05'};
          animation: constellation 12s ease-in-out infinite;
        }
        
        .glow-effect {
          box-shadow: 0 0 20px ${isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'};
          border: 1px solid ${isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'};
        }
        
        .glow-effect:hover {
          box-shadow: 0 0 30px ${isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'};
          border: 1px solid ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'};
        }
      `}</style>

      <section 
        ref={sectionRef} 
        id="skills" 
        className="py-24 relative overflow-hidden"
        style={backgroundStyle}
      >
        {/* Enhanced Star Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Small Stars */}
          {[...Array(40)].map((_, i) => (
            <div
              key={`star-small-${i}`}
              className="star star-small"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
          
          {/* Medium Stars */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`star-medium-${i}`}
              className="star star-medium"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
          
          {/* Large Stars */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`star-large-${i}`}
              className="star star-large"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
          
          {/* Shooting Stars */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`shooting-star-${i}`}
              className="shooting-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
              }}
            />
          ))}
          
          {/* Constellation Effects */}
          <div className="constellation-effect" style={{ top: '10%', left: '10%' }}>
            <div className={`w-full h-full bg-gradient-to-br ${isDark ? 'from-blue-400/20 to-purple-400/20' : 'from-blue-600/10 to-purple-600/10'} rounded-full blur-xl`} />
          </div>
          <div className="constellation-effect" style={{ top: '60%', right: '10%', animationDelay: '6s' }}>
            <div className={`w-full h-full bg-gradient-to-br ${isDark ? 'from-purple-400/20 to-pink-400/20' : 'from-purple-600/10 to-pink-600/10'} rounded-full blur-xl`} />
          </div>
          <div className="constellation-effect" style={{ top: '30%', left: '60%', animationDelay: '3s' }}>
            <div className={`w-full h-full bg-gradient-to-br ${isDark ? 'from-green-400/20 to-cyan-400/20' : 'from-green-600/10 to-cyan-600/10'} rounded-full blur-xl`} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600'} bg-clip-text text-transparent`}>
              Technical Skills
            </h2>
            <div className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              A comprehensive skill set spanning multiple domains of technology, 
              from cybersecurity to artificial intelligence and embedded systems.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`animate-on-scroll stagger-${index + 1} group hover:shadow-2xl transition-all duration-500 glow-effect
                  ${isDark 
                    ? 'bg-slate-900/60 backdrop-blur-sm border-slate-800/50 hover:bg-slate-900/80 hover:border-slate-700/50' 
                    : 'bg-white/60 backdrop-blur-sm border-gray-200/50 hover:bg-white/80 hover:border-gray-300/50'
                  }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`${category.color} group-hover:scale-110 transition-transform duration-300 p-2 rounded-full bg-gradient-to-r ${category.gradient} ${isDark ? 'bg-opacity-20' : 'bg-opacity-10'}`}>
                      {category.icon}
                    </div>
                    <span className={isDark ? 'text-slate-100' : 'text-slate-800'}>{category.title}</span>
                  </CardTitle>
                  <CardDescription className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Core competencies and practical experience
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Skills with Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{skill.name}</span>
                          <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className={`h-2 progress-bar ${isDark ? 'bg-slate-800/50' : 'bg-gray-200/50'}`}
                          />
                          <div 
                            className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-1000 group-hover:opacity-100`}
                            style={{
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${
                                category.gradient.includes('blue') ? '#3b82f6' : 
                                category.gradient.includes('red') ? '#ef4444' : 
                                category.gradient.includes('purple') ? '#8b5cf6' : '#22c55e'
                              }, transparent)`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className={`font-medium text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className={`text-xs badge-animate transition-all duration-300 ${
                            isDark 
                              ? 'bg-slate-800/50 text-slate-300 border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600/50' 
                              : 'bg-gray-100/50 text-gray-700 border-gray-300/50 hover:bg-gray-200/50 hover:border-gray-400/50'
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
