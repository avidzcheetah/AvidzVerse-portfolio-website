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
      icon: <GraduationCap className="h-5 w-5 text-blue-600" />,
    },
    {
      type: "Degree",
      title: "BSc. in Information Technology & Cybersecurity",
      institution: "PSB University Cambodia",
      period: "Sep 2023 - Present",
      icon: <GraduationCap className="h-5 w-5 text-purple-600" />,
    },
    {
      type: "Diploma",
      title: "Diploma in Information Technology",
      institution: "SITC Campus",
      period: "2023",
      icon: <BookOpen className="h-5 w-5 text-green-600" />,
    },
    {
      type: "Diploma",
      title: "Diploma in Cyber Security",
      institution: "London School of Business and Social Sciences",
      period: "2022",
      icon: <BookOpen className="h-5 w-5 text-pink-600" />
    },
    {
      type: "Diploma",
      title: "Diploma in English",
      institution: "SITC Campus",
      period: "2024",
      icon: <BookOpen className="h-5 w-5 text-yellow-700" />,
    },
    {
      type: "Diploma",
      title: "Diploma in Psychology and Counselling",
      institution: "SITC Campus",
      period: "2022",
      icon: <BookOpen className="h-5 w-5 text-cyan-600" />,
    },
    {
      type: "Certificate",
      title: "Advanced Certificate in Information and Communication Technology",
      institution: "BCI Campus",
      period: "2022",
      icon: <Award className="h-5 w-5 text-indigo-600" />
    },
    {
      type: "Certificate",
      title: "Advanced Certificate in Parapsychology",
      institution: "NTSL Campus",
      period: "2025",
      icon: <Award className="h-5 w-5 text-red-600" />,
    },
    {
      type: "School",
      title: "Advanced Level 2021",
      institution: "St. Joseph Vaz College Wennappuwa",
      period: "2021",
      icon: <School className="h-5 w-5 text-gray-500" />,
      details: ["Mathematics - B", "Physics - B", "Chemistry - B"],
    },
    {
      type: "School",
      title: "Ordinary Level 2018",
      institution: "St. Joseph Vaz College Wennappuwa",
      period: "2018",
      icon: <School className="h-5 w-5 text-gray-700" />,
      details: ["9A's"],
    },
  ];

  const backgroundStyle = isDark
    ? {
      background: `
        radial-gradient(circle at 60% 30%, rgba(34,197,94,0.10) 0%, transparent 70%),
        radial-gradient(circle at 80% 80%, rgba(59,130,246,0.10) 0%, transparent 70%),
        linear-gradient(135deg, rgba(2,8,23,0.98) 0%, rgba(15,23,42,0.95) 100%)
      `
    }
    : {
      background: `
        radial-gradient(circle at 60% 30%, rgba(34,197,94,0.08) 0%, transparent 70%),
        radial-gradient(circle at 80% 80%, rgba(59,130,246,0.09) 0%, transparent 70%),
        linear-gradient(135deg, rgba(248,250,252,0.98) 0%, rgba(226,232,240,0.95) 100%)
      `
    };

  return (
    <>
      <style jsx>{`
        /* Floating Shapes with scale & rotate for smooth interaction */
        .floating-shape {
          position: absolute;
          opacity: 0.18;
          filter: blur(0.7px);
          z-index: 0;
          will-change: transform;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        .shape1 {
          left:10%; top:12%; width:70px; height:70px;
          background: linear-gradient(135deg, #3b82f6 70%, #a78bfa);
          border-radius: 35% 65% 70% 30% / 45% 60% 40% 55%;
          animation: floatShape1 12s infinite alternate;
          animation-timing-function: ease-in-out;
          transform-origin: center center;
        }
        @keyframes floatShape1 {
          0%   { transform: translateY(0) rotate(0deg) scale(1);}
          50%  { transform: translateY(25px) rotate(6deg) scale(1.05);}
          100% { transform: translateY(40px) rotate(12deg) scale(1);}
        }
        .shape2 {
          right:8%; top:28%; width:45px; height:45px;
          background: linear-gradient(155deg, #fbbf24 68%, #22d3ee);
          border-radius: 52% 48% 60% 40%/55% 50% 50% 45%;
          animation: floatShape2 14s infinite alternate;
          animation-timing-function: ease-in-out;
          transform-origin: center center;
        }
        @keyframes floatShape2 {
          0%   { transform: translateY(0) rotate(0deg) scale(1);}
          50%  { transform: translateY(-18px) rotate(-6deg) scale(1.03);}
          100% { transform: translateY(-35px) rotate(-11deg) scale(1);}
        }
        .shape3 {
          left:55%; top:60%; width:40px; height:40px;
          background: linear-gradient(115deg, #22c55e 60%, #8b5cf6);
          border-radius: 45% 55% 36% 64% / 60% 45% 55% 40%;
          animation: floatShape3 11s infinite alternate;
          animation-timing-function: ease-in-out;
          transform-origin: center center;
        }
        @keyframes floatShape3 {
          0%   { transform: translateY(0) translateX(0) rotate(0deg) scale(1);}
          50%  { transform: translateY(18px) translateX(9px) rotate(10deg) scale(1.04);}
          100% { transform: translateY(38px) translateX(15px) rotate(20deg) scale(1);}
        }
        .shape4 {
          left:20%; top:70%; width:54px; height:54px;
          background: linear-gradient(256deg, #ef4444 50%, #fde68a);
          border-radius: 60% 40% 70% 30% / 45% 60% 40% 55%;
          animation: floatShape4 13s infinite alternate;
          animation-timing-function: ease-in-out;
          transform-origin: center center;
        }
        @keyframes floatShape4 {
          0%   { transform: translateY(0) rotate(0deg) scale(1);}
          50%  { transform: translateY(-27px) rotate(-7deg) scale(1.05);}
          100% { transform: translateY(-45px) rotate(-14deg) scale(1);}
        }
        .shape5 {
          left:80%; top:10%; width:32px; height:32px;
          background: linear-gradient(45deg, #f472b6 70%, #06b6d4);
          border-radius: 60%;
          animation: floatShape5 10s infinite alternate;
          animation-timing-function: ease-in-out;
          transform-origin: center center;
        }
        @keyframes floatShape5 {
          0%   { transform: translateY(0) rotate(0deg) scale(1);}
          50%  { transform: translateY(22px) rotate(8deg) scale(1.07);}
          100% { transform: translateY(35px) rotate(17deg) scale(1);}
        }
        .shape6 {
          left:33%; top:37%; width:60px; height:60px;
          background: linear-gradient(285deg, #818cf8 50%, #a7f3d0);
          border-radius: 55% 45% 52% 48% / 47% 49% 51% 53%;
          animation: floatShape6 9s infinite alternate;
          animation-timing-function: ease-in-out;
          transform-origin: center center;
        }
        @keyframes floatShape6 {
          0%   { transform: translateY(0) translateX(0) scale(1);}
          50%  { transform: translateY(-20px) translateX(4px) scale(1.06);}
          100% { transform: translateY(-33px) translateX(5px) scale(1);}
        }

        /* Cards: subtle scale & drop shadow on hover */
        .academic-card {
          background: ${isDark ? 'rgba(30,41,59,0.66)' : 'rgba(255,255,255,0.67)'};
          border: 1px solid ${isDark ? 'rgba(148,163,184,0.10)' : 'rgba(148,163,184,0.22)'};
          backdrop-filter: blur(12px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
          cursor: default;
        }
        .academic-card:hover, .academic-card:focus-within {
          box-shadow: 0 16px 38px ${isDark ? 'rgba(34,197,94,0.35)' : 'rgba(59,130,246,0.22)'};
          background: ${isDark ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.96)'};
          transform: translateY(-6px) scale(1.035);
          outline: none;
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
        }

        /* Modern narrow button */
        .certifications-btn {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #22c55e);
          color: white;
          border: none;
          font-weight: 700;
          border-radius: 9999px; /* pill shape */
          padding: 0.5em 1.6em;
          font-size: 1em;
          box-shadow: 0 6px 15px rgb(59 130 246 / 0.3);
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
          box-shadow: 0 10px 24px rgb(59 130 246 / 0.55);
          filter: brightness(1.1);
          outline-offset: 4px;
          outline: 2px solid rgba(59,130,246,0.6);
          outline-radius: 9999px;
        }
        .certifications-btn:active {
          transform: scale(0.96);
          box-shadow: 0 5px 10px rgb(59 130 246 / 0.3);
        }

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
        {/* Floating Animated Shapes */}
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
              <Card key={idx} className="academic-card mb-1 animate-on-scroll opacity-75" tabIndex={0} aria-label={`${q.type} titled ${q.title}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1 select-none">
                    {q.icon}
                    <Badge className="academic-badge">{q.type}</Badge>
                  </div>
                  <CardTitle className={`${isDark ? 'text-slate-100' : 'text-slate-900'} leading-tight`}>
                    {q.title}
             
                  </CardTitle>
                  <CardDescription className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div>{q.institution}</div>
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
