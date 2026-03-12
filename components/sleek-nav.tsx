'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, BookOpen, Rocket, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { name: 'Launchpad', href: '#hero', icon: <Home className="w-4 h-4" /> },
  { name: 'Dossier', href: '#about', icon: <User className="w-4 h-4" /> },
  { name: 'Academics', href: '#academic', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Tech Tree', href: '#skills', icon: <Rocket className="w-4 h-4" /> },
  { name: 'Missions', href: '#projects', icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Comms', href: '#contact', icon: <Mail className="w-4 h-4" /> },
];

export function SleekNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-8 relative overflow-hidden">
          {/* Neon Glow under active item - animated via CSS or Framer */}
          
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative flex items-center gap-2 text-sm font-display tracking-wider uppercase transition-colors duration-300 ${
                  isActive ? 'text-energy-blue text-glow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.icon}
                <span className="hidden lg:inline">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navGlow"
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-energy-blue shadow-[0_0_8px_rgba(102,252,241,0.8)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden fixed top-6 right-6 z-[60]">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 glass-panel rounded-lg text-energy-blue hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 bg-space-900/90 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 w-full px-8">
              {navItems.map((item, i) => (
                <motion.button
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-4 text-2xl font-display uppercase tracking-widest ${
                    activeSection === item.href.substring(1) ? 'text-energy-blue text-glow' : 'text-slate-400'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
