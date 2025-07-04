'use client';

import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Building, Target, Calendar } from 'lucide-react';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
  }, []);

  const education = [
    {
      degree: 'BSc. Engineering (Hons.) in Computer Engineering',
      institution: 'University of Jaffna',
      period: 'Feb 2023 - Present',
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      degree: 'BSc. in Information Technology & Cybersecurity',
      institution: 'PSB University Cambodia',
      period: 'Sep 2023 - Present',
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ];

  const currentRoles = [
    {
      title: 'Executive Director',
      organization: 'Nalanda Global Institute of Education (PVT) Ltd.',
      period: 'Mar 2025 - Present',
      icon: <Building className="h-5 w-5" />,
    },
    {
      title: 'Social Media Manager',
      organization: 'Vetgrow (PVT) Ltd.',
      period: 'Oct 2024 - Present',
      icon: <Building className="h-5 w-5" />,
    },
  ];

  return (
    <>
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        
        .bounce-in {
          animation: bounceIn 0.6s ease-out;
        }
        
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <section ref={sectionRef} id="about" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate technologist at the intersection of cybersecurity and artificial intelligence, 
              dedicated to creating secure and innovative solutions for the digital future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <Card className="animate-on-scroll stagger-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                  </div>
                  Education
                </CardTitle>
                <CardDescription>
                  Currently pursuing dual degrees in Computer Engineering and Cybersecurity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-4 hover:border-blue-400 transition-all duration-200 group/item">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="group-hover/item:scale-110 transition-transform">
                        {edu.icon}
                      </div>
                      <h3 className="font-semibold group-hover/item:text-blue-600 transition-colors">{edu.degree}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Current Roles */}
            <Card className="animate-on-scroll stagger-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-purple-600 transition-colors">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full group-hover:scale-110 transition-transform">
                    <Building className="h-5 w-5 text-purple-600" />
                  </div>
                  Current Roles
                </CardTitle>
                <CardDescription>
                  Leading professional positions in education and technology
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentRoles.map((role, index) => (
                  <div key={index} className="border-l-2 border-purple-200 pl-4 hover:border-purple-400 transition-all duration-200 group/item">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="group-hover/item:scale-110 transition-transform">
                        {role.icon}
                      </div>
                      <h3 className="font-semibold group-hover/item:text-purple-600 transition-colors">{role.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{role.organization}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{role.period}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Mission Statement */}
          <Card className="animate-on-scroll bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-0 hover:shadow-2xl hover:scale-105 transform group transition-all duration-300" style={{ transform: 'translateY(30px)', transitionDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-center justify-center group-hover:scale-110 transition-transform">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full animate-pulse">
                  <Target className="h-5 w-5 text-orange-600" />
                </div>
                Mission Statement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                "Currently working on combining AI and CySec for a secure cyberspace"
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {['AI Innovation', 'Cybersecurity', 'Leadership', 'Research', 'Open Source'].map((badge, index) => (
                  <Badge 
                    key={badge} 
                    variant="secondary" 
                    className="hover:scale-110 transition-transform cursor-default animate-bounce"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
