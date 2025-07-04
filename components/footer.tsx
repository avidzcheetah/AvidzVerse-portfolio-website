'use client';

import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const currentYear = new Date().getFullYear();

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

    const elements = footerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-background border-t relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">AW</span>
              </div>
              <span className="font-bold text-xl group-hover:text-primary transition-colors">Avidu Witharana</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Cybersecurity Visionary & AI Pioneer
            </p>
            <p className="text-sm italic bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              "I am a cheetah, chasing a miracle through cyberspace!"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <button 
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-all hover:scale-105 transform animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-400">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {[
                { href: 'https://github.com/avidzcheetah', icon: Github, color: 'hover:text-gray-600' },
                { href: 'https://linkedin.com/in/avidz', icon: Linkedin, color: 'hover:text-blue-600' },
                { href: 'mailto:avidu@ieee.org', icon: Mail, color: 'hover:text-green-600' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted-foreground/20 transition-all hover:scale-110 transform ${social.color} animate-bounce`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground animate-on-scroll opacity-0 translate-y-4 transition-all duration-1000 delay-600">
          <p className="flex items-center justify-center gap-2 group">
            © {currentYear} Avidu Witharana. Made with 
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse group-hover:scale-125 transition-transform" /> 
            and cutting-edge technology.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </footer>
  );
}