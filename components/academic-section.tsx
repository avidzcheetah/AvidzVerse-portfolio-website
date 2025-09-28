'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, School, BookOpen, Award } from 'lucide-react';
import { useTheme } from 'next-themes';

export function AcademicSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  useEffect(() => { setIsClient(true); }, []);

  useEffect(() => {
    if (!isClient) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el: any) => observer.observe(el));
    return () => observer.disconnect();
  }, [isClient]);

  const qualifications = [
    {
      type: "Degree",
      title: "BSc. Engineering (Hons.) in Computer Engineering",
      institution: "University of Jaffna",
      period: "Feb 2023 - Present",
      icon: <GraduationCap className="h-5 w-5 text-blue-600 icon-animate" />,
      cardClass: "degree-card"
    },
    {
      type: "Degree",
      title: "BSc. in Information Technology & Cybersecurity",
      institution: "PSB University Cambodia",
      period: "Sep 2023 - Present",
      icon: <GraduationCap className="h-5 w-5 text-purple-600 icon-animate" />,
      cardClass: "degree-card"
    },
    {
      type: "Diploma",
      title: "Diploma in Information Technology",
      institution: "SITC Campus",
      period: "2023",
      icon: <BookOpen className="h-5 w-5 text-green-600 icon-animate" />,
      cardClass: "diploma-card"
    },
    {
      type: "Diploma",
      title: "Diploma in Cyber Security",
      institution: "London School of Business and Social Sciences",
      period: "2022",
      icon: <BookOpen className="h-5 w-5 text-pink-600 icon-animate" />,
      cardClass: "diploma-card"
    },
    {
      type: "Diploma",
      title: "Diploma in English",
      institution: "SITC Campus",
      period: "2024",
      icon: <BookOpen className="h-5 w-5 text-yellow-700 icon-animate" />,
      cardClass: "diploma-card"
    },
    {
      type: "Diploma",
      title: "Diploma in Psychology and Counselling",
      institution: "SITC Campus",
      period: "2022",
      icon: <BookOpen className="h-5 w-5 text-cyan-600 icon-animate" />,
      cardClass: "diploma-card"
    },
    {
      type: "Certificate",
      title: "Advanced Certificate in Information and Communication Technology",
      institution: "BCI Campus",
      period: "2022",
      icon: <Award className="h-5 w-5 text-indigo-600 icon-animate" />,
      cardClass: "certificate-card"
    },
    {
      type: "Certificate",
      title: "Advanced Certificate in Parapsychology",
      institution: "NTSL Campus",
      period: "2025",
      icon: <Award className="h-5 w-5 text-red-600 icon-animate" />,
      cardClass: "certificate-card"
    },
    {
      type: "School",
      title: "Advanced Level 2021",
      institution: "St. Joseph Vaz College Wennappuwa",
      period: "2021",
      icon: <School className="h-5 w-5 text-gray-500 icon-animate" />,
      details: ["Mathematics - B", "Physics - B", "Chemistry - B"],
      cardClass: "school-card"
    },
    {
      type: "School",
      title: "Ordinary Level 2018",
      institution: "St. Joseph Vaz College Wennappuwa",
      period: "2018",
      icon: <School className="h-5 w-5 text-gray-700 icon-animate" />,
      details: ["9A's"],
      cardClass: "school-card"
    },
  ];

  const backgroundStyle = isDark
    ? {
      background: `
        radial-gradient(circle at 60% 30%, rgba(34,197,94,0.10) 0%, transparent 70%),
        radial-gradient(circle at 80% 80%, rgba(59,130,246,0.10) 0%, transparent 70%),
        radial-gradient(circle at 40% 60%, rgba(147,51,234,0.08) 0%, transparent 50%),
        linear-gradient(135deg, rgba(2,8,23,0.98) 0%, rgba(15,23,42,0.95) 100%)
      `
    }
    : {
      background: `
        radial-gradient(circle at 60% 30%, rgba(34,197,94,0.08) 0%, transparent 70%),
        radial-gradient(circle at 80% 80%, rgba(59,130,246,0.09) 0%, transparent 70%),
        radial-gradient(circle at 40% 60%, rgba(147,51,234,0.05) 0%, transparent 50%),
        linear-gradient(135deg, rgba(248,250,252,0.98) 0%, rgba(226,232,240,0.95) 100%)
      `
    };

  return (
    <>
      <style jsx>{`
        /* Professional Card Styling from ExperienceSection */
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
        
        .degree-card {
          border-left: 4px solid #3b82f6;
        }
        
        .diploma-card {
          border-left: 4px solid #22c55e;
        }
        
        .certificate-card {
          border-left: 4px solid #8b5cf6;
        }
        
        .school-card {
          border-left: 4px solid #94a3b8;
        }

        /* Enhanced Floating Shapes with more variety and galactic feel */
        .floating-shape {
          position: absolute;
          opacity: 0.15;
          filter: blur(1.2px);
          z-index: 0;
          will-change: transform;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        .shape1 {
          left:10%; top:12%; width:70px; height:70px;
          background: radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(147,51,234,0.6) 100%);
          border-radius: 35% 65% 70% 30% / 45% 60% 40% 55%;
          animation: floatShape1 12s infinite alternate, twinkle 4s infinite;
        }
        @keyframes floatShape1 {
          0%   { transform: translateY(0) rotate(0deg) scale(1);}
          50%  { transform: translateY(25px) rotate(6deg) scale(1.05);}
          100% { transform: translateY(40px) rotate(12deg) scale(1);}
        }
        .shape2 {
          right:8%; top:28%; width:45px; height:45px;
          background: radial-gradient(circle, rgba(34,197,94,0.8) 0%, rgba(236,72,153,0.6) 100%);
          border-radius: 52% 48% 60% 40%/55% 50% 50% 45%;
          animation: floatShape2 14s infinite alternate, twinkle 3s infinite 1s;
        }
        @keyframes floatShape2 {
          0%   { transform: translateY(0) rotate(0deg) scale(1);}
          50%  { transform: translateY(-18px) rotate(-6deg) scale(1.03);}
          100% { transform: translateY(-35px) rotate(-11deg) scale(1);}
        }
        .shape3 {
          left:55%; top:60%; width:40px; height:40px;
          background: radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(59,130,246,0.6) 100%);
          border-radius: 45% 55% 36% 64% / 60% 45% 55% 40%;
          animation: floatShape3 11s infinite alternate, twinkle 5s infinite;
        }
        @keyframes floatShape3 {
          0%   { transform: translateY(0) translateX(0) rotate(0deg) scale(1);}
          50%  { transform: translateY(18px) translateX(9px) rotate(10deg) scale(1.04);}
          100% { transform: translateY(38px) translateX(15px) rotate(20deg) scale(1);}
        }
        .shape4 {
          left:20%; top:70%; width:54px; height:54px;
          background: radial-gradient(circle, rgba(147,51,234,0.8) 0%, rgba(34,197,94,0.6) 100%);
          border-radius: 60% 40% 70% 30% / 45% 60% 40% 55%;
          animation: floatShape4 13s infinite alternate, twinkle 4.5s infinite 0.5s;
        }
        @keyframes floatShape4 {
          0%   { transform: translateY(0) rotate(0deg) scale(1);}
          50%  { transform: translateY(-27px) rotate(-7deg) scale(1.05);}
          100% { transform: translateY(-45px) rotate(-14deg) scale(1);}
        }
        .shape5 {
          left:80%; top:10%; width:32px; height:32px;
          background: radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(147,51,234,0.6) 100%);
          border-radius: 60%;
          animation: floatShape5 10s infinite alternate, twinkle 3.5s infinite;
        }
        @keyframes floatShape5 {
          0%   { transform: translateY(0) rotate(0deg) scale(1);}
          50%  { transform: translateY(22px) rotate(8deg) scale(1.07);}
          100% { transform: translateY(35px) rotate(17deg) scale(1);}
        }
        .shape6 {
          left:33%; top:37%; width:60px; height:60px;
          background: radial-gradient(circle, rgba(34,197,94,0.8) 0%, rgba(59,130,246,0.6) 100%);
          border-radius: 55% 45% 52% 48% / 47% 49% 51% 53%;
          animation: floatShape6 9s infinite alternate, twinkle 4s infinite 2s;
        }
        @keyframes floatShape6 {
          0%   { transform: translateY(0) translateX(0) scale(1);}
          50%  { transform: translateY(-20px) translateX(4px) scale(1.06);}
          100% { transform: translateY(-33px) translateX(5px) scale(1);}
        }

        /* New Twinkle Animation for Galactic Feel */
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; filter: brightness(1); }
          50% { opacity: 0.3; filter: brightness(1.5); }
        }

        /* Icon Animation */
        @keyframes iconBounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(5deg); }
        }
        .icon-animate {
          transition: all 0.3s ease;
        }
        .icon-animate:hover {
          animation: iconBounce 0.6s ease-in-out;
        }

        .academic-link {
          color: ${isDark ? '#1dc9b7' : '#0e7490'};
          text-decoration: underline dotted;
          font-size: 0.98em;
          transition: color 0.3s ease;
        }
        .academic-link:hover,
        .academic-link:focus {
          color: ${isDark ? '#22ddbb' : '#0b6475'};
          outline: none;
        }

        .academic-badge {
          font-size: 0.83em;
          border-radius: 12px;
          user-select: none;
          transition: transform 0.3s ease;
        }
        .academic-badge:hover {
          transform: scale(1.05);
        }

        /* Enhanced Button with pulse */
        @keyframes pulseGlow {
          0% { box-shadow: 0 6px 15px rgba(59,130,246,0.3); }
          50% { box-shadow: 0 6px 15px rgba(59,130,246,0.5); }
          100% { box-shadow: 0 6px 15px rgba(59,130,246,0.3); }
        }
        .certifications-btn {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #22c55e);
          color: white;
          border: none;
          font-weight: 700;
          border-radius: 9999px;
          padding: 0.5em 1.6em;
          font-size: 1em;
          animation: pulseGlow 2s infinite;
          margin: 0 auto;
          display: inline-block;
          cursor: pointer;
          user-select: none;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease, filter 0.25s ease;
          will-change: transform, box-shadow;
          text-align: center;
        }
        .certifications-btn:hover,
        .certifications-btn:focus-visible {
          transform: scale(1.08);
          box-shadow: 0 10px 24px rgba(59,130,246,0.55);
          filter: brightness(1.1);
          outline-offset: 4px;
          outline: 2px solid rgba(59,130,246,0.6);
        }
        .certifications-btn:active {
          transform: scale(0.96);
          box-shadow: 0 5px 10px rgba(59,130,246,0.3);
        }

        /* Stagger Delays for Cards */
        .stagger-0 { animation-delay: 0s; }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
        .stagger-9 { animation-delay: 0.9s; }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          will-change: opacity, transform;
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

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
          background: linear-gradient(90deg,#3b82f6,#8b5cf6,#22c55e);
          transition: width 0.6s ease;
          border-radius: 4px;
        }
        .section-header.animate-in::after {
          width: 95px;
        }

        /* Milky Way Galaxy Background */
        .milky-way {
          position: absolute;
          top: 50%;
          left: 50%;
          height: 1px;
          width: 1px;
          background-color: #fff;
          border-radius: 50%;
          box-shadow: -24vw -44vh 2px 2px #fff,38vw -4vh 0px 0px #fff,-20vw -48vh 1px 2px #fff,-39vw 38vh 3px 1px #fff,-42vw -11vh 0px 3px #fff,12vw 15vh 3px 3px #fff,42vw 6vh 3px 2px #fff,-8vw 9vh 0px 2px #fff,34vw -38vh 1px 0px #fff,-17vw 45vh 3px 1px #fff,22vw -36vh 3px 2px #fff,-42vw 1vh 1px 0px #fff;
          animation: zoom 10s alternate infinite;
          opacity: 0.8;
          pointer-events: none;
          z-index: -1;
        }

        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.5);
          }
        }

        @media (min-width: 768px) {
          .qualifications-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 767px) {
          .qualifications-grid {
            display: block;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="academic"
        className="py-24 relative overflow-hidden"
        style={backgroundStyle}
        tabIndex={-1}
      >
        {/* Milky Way Background */}
        <div className="milky-way" />

        {/* Enhanced Floating Animated Shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="floating-shape shape1" />
          <div className="floating-shape shape2" />
          <div className="floating-shape shape3" />
          <div className="floating-shape shape4" />
          <div className="floating-shape shape5" />
          <div className="floating-shape shape6" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll section-header">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-green-600'} bg-clip-text text-transparent`}>
              Academic Qualifications
            </h2>
            <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              A path of academic distinction, interdisciplinary expertise, and dedication to lifelong learning.
            </p>
          </div>

          <div className="qualifications-grid gap-8 relative z-10">
            {qualifications.map((q, idx) => (
              <Card key={idx} className={`professional-card ${q.cardClass} mb-1 animate-on-scroll stagger-${idx} group`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1 select-none">
                    {q.icon}
                    <Badge className="academic-badge">{q.type}</Badge>
                  </div>
                  <CardTitle className={`text-lg group-hover:text-blue-600 transition-colors ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                    {q.title}
                  </CardTitle>
                  <CardDescription className={`space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div className="font-medium">{q.institution}</div>
                    <div>{q.period}</div>
                    {q.details && (
                      <div className="mt-1">
                        {q.details.map((d, i) => (
                          <div key={i}>{d}</div>
                        ))}
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>{/* Reserved for future enhancement or details */}</CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="certifications" passHref legacyBehavior>
              <a className="certifications-btn" aria-label="View all certifications">
                View All Certifications
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}