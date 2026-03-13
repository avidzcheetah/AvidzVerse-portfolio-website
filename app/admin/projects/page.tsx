'use client';

import React, { useState, useEffect } from 'react';
import { FolderGit2, Save, AlertCircle, CheckCircle2, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getProjectsData, updateProjectsData, ProjectsData, ProjectItem, ProjectType } from '@/app/actions/projects';

export default function AdminProjects() {
  const [formData, setFormData] = useState<ProjectsData>({
    projects_json: [],
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    async function loadData() {
      const data = await getProjectsData();
      if (data) {
        setFormData(data);
      }
      setIsLoading(false);
    }
    loadData();
  }, []);

  const handleProjectChange = (index: number, field: keyof ProjectItem, value: string | string[]) => {
    const newProjects = [...formData.projects_json];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setFormData(prev => ({ ...prev, projects_json: newProjects }));
  };

  const handleTechStackChange = (index: number, text: string) => {
    const techArray = text.split(',').map(t => t.trim()).filter(t => t !== '');
    handleProjectChange(index, 'techStack', techArray);
  };

  const handleCategoryToggle = (index: number, cat: ProjectType) => {
    const project = formData.projects_json[index];
    const currentCategories = Array.isArray(project.category) 
      ? project.category 
      : [project.category as unknown as ProjectType].filter(Boolean);
    
    let newCategories: ProjectType[];
    if (currentCategories.includes(cat)) {
      newCategories = currentCategories.filter(c => c !== cat);
      if (newCategories.length === 0) newCategories = [cat]; // Prevent empty category
    } else {
      newCategories = [...currentCategories, cat];
    }
    handleProjectChange(index, 'category', newCategories);
  };

  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects_json: [
        { 
          title: '', 
          category: ['web'], 
          description: '', 
          longDescription: '', 
          techStack: [], 
          githubUrl: '', 
          liveUrl: '', 
          status: '', 
          color: 'energy-blue' 
        },
        ...prev.projects_json
      ]
    }));
  };

  const removeProject = (index: number) => {
    setFormData(prev => ({
      ...prev,
      projects_json: prev.projects_json.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusType('idle');
    
    const result = await updateProjectsData(formData);
    
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
        <FolderGit2 className="w-6 h-6 text-energy-blue" />
        <h1 className="text-2xl font-display font-bold text-slate-200 uppercase tracking-widest">
          Active Missions <span className="text-energy-blue">Config</span>
        </h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        <div className="flex justify-between items-center bg-space-900/50 p-4 border border-space-700 rounded-lg">
          <p className="text-xs font-display text-slate-400 uppercase tracking-widest">
            Configure project details, categories, and direct links.
          </p>
          <Button type="button" onClick={addProject} className="bg-energy-blue/10 hover:bg-energy-blue/20 text-energy-blue border border-energy-blue/50">
            <Plus className="w-4 h-4 mr-2" /> Add Mission
          </Button>
        </div>

        <div className="space-y-6">
          {formData.projects_json.map((project, index) => (
            <div key={index} className="glass-panel p-6 border-l-4 border-l-energy-blue relative group">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeProject(index)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:bg-space-800 hover:text-red-300 transition-opacity h-8 w-8"
              >
                <Trash2 className="w-4 h-4" />
              </Button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Basic Info Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Mission Title</label>
                    <Input value={project.title} onChange={(e) => handleProjectChange(index, 'title', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-2 block">Categories</label>
                      <div className="flex flex-wrap gap-2">
                        {(['web', 'cyber', 'ai'] as ProjectType[]).map(cat => {
                          const currentCategories = Array.isArray(project.category) 
                            ? project.category 
                            : [project.category as unknown as ProjectType].filter(Boolean);
                          const isSelected = currentCategories.includes(cat);
                          const labels: Record<string, string> = { web: 'Web', cyber: 'Cyber', ai: 'AI' };
                          
                          return (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => handleCategoryToggle(index, cat)}
                              className={`text-xs font-display tracking-widest uppercase px-3 py-1.5 rounded transition-colors ${
                                isSelected 
                                  ? 'bg-energy-blue/20 text-energy-blue border border-energy-blue/50 shadow-[0_0_10px_rgba(102,252,241,0.2)]' 
                                  : 'bg-space-900 text-slate-400 border border-space-700 hover:border-slate-500'
                              }`}
                            >
                              {labels[cat as string]}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Theme Color</label>
                      <select 
                        value={project.color} 
                        onChange={(e) => handleProjectChange(index, 'color', e.target.value)} 
                        className="w-full h-9 bg-space-900 border border-space-700 text-slate-200 rounded px-3 text-sm"
                      >
                        <option value="energy-blue">Blue</option>
                        <option value="energy-teal">Teal</option>
                        <option value="energy-violet">Violet</option>
                        <option value="energy-gold">Gold</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Status / Timeline</label>
                    <Input value={project.status} onChange={(e) => handleProjectChange(index, 'status', e.target.value)} required className="h-9 bg-space-900 border-space-700" placeholder="e.g. July 2025 - Present" />
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Short Description (Card)</label>
                    <Textarea 
                      value={project.description} 
                      onChange={(e) => handleProjectChange(index, 'description', e.target.value)} 
                      required 
                      className="bg-space-900 border-space-700 text-slate-200 h-16 resize-none text-sm" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Extended Description (Modal Overview)</label>
                    <Textarea 
                      value={project.longDescription || ''} 
                      onChange={(e) => handleProjectChange(index, 'longDescription', e.target.value)} 
                      className="bg-space-900 border-space-700 text-slate-200 h-28 text-sm" 
                    />
                  </div>
                </div>

                {/* Tech & Links Column */}
                <div className="lg:col-span-3 space-y-4">
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Tech Stack (comma separated)</label>
                    <Textarea 
                      value={project.techStack.join(', ')} 
                      onChange={(e) => handleTechStackChange(index, e.target.value)} 
                      className="bg-space-900 border-space-700 text-slate-200 h-20 text-sm" 
                      placeholder="React, Next.js, TypeScript"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">GitHub Repo URL</label>
                    <Input value={project.githubUrl || ''} onChange={(e) => handleProjectChange(index, 'githubUrl', e.target.value)} className="h-9 bg-space-900 border-space-700" placeholder="https://github.com/..." />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Live Demo / Launch URL</label>
                    <Input value={project.liveUrl || ''} onChange={(e) => handleProjectChange(index, 'liveUrl', e.target.value)} className="h-9 bg-space-900 border-space-700" placeholder="https://..." />
                  </div>
                </div>

              </div>
            </div>
          ))}
          {formData.projects_json.length === 0 && (
            <p className="text-sm text-slate-500 font-display italic text-center py-8">No missions exist in the database.</p>
          )}
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
                <Save className="w-4 h-4" /> Sync Database
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
