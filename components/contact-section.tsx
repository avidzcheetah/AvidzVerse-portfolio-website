'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ContactSection() {
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
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isClient]);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'avidu@ieee.org',
      href: 'mailto:avidu@ieee.org',
      color: 'blue',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+94 755786246',
      href: 'tel:+94755786246',
      color: 'green',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'North Western Province, Sri Lanka',
      href: null,
      color: 'purple',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      username: 'avidzcheetah',
      href: 'https://github.com/avidzcheetah',
      color: 'gray',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      username: 'avidz',
      href: 'https://linkedin.com/in/avidz',
      color: 'blue',
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
      username: '@avidz_cheetah',
      href: 'https://instagram.com/avidz_cheetah',
      color: 'pink',
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      label: 'YouTube',
      username: 'AVIDZ',
      href: 'https://www.youtube.com/@avidzxv',
      color: 'orange',
    },
  ];

  // Theme-based background style
  const backgroundStyle = isDark
    ? {
        background: `
          radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)
        `
      }
    : {
        background: `
          radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.9) 100%)
        `
      };

  return (
    <>
      <style jsx>{`
        /* Lightweight Background Animations */
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(-12px) rotate(180deg); 
            opacity: 0.7; 
          }
        }
        
        @keyframes connectionPulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: scale(1.2); 
            opacity: 0.6; 
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
        
        /* Modern Card Styling */
        .contact-card {
          background: ${isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
          backdrop-filter: blur(12px);
          border: 1px solid ${isDark ? 'rgba(148, 163, 184, 0.15)' : 'rgba(148, 163, 184, 0.25)'};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'}, transparent);
          transition: left 0.6s ease;
        }
        
        .contact-card:hover::before {
          left: 100%;
        }
        
        .contact-card:hover {
          background: ${isDark ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
          transform: translateY(-4px);
          box-shadow: 0 20px 40px ${isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
        }
        
        /* Contact Info Animations */
        .contact-info-item {
          transition: all 0.3s ease;
          border-radius: 12px;
          padding: 16px;
          position: relative;
          overflow: hidden;
        }
        
        .contact-info-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent, ${isDark ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.03)'}, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .contact-info-item:hover::before {
          opacity: 1;
        }
        
        .contact-info-item:hover {
          transform: translateX(8px);
          background: ${isDark ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.02)'};
        }
        
        /* Icon Animations */
        .icon-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .icon-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: radial-gradient(circle, currentColor 0%, transparent 70%);
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease;
        }
        
        .contact-info-item:hover .icon-container::after {
          opacity: 0.1;
          transform: scale(1.2);
        }
        
        .icon-container:hover {
          transform: scale(1.1) rotate(5deg);
        }
        
        /* Social Link Animations */
        .social-link {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .social-link:hover::before {
          left: 100%;
        }
        
        .social-link:hover {
          transform: translateY(-2px) scale(1.02);
          background: ${isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'};
        }
        
        /* Form Animations */
        .form-field {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .form-field:focus-within {
          transform: translateY(-2px);
        }
        
        .form-field input,
        .form-field textarea {
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .form-field input:focus,
        .form-field textarea:focus {
          border-color: ${isDark ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.3)'};
          box-shadow: 0 0 0 4px ${isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'};
          transform: scale(1.01);
        }
        
        .form-label {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .form-field:focus-within .form-label {
          color: ${isDark ? '#60a5fa' : '#3b82f6'};
          transform: translateY(-2px);
        }
        
        /* Button Animation */
        .submit-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .submit-button:hover::before {
          left: 100%;
        }
        
        .submit-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .submit-button:active {
          transform: translateY(0) scale(0.98);
        }
        
        /* Background Elements */
        .bg-element {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: gentleFloat 8s ease-in-out infinite;
        }
        
        .connection-node {
          position: absolute;
          width: 6px;
          height: 6px;
          background: ${isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.3)'};
          border-radius: 50%;
          animation: connectionPulse 4s ease-in-out infinite;
        }
        
        /* Stagger Delays */
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .delay-6 { transition-delay: 0.6s; }
        
        /* Color Variants */
        .color-blue { color: ${isDark ? '#60a5fa' : '#3b82f6'}; }
        .color-green { color: ${isDark ? '#4ade80' : '#22c55e'}; }
        .color-purple { color: ${isDark ? '#a78bfa' : '#8b5cf6'}; }
        .color-gray { color: ${isDark ? '#9ca3af' : '#6b7280'}; }
        .color-pink { color: ${isDark ? '#f472b6' : '#ec4899'}; }
        .color-sky { color: ${isDark ? '#38bdf8' : '#0ea5e9'}; }
        
        /* Responsive Optimizations */
        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll,
          .contact-card,
          .bg-element {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section 
        ref={sectionRef}
        id="contact" 
        className="py-24 relative overflow-hidden"
        style={backgroundStyle}
      >
        {/* Lightweight Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`bg-${i}`}
              className="bg-element"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + i * 12}%`,
                width: `${20 + i * 5}px`,
                height: `${20 + i * 5}px`,
                background: `linear-gradient(135deg, ${
                  i % 3 === 0 ? 'rgba(59, 130, 246, 0.1)' :
                  i % 3 === 1 ? 'rgba(168, 85, 247, 0.1)' :
                  'rgba(34, 197, 94, 0.1)'
                }, transparent)`,
                animationDelay: `${i * 1.3}s`,
              }}
            />
          ))}
          
          {/* Connection Nodes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`node-${i}`}
              className="connection-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-green-600'} bg-clip-text text-transparent`}>
              Get In Touch
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Ready to collaborate on innovative projects or discuss opportunities in cybersecurity and AI? 
              Let's connect and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-on-scroll delay-1">
              <Card className="contact-card">
                <CardHeader>
                  <CardTitle className={isDark ? 'text-slate-100' : 'text-slate-800'}>Contact Information</CardTitle>
                  <CardDescription className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-info-item">
                      <div className="flex items-center gap-4 relative z-10">
                        <div className={`icon-container flex-shrink-0 w-10 h-10 bg-${info.color}-100 dark:bg-${info.color}-900/30 rounded-full flex items-center justify-center color-${info.color}`}>
                          {info.icon}
                        </div>
                        <div>
                          <div className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{info.label}</div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className={`${isDark ? 'text-slate-400 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'} transition-colors duration-300`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>{info.value}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="contact-card">
                <CardHeader>
                  <CardTitle className={isDark ? 'text-slate-100' : 'text-slate-800'}>Social Media & Professional Networks</CardTitle>
                  <CardDescription className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    Connect with me on various platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link flex items-center gap-4 p-3 rounded-lg group"
                    >
                      <div className={`icon-container flex-shrink-0 w-10 h-10 bg-${social.color}-100 dark:bg-${social.color}-900/30 rounded-full flex items-center justify-center group-hover:bg-${social.color}-200 dark:group-hover:bg-${social.color}-800/50 transition-colors color-${social.color}`}>
                        {social.icon}
                      </div>
                      <div>
                        <div className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{social.label}</div>
                        <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{social.username}</div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="contact-card animate-on-scroll delay-2">
              <CardHeader>
                <CardTitle className={isDark ? 'text-slate-100' : 'text-slate-800'}>Send a Message</CardTitle>
                <CardDescription className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  Have a project in mind or want to discuss collaboration opportunities?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-field space-y-2">
                      <label className={`form-label text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="form-field space-y-2">
                      <label className={`form-label text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="form-field space-y-2">
                    <label className={`form-label text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="form-field space-y-2">
                    <label className={`form-label text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Subject</label>
                    <Input placeholder="Project Collaboration" />
                  </div>
                  <div className="form-field space-y-2">
                    <label className={`form-label text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Message</label>
                    <Textarea
                      placeholder="I'm interested in discussing a potential collaboration..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="submit-button w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
