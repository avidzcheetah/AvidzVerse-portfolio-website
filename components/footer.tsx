'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { getHeroData, HeroData } from '@/app/actions/hero';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    async function loadData() {
      const data = await getHeroData();
      if (data) setHeroData(data);
    }
    loadData();
  }, []);

  return (
    <footer className="relative border-t border-space-700 bg-space-900 overflow-hidden z-10 p-4">
      {/* Decorative Grid Background for Footer */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(102, 252, 241, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 252, 241, 0.2) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Logo / Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-display font-bold tracking-widest text-slate-200">
              AVIDU.<span className="text-energy-blue text-glow">SYS</span>
            </h2>
            <p className="text-xs font-display text-slate-500 mt-2 uppercase tracking-widest">
              v2.0 // Vanguard Edition
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6">
            {heroData?.github_url && (
              <a href={heroData.github_url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-energy-blue transition-colors group">
                <div className="p-2 rounded bg-space-800 border border-space-700 group-hover:border-energy-blue/50 group-hover:bg-energy-blue/10 transition-all">
                  <Github className="w-5 h-5" />
                </div>
              </a>
            )}
            {heroData?.linkedin_url && (
              <a href={heroData.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-energy-blue transition-colors group">
                <div className="p-2 rounded bg-space-800 border border-space-700 group-hover:border-energy-blue/50 group-hover:bg-energy-blue/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
              </a>
            )}
            {heroData?.cv_url && (
              <a href={heroData.cv_url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-energy-blue transition-colors group">
                <div className="p-2 rounded bg-space-800 border border-space-700 group-hover:border-energy-blue/50 group-hover:bg-energy-blue/10 transition-all">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </a>
            )}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs font-display text-slate-500 tracking-wider">
              &copy; {currentYear} AVIDU WITHARANA.
            </p>
            <p className="text-[10px] font-display text-space-600 mt-1 uppercase tracking-widest">
              All systems nominal. Secure connection established.
            </p>
          </div>
          
        </div>
      </div>
      
      {/* Bottom glowing trim */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-energy-blue to-transparent opacity-50" />
    </footer>
  );
}