'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Save, AlertCircle, CheckCircle2, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { getAboutData, updateAboutData, AboutData, EducationItem, RoleItem } from '@/app/actions/about';

export default function AdminAbout() {
  const [formData, setFormData] = useState<AboutData>({
    description: '',
    education_json: [],
    roles_json: [],
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    async function loadData() {
      const data = await getAboutData();
      if (data) {
        setFormData(data);
      }
      setIsLoading(false);
    }
    loadData();
  }, []);

  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, description: e.target.value }));
  };

  const handleEduChange = (index: number, field: keyof EducationItem, value: string) => {
    const newEdu = [...formData.education_json];
    newEdu[index] = { ...newEdu[index], [field]: value };
    setFormData(prev => ({ ...prev, education_json: newEdu }));
  };

  const handleRoleChange = (index: number, field: keyof RoleItem, value: string) => {
    const newRoles = [...formData.roles_json];
    newRoles[index] = { ...newRoles[index], [field]: value };
    setFormData(prev => ({ ...prev, roles_json: newRoles }));
  };

  const addEdu = () => {
    setFormData(prev => ({
      ...prev,
      education_json: [...prev.education_json, { degree: '', institution: '', period: '' }]
    }));
  };

  const removeEdu = (index: number) => {
    setFormData(prev => ({
      ...prev,
      education_json: prev.education_json.filter((_, i) => i !== index)
    }));
  };

  const addRole = () => {
    setFormData(prev => ({
      ...prev,
      roles_json: [...prev.roles_json, { title: '', org: '', period: '' }]
    }));
  };

  const removeRole = (index: number) => {
    setFormData(prev => ({
      ...prev,
      roles_json: prev.roles_json.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusType('idle');
    
    const result = await updateAboutData(formData);
    
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
        <div className="w-8 h-8 border-4 border-energy-blue border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <header className="border-b border-energy-blue/30 pb-4 mb-8 flex items-center gap-3">
        <FileText className="w-6 h-6 text-energy-blue" />
        <h1 className="text-2xl font-display font-bold text-slate-200 uppercase tracking-widest">
          Dossier <span className="text-energy-blue">Config</span>
        </h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Description Section */}
        <div className="glass-panel p-8 border border-space-700 rounded-lg relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-energy-blue" />
          <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm border-b border-space-700 pb-2 mb-4">Biography</h3>
          <Textarea 
            name="description"
            value={formData.description}
            onChange={handleDescChange}
            required
            className="bg-space-900 border-space-700 focus:border-energy-blue text-slate-200 rounded-none min-h-[120px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Array */}
          <div className="glass-panel p-8 border border-space-700 rounded-lg relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-energy-teal" />
            <div className="flex justify-between items-center border-b border-space-700 pb-2 mb-6">
              <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm">Academic Records</h3>
              <Button type="button" onClick={addEdu} size="sm" variant="outline" className="h-8 border-energy-teal/50 text-energy-teal hover:bg-energy-teal/10">
                <Plus className="w-4 h-4 mr-2" /> Add
              </Button>
            </div>
            
            <div className="space-y-6">
              {formData.education_json.map((edu, index) => (
                <div key={index} className="space-y-3 bg-space-900/50 p-4 border border-space-700 rounded relative group">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeEdu(index)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:bg-space-800 hover:text-red-300 transition-opacity h-8 w-8"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Degree/Title</label>
                    <Input value={edu.degree} onChange={(e) => handleEduChange(index, 'degree', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Institution</label>
                    <Input value={edu.institution} onChange={(e) => handleEduChange(index, 'institution', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Period</label>
                    <Input value={edu.period} onChange={(e) => handleEduChange(index, 'period', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                </div>
              ))}
              {formData.education_json.length === 0 && (
                <p className="text-sm text-slate-500 font-display italic">No academic records configured.</p>
              )}
            </div>
          </div>

          {/* Roles Array */}
          <div className="glass-panel p-8 border border-space-700 rounded-lg relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-energy-violet" />
            <div className="flex justify-between items-center border-b border-space-700 pb-2 mb-6">
              <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm">Active Postings</h3>
              <Button type="button" onClick={addRole} size="sm" variant="outline" className="h-8 border-energy-violet/50 text-energy-violet hover:bg-energy-violet/10">
                <Plus className="w-4 h-4 mr-2" /> Add
              </Button>
            </div>
            
            <div className="space-y-6">
              {formData.roles_json.map((role, index) => (
                <div key={index} className="space-y-3 bg-space-900/50 p-4 border border-space-700 rounded relative group">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeRole(index)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:bg-space-800 hover:text-red-300 transition-opacity h-8 w-8"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Role Title</label>
                    <Input value={role.title} onChange={(e) => handleRoleChange(index, 'title', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Organization</label>
                    <Input value={role.org} onChange={(e) => handleRoleChange(index, 'org', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Period</label>
                    <Input value={role.period} onChange={(e) => handleRoleChange(index, 'period', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                </div>
              ))}
              {formData.roles_json.length === 0 && (
                <p className="text-sm text-slate-500 font-display italic">No active postings configured.</p>
              )}
            </div>
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
            className="bg-energy-blue/20 hover:bg-energy-blue/40 text-energy-blue border border-energy-blue/50 font-display tracking-widest uppercase transition-all duration-300"
          >
            {isSaving ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-energy-blue border-t-transparent rounded-full animate-spin" />
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
