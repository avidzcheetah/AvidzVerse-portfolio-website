'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Save, AlertCircle, CheckCircle2, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getExperienceData, updateExperienceData, ExperienceData, ExperienceItem, VolunteeringItem, AwardItem } from '@/app/actions/experience';

export default function AdminExperience() {
  const [formData, setFormData] = useState<ExperienceData>({
    experiences_json: [],
    volunteering_json: [],
    awards_json: []
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    async function loadData() {
      const data = await getExperienceData();
      if (data) {
        setFormData(data);
      }
      setIsLoading(false);
    }
    loadData();
  }, []);

  const handleExpChange = (index: number, field: keyof ExperienceItem, value: string | string[]) => {
    const newExps = [...formData.experiences_json];
    newExps[index] = { ...newExps[index], [field]: value };
    setFormData(prev => ({ ...prev, experiences_json: newExps }));
  };

  const handleExpPointsChange = (index: number, text: string) => {
    const pointsArray = text.split('\n').filter(p => p.trim() !== '');
    handleExpChange(index, 'points', pointsArray);
  };

  const addExp = () => {
    setFormData(prev => ({
      ...prev,
      experiences_json: [...prev.experiences_json, { role: '', company: '', period: '', points: [] }]
    }));
  };

  const removeExp = (index: number) => {
    setFormData(prev => ({
      ...prev,
      experiences_json: prev.experiences_json.filter((_, i) => i !== index)
    }));
  };

  const handleVolChange = (index: number, field: keyof VolunteeringItem, value: string) => {
    const newVols = [...formData.volunteering_json];
    newVols[index] = { ...newVols[index], [field]: value };
    setFormData(prev => ({ ...prev, volunteering_json: newVols }));
  };

  const addVol = () => {
    setFormData(prev => ({
      ...prev,
      volunteering_json: [...prev.volunteering_json, { role: '', org: '', period: '' }]
    }));
  };

  const removeVol = (index: number) => {
    setFormData(prev => ({
      ...prev,
      volunteering_json: prev.volunteering_json.filter((_, i) => i !== index)
    }));
  };

  const handleAwardChange = (index: number, field: keyof AwardItem, value: string) => {
    const newAwards = [...formData.awards_json];
    newAwards[index] = { ...newAwards[index], [field]: value };
    setFormData(prev => ({ ...prev, awards_json: newAwards }));
  };

  const addAward = () => {
    setFormData(prev => ({
      ...prev,
      awards_json: [...prev.awards_json, { title: '', date: '', description: '' }]
    }));
  };

  const removeAward = (index: number) => {
    setFormData(prev => ({
      ...prev,
      awards_json: prev.awards_json.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusType('idle');
    
    const result = await updateExperienceData(formData);
    
    if (result.success) {
      setStatusType('success');
      setStatusText('Data successfully synchronized to mainframe.');
    } else {
      setStatusType('error');
      setStatusText(`Sync failure: ${result.error}`);
    }
    
    setIsSaving(false);
    setTimeout(() => setStatusType('idle'), 3000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="w-8 h-8 border-4 border-energy-violet border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <header className="border-b border-energy-violet/30 pb-4 mb-8 flex items-center gap-3">
        <Activity className="w-6 h-6 text-energy-violet" />
        <h1 className="text-2xl font-display font-bold text-slate-200 uppercase tracking-widest">
          Service Logs <span className="text-energy-violet">Config</span>
        </h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Operational Ranks Array */}
        <div className="glass-panel p-8 border border-space-700 rounded-lg relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-energy-violet" />
          <div className="flex justify-between items-center border-b border-space-700 pb-2 mb-6">
            <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm">Operational Ranks (Experience)</h3>
            <Button type="button" onClick={addExp} size="sm" variant="outline" className="h-8 border-energy-violet/50 text-energy-violet hover:bg-energy-violet/10">
              <Plus className="w-4 h-4 mr-2" /> Add Rank
            </Button>
          </div>
          
          <div className="space-y-6">
            {formData.experiences_json.map((exp, index) => (
              <div key={index} className="space-y-4 bg-space-900/50 p-6 border border-space-700 rounded relative group">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeExp(index)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:bg-space-800 hover:text-red-300 transition-opacity h-8 w-8"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Role Title</label>
                    <Input value={exp.role} onChange={(e) => handleExpChange(index, 'role', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Company</label>
                    <Input value={exp.company} onChange={(e) => handleExpChange(index, 'company', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Period</label>
                    <Input value={exp.period} onChange={(e) => handleExpChange(index, 'period', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Bullet Points (One per line)</label>
                    <Textarea 
                      value={exp.points?.join('\n') || ''}
                      onChange={(e) => handleExpPointsChange(index, e.target.value)}
                      className="bg-space-900 border-space-700 text-slate-200 min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            ))}
            {formData.experiences_json.length === 0 && (
              <p className="text-sm text-slate-500 font-display italic">No experience logged.</p>
            )}
          </div>
        </div>

        {/* Volunteering Array */}
        <div className="glass-panel p-8 border border-space-700 rounded-lg relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-energy-teal" />
          <div className="flex justify-between items-center border-b border-space-700 pb-2 mb-6">
            <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm">Volunteering Operations</h3>
            <Button type="button" onClick={addVol} size="sm" variant="outline" className="h-8 border-energy-teal/50 text-energy-teal hover:bg-energy-teal/10">
              <Plus className="w-4 h-4 mr-2" /> Add Operation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.volunteering_json.map((vol, index) => (
              <div key={index} className="space-y-2 bg-space-900/50 p-4 border border-space-700 rounded relative group">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeVol(index)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:bg-space-800 hover:text-red-300 transition-opacity h-8 w-8"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                
                <div>
                  <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Role</label>
                  <Input value={vol.role} onChange={(e) => handleVolChange(index, 'role', e.target.value)} required className="h-9 bg-space-900 border-space-700 text-sm" />
                </div>
                <div>
                  <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Organization</label>
                  <Input value={vol.org} onChange={(e) => handleVolChange(index, 'org', e.target.value)} required className="h-9 bg-space-900 border-space-700 text-sm" />
                </div>
                <div>
                  <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Period (e.g. Mar 2025 – Mar 2026)</label>
                  <Input value={vol.period} onChange={(e) => handleVolChange(index, 'period', e.target.value)} required className="h-9 bg-space-900 border-space-700 text-sm" />
                </div>
              </div>
            ))}
            {formData.volunteering_json.length === 0 && (
              <p className="text-sm text-slate-500 font-display italic">No volunteering logged.</p>
            )}
          </div>
        </div>

        {/* Awards Array */}
        <div className="glass-panel p-8 border border-space-700 rounded-lg relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-energy-gold" />
          <div className="flex justify-between items-center border-b border-space-700 pb-2 mb-6">
            <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm">Achievements</h3>
            <Button type="button" onClick={addAward} size="sm" variant="outline" className="h-8 border-energy-gold/50 text-energy-gold hover:bg-energy-gold/10">
              <Plus className="w-4 h-4 mr-2" /> Add Achievement
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.awards_json.map((award, index) => (
              <div key={index} className="space-y-2 bg-space-900/50 p-4 border border-space-700 rounded relative group">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeAward(index)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:bg-space-800 hover:text-red-300 transition-opacity h-8 w-8"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                
                <div>
                  <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Title / Name</label>
                  <Input value={award.title} onChange={(e) => handleAwardChange(index, 'title', e.target.value)} required className="h-9 bg-space-900 border-space-700 text-sm" />
                </div>
                <div>
                  <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Date</label>
                  <Input value={award.date} onChange={(e) => handleAwardChange(index, 'date', e.target.value)} required className="h-9 bg-space-900 border-space-700 text-sm" />
                </div>
                <div>
                  <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Description</label>
                  <Textarea value={award.description} onChange={(e) => handleAwardChange(index, 'description', e.target.value)} required className="bg-space-900 border-space-700 text-slate-200 text-sm h-16" />
                </div>
              </div>
            ))}
            {formData.awards_json.length === 0 && (
              <p className="text-sm text-slate-500 font-display italic">No achievements logged.</p>
            )}
          </div>
        </div>

        <div className="mt-8 glass-panel p-6 border border-space-700 flex items-center justify-between rounded-lg">
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
            className="bg-energy-violet/20 hover:bg-energy-violet/40 text-energy-violet border border-energy-violet/50 font-display tracking-widest uppercase transition-all duration-300"
          >
            {isSaving ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-energy-violet border-t-transparent rounded-full animate-spin" />
                Transmitting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Save className="w-4 h-4" /> Sync Logs
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
