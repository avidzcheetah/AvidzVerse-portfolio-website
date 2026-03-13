'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Save, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getHeroData, updateHeroData, HeroData } from '@/app/actions/hero';

export default function AdminHero() {
  const [formData, setFormData] = useState<HeroData>({
    title: '',
    subtitle: '',
    tagline: '',
    description: '',
    email: '',
    github_url: '',
    linkedin_url: '',
    cv_url: '',
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    async function loadData() {
      const data = await getHeroData();
      if (data) {
        setFormData(data);
      }
      setIsLoading(false);
    }
    loadData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusType('idle');
    
    const result = await updateHeroData(formData);
    
    if (result.success) {
      setStatusType('success');
      setStatusText('Data successfully synchronized to mainframe.');
    } else {
      setStatusType('error');
      setStatusText(`Sync failure: ${result.error}`);
    }
    
    setIsSaving(false);
    
    // Clear status after 3 seconds
    setTimeout(() => {
      setStatusType('idle');
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="w-8 h-8 border-4 border-energy-teal border-t-transparent rounded-full animate-spin" />
        <span className="ml-4 font-display tracking-widest text-slate-400 uppercase">Fetching Database...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <header className="border-b border-energy-teal/30 pb-4 mb-8 flex items-center gap-3">
        <Terminal className="w-6 h-6 text-energy-teal" />
        <h1 className="text-2xl font-display font-bold text-slate-200 uppercase tracking-widest">
          Hero <span className="text-energy-teal">Config</span>
        </h1>
      </header>

      <form onSubmit={handleSubmit} className="glass-panel p-8 border border-space-700 rounded-lg relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-energy-teal" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="space-y-4">
            <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm border-b border-space-700 pb-2">Primary Identifiers</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-display tracking-widest text-slate-500 uppercase">First Name (Title)</label>
              <Input 
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 rounded-none h-12"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-display tracking-widest text-slate-500 uppercase">Last Name (Subtitle)</label>
              <Input 
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                required
                className="bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 rounded-none h-12"
              />
            </div>

            <div className="space-y-2 pt-4">
              <label className="text-xs font-display tracking-widest text-slate-500 uppercase">Professional Tagline</label>
              <Input 
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                required
                className="bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 rounded-none h-12"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm border-b border-space-700 pb-2">Biography Data</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-display tracking-widest text-slate-500 uppercase">Main Description</label>
              <Textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 rounded-none min-h-[160px] resize-none"
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4 pt-4 border-t border-space-700">
            <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm border-b border-space-700 pb-2">Comms & Social Links</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-display tracking-widest text-slate-500 uppercase">Primary Email</label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 rounded-none h-12"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-display tracking-widest text-slate-500 uppercase">GitHub URL</label>
                <Input 
                  name="github_url"
                  value={formData.github_url}
                  onChange={handleChange}
                  required
                  className="bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 rounded-none h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display tracking-widest text-slate-500 uppercase">LinkedIn URL</label>
                <Input 
                  name="linkedin_url"
                  value={formData.linkedin_url}
                  onChange={handleChange}
                  required
                  className="bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 rounded-none h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display tracking-widest text-slate-500 uppercase">CV Download URL</label>
                <Input 
                  name="cv_url"
                  value={formData.cv_url}
                  onChange={handleChange}
                  required
                  className="bg-space-900 border-space-700 focus:border-energy-teal text-slate-200 rounded-none h-12"
                />
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-space-700 flex items-center justify-between">
          <div className="flex-1">
            {statusType === 'success' && (
              <p className="text-green-400 font-display text-sm tracking-widest uppercase flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> {statusText}
              </p>
            )}
            {statusType === 'error' && (
              <p className="text-red-400 font-display text-sm tracking-widest uppercase flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> {statusText}
              </p>
            )}
          </div>
          
          <Button 
            type="submit" 
            disabled={isSaving}
            className="bg-energy-teal/20 hover:bg-energy-teal/40 text-energy-teal border border-energy-teal/50 font-display tracking-widest uppercase transition-all duration-300"
          >
            {isSaving ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-energy-teal border-t-transparent rounded-full animate-spin" />
                Transmitting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Save className="w-4 h-4" /> Update Array
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
