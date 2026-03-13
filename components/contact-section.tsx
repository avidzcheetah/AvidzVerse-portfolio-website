'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageSquare, Send, Fingerprint, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getHeroData, HeroData } from '@/app/actions/hero';

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    async function loadData() {
      const data = await getHeroData();
      if (data) setHeroData(data);
    }
    loadData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset after a delay
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-xl bg-space-900 border border-energy-teal/30 mb-6 shadow-[0_0_20px_rgba(69,162,158,0.2)]">
            <Network className="w-6 h-6 text-energy-teal" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-light text-slate-200 tracking-wider">
            SECURE <span className="font-bold text-energy-teal text-glow">COMMS</span>
          </h2>
          <p className="mt-4 text-slate-500 font-display tracking-widest uppercase text-sm">
            Establish encrypted connection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Contact Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass-panel p-6 border-l-2 border-energy-teal h-full flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-display tracking-widest text-energy-teal uppercase mb-2 flex items-center gap-2">
                    <Fingerprint className="w-4 h-4" /> Identity Verified
                  </h3>
                  <p className="text-xl font-bold text-slate-200">Avidu Witharana</p>
                  <p className="text-sm text-slate-400 mt-1">Cybersecurity Engineer</p>
                </div>

                <div className="space-y-4">
                  <a href={`mailto:${heroData?.email || 'avidu.witharan@gmail.com'}`} className="flex items-center gap-4 text-slate-300 hover:text-energy-teal transition-colors group p-3 rounded bg-space-900/50 border border-space-700 hover:border-energy-teal/50">
                    <div className="p-2 rounded bg-space-800 group-hover:bg-energy-teal/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-display uppercase tracking-widest text-slate-500 mb-1">Primary Channel</p>
                      <p className="font-sans text-sm break-all">{heroData?.email || 'avidu.witharan@gmail.com'}</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 text-slate-300 group p-3 rounded bg-space-900/50 border border-space-700">
                    <div className="p-2 rounded bg-space-800">
                      <MessageSquare className="w-5 h-5 opacity-50" />
                    </div>
                    <div>
                      <p className="text-xs font-display uppercase tracking-widest text-slate-500 mb-1">Direct Message</p>
                      <p className="font-sans text-sm italic text-slate-500">Available via LinkedIn</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-space-700">
                  <p className="text-xs font-display text-slate-500 leading-relaxed">
                    System monitoring active. All communications are subject to encryption protocols. Response latency: {'<'} 24 hours standard cycle.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-3"
          >
            <div className="glass-panel p-6 sm:p-8 border-t-2 border-energy-teal relative overflow-hidden">
              
              {/* Decorative scanline */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-energy-teal glow-line" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-display tracking-widest text-energy-teal uppercase">Callsign / Name</label>
                    <Input 
                      required 
                      placeholder="Enter designation" 
                      className="bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 placeholder:text-slate-600 focus-visible:ring-energy-teal rounded-none placeholder:font-display placeholder:text-xs tracking-wider h-12" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-display tracking-widest text-energy-teal uppercase">Return Frequency / Email</label>
                    <Input 
                      required 
                      type="email" 
                      placeholder="Enter comm link" 
                      className="bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 placeholder:text-slate-600 focus-visible:ring-energy-teal rounded-none placeholder:font-display placeholder:text-xs tracking-wider h-12" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-display tracking-widest text-energy-teal uppercase">Transmission Payload</label>
                  <Textarea 
                    required 
                    placeholder="Input message data..." 
                    className="min-h-[150px] bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 placeholder:text-slate-600 focus-visible:ring-energy-teal rounded-none resize-none placeholder:font-display placeholder:text-xs tracking-wider p-4" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting || submitStatus === 'success'}
                  className={`w-full h-14 font-display tracking-widest uppercase transition-all duration-300 ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500 hover:bg-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.3)]' 
                      : 'bg-energy-teal/10 hover:bg-energy-teal/20 text-energy-teal border border-energy-teal/50 hover:border-energy-teal hover:shadow-[0_0_20px_rgba(69,162,158,0.4)]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-energy-teal border-t-transparent rounded-full animate-spin" />
                      Encrypting...
                    </span>
                  ) : submitStatus === 'success' ? (
                    <span className="flex items-center gap-2">Transmission Sent</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Transmit Data
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
