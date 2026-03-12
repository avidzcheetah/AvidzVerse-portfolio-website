'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Download, ChevronDown, Rocket } from 'lucide-react';

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-sm border-energy-blue/50 text-energy-blue bg-energy-blue/10 backdrop-blur-sm shadow-[0_0_15px_rgba(102,252,241,0.2)]">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                System Online: Vanguard Ready
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-2">
                <span className="text-white">AVIDU</span>
                <br />
                <span className="bg-gradient-to-r from-energy-blue via-energy-teal to-energy-violet bg-clip-text text-transparent text-glow">
                  WITHARANA
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-400 font-sans tracking-wide mt-4">
                Cybersecurity Engineer & AI Specialist
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Engineering robust security protocols and developing intelligent systems to safeguard the digital frontier.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="bg-energy-blue text-space-900 hover:bg-energy-teal hover:text-white border-0 shadow-[0_0_20px_rgba(102,252,241,0.4)] transition-all duration-300 hover:scale-105 font-display tracking-widest uppercase"
              >
                <Rocket className="mr-2 h-4 w-4" />
                View Missions
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToContact}
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:scale-105 font-display tracking-widest uppercase glass-panel-light bg-transparent"
              >
                <Mail className="mr-2 h-4 w-4" />
                Establish Comm Link
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-4"
            >
              <a href="https://github.com/avidzcheetah" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-energy-blue transition-colors hover:scale-110 transform duration-300">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/avidz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-energy-blue transition-colors hover:scale-110 transform duration-300">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1YoLxQiwcBcME2xCFSWnE629HFxcXoSQB" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-energy-blue transition-colors hover:scale-110 transform duration-300 flex items-center gap-2 text-sm uppercase tracking-wider font-display">
                <Download className="w-5 h-5" />
                <span>Decrypt CV</span>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Geometric Hologram representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex justify-center items-center h-[500px] w-full"
          >
            {/* Holographic rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-[400px] h-[400px] border border-energy-blue/20 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] border border-energy-violet/30 rounded-full"
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)' }}
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[200px] h-[200px] border-2 border-energy-blue/40 rounded-full border-dotted"
              />
            </div>

            {/* Central Avatar/Core */}
            <div className="relative z-20 w-64 h-64 rounded-full p-2 bg-gradient-to-tr from-energy-blue/20 to-energy-violet/20 backdrop-blur-sm border border-energy-blue/30 shadow-[0_0_50px_rgba(102,252,241,0.2)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-space-800 relative z-30">
                <img
                  src="https://i.postimg.cc/T2HH4XGD/552148651-18419174269104474-5509321560574648050-n-1.jpg"
                  alt="Avidu Witharana"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 opacity-90"
                />
                {/* Scanline overlay over avatar */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none" />
              </div>
            </div>

            {/* Context Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] right-[10%] glass-panel-light px-3 py-1.5 rounded bg-space-900/80 border border-energy-blue/30"
            >
              <span className="text-xs font-display text-energy-blue uppercase tracking-widest">Lvl 99 SEC</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[5%] glass-panel-light px-3 py-1.5 rounded bg-space-900/80 border border-energy-violet/30"
            >
              <span className="text-xs font-display text-energy-violet uppercase tracking-widest">AI Module Active</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 cursor-pointer hover:text-energy-blue transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-display">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}