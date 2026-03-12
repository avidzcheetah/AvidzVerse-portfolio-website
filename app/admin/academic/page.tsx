'use client';

import React, { useState, useEffect } from 'react';
import { GraduationCap, Save, AlertCircle, CheckCircle2, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getAcademicData, updateAcademicData, AcademicData, DegreeItem, DiplomaItem } from '@/app/actions/academic';

export default function AdminAcademic() {
  const [formData, setFormData] = useState<AcademicData>({
    degrees_json: [],
    diplomas_json: [],
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    async function loadData() {
      const data = await getAcademicData();
      if (data) {
        setFormData(data);
      }
      setIsLoading(false);
    }
    loadData();
  }, []);

  const handleDegreeChange = (index: number, field: keyof DegreeItem, value: string | string[]) => {
    const newDegrees = [...formData.degrees_json];
    newDegrees[index] = { ...newDegrees[index], [field]: value };
    setFormData(prev => ({ ...prev, degrees_json: newDegrees }));
  };

  const handleDiplomaChange = (index: number, field: keyof DiplomaItem, value: string) => {
    const newDiplomas = [...formData.diplomas_json];
    newDiplomas[index] = { ...newDiplomas[index], [field]: value };
    setFormData(prev => ({ ...prev, diplomas_json: newDiplomas }));
  };

  const addDegree = () => {
    setFormData(prev => ({
      ...prev,
      degrees_json: [...prev.degrees_json, { title: '', institution: '', period: '', status: '', color: 'energy-blue', details: [] }]
    }));
  };

  const removeDegree = (index: number) => {
    setFormData(prev => ({
      ...prev,
      degrees_json: prev.degrees_json.filter((_, i) => i !== index)
    }));
  };

  const addDiploma = () => {
    setFormData(prev => ({
      ...prev,
      diplomas_json: [...prev.diplomas_json, { title: '', institution: '', period: '', status: '', color: 'energy-teal' }]
    }));
  };

  const removeDiploma = (index: number) => {
    setFormData(prev => ({
      ...prev,
      diplomas_json: prev.diplomas_json.filter((_, i) => i !== index)
    }));
  };

  const handleDegreeDetailsChange = (degreeIndex: number, text: string) => {
    const detailsArray = text.split('\n').filter(line => line.trim() !== '');
    handleDegreeChange(degreeIndex, 'details', detailsArray);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusType('idle');
    
    const result = await updateAcademicData(formData);
    
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
        <div className="w-8 h-8 border-4 border-energy-teal border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <header className="border-b border-energy-teal/30 pb-4 mb-8 flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-energy-teal" />
        <h1 className="text-2xl font-display font-bold text-slate-200 uppercase tracking-widest">
          Academic <span className="text-energy-teal">Records</span>
        </h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Degrees Array */}
        <div className="glass-panel p-8 border border-space-700 rounded-lg relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-energy-blue" />
          <div className="flex justify-between items-center border-b border-space-700 pb-2 mb-6">
            <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm">Degree Initiatives</h3>
            <Button type="button" onClick={addDegree} size="sm" variant="outline" className="h-8 border-energy-blue/50 text-energy-blue hover:bg-energy-blue/10">
              <Plus className="w-4 h-4 mr-2" /> Add Degree
            </Button>
          </div>
          
          <div className="space-y-8">
            {formData.degrees_json.map((degree, index) => (
              <div key={index} className="space-y-4 bg-space-900/50 p-6 border border-space-700 rounded relative group">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeDegree(index)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:bg-space-800 hover:text-red-300 transition-opacity h-8 w-8"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Degree Title</label>
                    <Input value={degree.title} onChange={(e) => handleDegreeChange(index, 'title', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Institution</label>
                    <Input value={degree.institution} onChange={(e) => handleDegreeChange(index, 'institution', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Period</label>
                    <Input value={degree.period} onChange={(e) => handleDegreeChange(index, 'period', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Status</label>
                    <Input value={degree.status} onChange={(e) => handleDegreeChange(index, 'status', e.target.value)} required className="h-9 bg-space-900 border-space-700" placeholder="e.g. In Progress" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Theme Color</label>
                    <select 
                      value={degree.color} 
                      onChange={(e) => handleDegreeChange(index, 'color', e.target.value)} 
                      className="w-full h-9 bg-space-900 border border-space-700 text-slate-200 rounded px-3 text-sm"
                    >
                      <option value="energy-blue">Energy Blue</option>
                      <option value="energy-teal">Energy Teal</option>
                      <option value="energy-violet">Energy Violet</option>
                      <option value="energy-gold">Energy Gold</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Details (One per line)</label>
                  <Textarea 
                    value={degree.details?.join('\n') || ''}
                    onChange={(e) => handleDegreeDetailsChange(index, e.target.value)}
                    className="bg-space-900 border-space-700 text-slate-200 min-h-[100px]"
                    placeholder="Enter each bullet point on a new line"
                  />
                </div>
              </div>
            ))}
            {formData.degrees_json.length === 0 && (
              <p className="text-sm text-slate-500 font-display italic">No degrees configured.</p>
            )}
          </div>
        </div>

        {/* Diplomas Array */}
        <div className="glass-panel p-8 border border-space-700 rounded-lg relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-energy-teal" />
          <div className="flex justify-between items-center border-b border-space-700 pb-2 mb-6">
            <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm">Certifications & Diplomas</h3>
            <Button type="button" onClick={addDiploma} size="sm" variant="outline" className="h-8 border-energy-teal/50 text-energy-teal hover:bg-energy-teal/10">
              <Plus className="w-4 h-4 mr-2" /> Add Cert
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {formData.diplomas_json.map((diploma, index) => (
              <div key={index} className="space-y-4 bg-space-900/50 p-6 border border-space-700 rounded relative group">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeDiploma(index)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:bg-space-800 hover:text-red-300 transition-opacity h-8 w-8"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                
                <div>
                  <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Title</label>
                  <Input value={diploma.title} onChange={(e) => handleDiplomaChange(index, 'title', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                </div>
                <div>
                  <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Institution</label>
                  <Input value={diploma.institution} onChange={(e) => handleDiplomaChange(index, 'institution', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Period</label>
                    <Input value={diploma.period} onChange={(e) => handleDiplomaChange(index, 'period', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Color</label>
                    <select 
                      value={diploma.color} 
                      onChange={(e) => handleDiplomaChange(index, 'color', e.target.value)} 
                      className="w-full h-9 bg-space-900 border border-space-700 text-slate-200 rounded px-3 text-sm"
                    >
                      <option value="energy-blue">Blue</option>
                      <option value="energy-teal">Teal</option>
                      <option value="energy-violet">Violet</option>
                      <option value="energy-gold">Gold</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
            {formData.diplomas_json.length === 0 && (
              <p className="text-sm text-slate-500 font-display italic">No certifications configured.</p>
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
            className="bg-energy-teal/20 hover:bg-energy-teal/40 text-energy-teal border border-energy-teal/50 font-display tracking-widest uppercase transition-all duration-300"
          >
            {isSaving ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-energy-teal border-t-transparent rounded-full animate-spin" />
                Transmitting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Save className="w-4 h-4" /> Update Arrays
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
