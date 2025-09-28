'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-40"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-left space-y-8 animate-fade-in-up">
              {/* Status Badge */}
              <div className="animate-fade-in-up delay-100">
                <Badge variant="outline" className="px-4 py-2 text-sm border-cyan-400/50 text-cyan-400 bg-cyan-400/10 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for Opportunities
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="animate-fade-in-up delay-200">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    Avidu
                  </span>
                  <br />
                  <span className="text-white">
                    Witharana
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <div className="animate-fade-in-up delay-300">
                <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
                  Computer Engineering & Cybersecurity UG
                </h2>
              </div>

              {/* Description */}
              <div className="animate-fade-in-up delay-400">
                <p className="text-lg text-gray-400 mb-6 max-w-xl">
                  Combining AI and CySec for a secure cyberspace | Computer Engineering Undergraduate | IEEE Leadership
                </p>
              </div>

              {/* Quote */}
              <div className="animate-fade-in-up delay-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl rounded-lg"></div>
                  <p className="relative text-sm md:text-s font-small text-cyan-300 italic bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/30">
                  "There are only two types of companies in the world: those that have been breached and know it and those that have been breached and don't know it."
                    <br />
                    - Ted Schlein
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="animate-fade-in-up delay-600">
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="https://drive.google.com/uc?export=download&id=1YoLxQiwcBcME2xCFSWnE629HFxcXoSQB" 
                  target="_blank"
                  rel="noopener noreferrer"
                  download>
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                </a>

                  <Button size="lg" variant="outline" onClick={() => scrollToSection('#projects')} className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Projects
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('#contact')} className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="animate-fade-in-up delay-700">
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/avidzcheetah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <div className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300">
                      <Github className="h-5 w-5" />
                    </div>
                    <span className="hidden sm:inline font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/avidz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <div className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <span className="hidden sm:inline font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:avidu@ieee.org"
                    className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <div className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-purple-400 group-hover:bg-purple-400/10 transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="hidden sm:inline font-medium">Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Photo */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up delay-300">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Outer Glow Ring */}
                <div className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-1 animate-spin-slow z-10">
                  <div className="w-full h-full rounded-full bg-slate-900"></div>
                </div>
                
                {/* Middle Ring */}
                <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 p-1 animate-pulse z-20">
                  <div className="w-full h-full rounded-full bg-slate-900"></div>
                </div>
                
                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl transform hover:scale-105 transition-all duration-500 z-30">
                  <img
                    src="https://i.postimg.cc/T2HH4XGD/552148651-18419174269104474-5509321560574648050-n-1.jpg"
                    alt="Avidu Witharana"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000 z-40">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1500 z-40">
                  <span className="text-white font-bold text-xs">CySec</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-2000 z-40">
                  <span className="text-white font-bold text-xs">SE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-pulse" />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}