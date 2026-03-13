'use client';

import React, { useState, useEffect } from 'react';
import { Code2, Save, AlertCircle, CheckCircle2, Plus, Trash2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getSkillsData, updateSkillsData, SkillsData, SkillCategory, SkillNode } from '@/app/actions/skills';
import { generateSkillsWithAI } from '@/app/actions/ai-skills';
import { toast } from 'sonner';

export default function AdminSkills() {
  const [formData, setFormData] = useState<SkillsData>({
    categories_json: [],
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    async function loadData() {
      const data = await getSkillsData();
      if (data) {
        setFormData(data);
      }
      setIsLoading(false);
    }
    loadData();
  }, []);

  const handleCategoryChange = (index: number, field: keyof SkillCategory, value: string) => {
    const newCats = [...formData.categories_json];
    newCats[index] = { ...newCats[index], [field]: value };
    setFormData(prev => ({ ...prev, categories_json: newCats }));
  };

  const handleNodeChange = (catIndex: number, nodeIndex: number, field: keyof SkillNode, value: string | number) => {
    const newCats = [...formData.categories_json];
    const newNodes = [...newCats[catIndex].nodes];
    newNodes[nodeIndex] = { ...newNodes[nodeIndex], [field]: field === 'level' ? Number(value) : value };
    newCats[catIndex] = { ...newCats[catIndex], nodes: newNodes };
    setFormData(prev => ({ ...prev, categories_json: newCats }));
  };

  const addCategory = () => {
    setFormData(prev => ({
      ...prev,
      categories_json: [
        ...prev.categories_json, 
        { domain: '', iconName: 'Terminal', color: 'border-energy-blue', textColor: 'text-energy-blue', nodes: [] }
      ]
    }));
  };

  const removeCategory = (index: number) => {
    setFormData(prev => ({
      ...prev,
      categories_json: prev.categories_json.filter((_, i) => i !== index)
    }));
  };

  const addNode = (catIndex: number) => {
    const newCats = [...formData.categories_json];
    newCats[catIndex].nodes.push({ name: '', level: 50 });
    setFormData(prev => ({ ...prev, categories_json: newCats }));
  };

  const removeNode = (catIndex: number, nodeIndex: number) => {
    const newCats = [...formData.categories_json];
    newCats[catIndex].nodes = newCats[catIndex].nodes.filter((_, i) => i !== nodeIndex);
    setFormData(prev => ({ ...prev, categories_json: newCats }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusType('idle');
    
    const result = await updateSkillsData(formData);
    
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

  const handleAIGenerate = async () => {
    setIsGeneratingAI(true);
    const result = await generateSkillsWithAI();
    
    if (result.success) {
      if (result.data) {
        setFormData(result.data);
      }
      toast.success('Matrix dynamically updated via AI neural link.');
      setStatusType('success');
      setStatusText('AI successfully synchronized the Tech Matrix.');
    } else {
      toast.error(`Neural Link Failure: ${result.error}`);
      setStatusType('error');
      setStatusText(`AI Error: ${result.error}`);
    }
    
    setIsGeneratingAI(false);
    setTimeout(() => setStatusType('idle'), 5000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="w-8 h-8 border-4 border-energy-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <header className="border-b border-energy-gold/30 pb-4 mb-8 flex items-center gap-3">
        <Code2 className="w-6 h-6 text-energy-gold" />
        <h1 className="text-2xl font-display font-bold text-slate-200 uppercase tracking-widest">
          Tech <span className="text-energy-gold">Matrix Config</span>
        </h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        <div className="flex justify-between items-center bg-space-900/50 p-4 border border-space-700 rounded-lg">
          <p className="text-xs font-display text-slate-400 uppercase tracking-widest max-w-xl">
            Configure skill domains and individual nodes. Select an icon string (e.g. Shield, Terminal, Cpu, Network) to render the corresponding lucide-react icon.
          </p>
          <div className="flex gap-2">
            <Button 
              type="button" 
              onClick={handleAIGenerate} 
              disabled={isGeneratingAI}
              className="bg-energy-teal/10 hover:bg-energy-teal/20 text-energy-teal border border-energy-teal/50"
            >
              {isGeneratingAI ? (
                <div className="w-4 h-4 border-2 border-energy-teal border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <Sparkles className="w-4 h-4 mr-2" />
              )}
              AI Generate
            </Button>
            <Button type="button" onClick={addCategory} className="bg-energy-gold/10 hover:bg-energy-gold/20 text-energy-gold border border-energy-gold/50">
              <Plus className="w-4 h-4 mr-2" /> Add Category
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formData.categories_json.map((cat, catIndex) => (
            <div key={catIndex} className="glass-panel p-6 border-l-2 border-l-energy-gold relative group shadow-lg">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeCategory(catIndex)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:bg-space-800 hover:text-red-300 transition-opacity h-8 w-8"
              >
                <Trash2 className="w-4 h-4" />
              </Button>

              <div className="space-y-4 mb-6 pb-6 border-b border-space-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-energy-gold animate-pulse" />
                  <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm">Category Info</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Domain Name</label>
                    <Input value={cat.domain} onChange={(e) => handleCategoryChange(catIndex, 'domain', e.target.value)} required className="h-9 bg-space-900 border-space-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Icon String</label>
                    <Input value={cat.iconName} onChange={(e) => handleCategoryChange(catIndex, 'iconName', e.target.value)} required className="h-9 bg-space-900 border-space-700" placeholder="Shield, Network..." />
                  </div>
                  <div>
                    <label className="text-[10px] font-display uppercase tracking-widest text-slate-500 mb-1 block">Theme Base</label>
                    <select 
                      value={cat.color.replace('border-', '')} 
                      onChange={(e) => {
                        const base = e.target.value;
                        handleCategoryChange(catIndex, 'color', `border-${base}`);
                        handleCategoryChange(catIndex, 'textColor', `text-${base}`);
                      }} 
                      className="w-full h-9 bg-space-900 border border-space-700 text-slate-200 rounded px-3 text-sm"
                    >
                      <option value="energy-blue">Energy Blue</option>
                      <option value="energy-teal">Energy Teal</option>
                      <option value="energy-violet">Energy Violet</option>
                      <option value="energy-gold">Energy Gold</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-display tracking-widest text-slate-300 uppercase text-sm">Skill Nodes</h3>
                  <Button type="button" onClick={() => addNode(catIndex)} size="sm" variant="ghost" className="h-6 px-2 text-energy-teal hover:bg-energy-teal/10 hover:text-energy-teal font-display text-xs tracking-widest uppercase">
                    + Add Node
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {cat.nodes.map((node, nodeIndex) => (
                    <div key={nodeIndex} className="flex items-center gap-2 group/node">
                      <Input 
                        value={node.name} 
                        onChange={(e) => handleNodeChange(catIndex, nodeIndex, 'name', e.target.value)} 
                        required 
                        className="h-8 bg-space-900 border-space-700 text-xs" 
                        placeholder="Skill Name"
                      />
                      <Input 
                        type="number" 
                        min="1" max="100" 
                        value={node.level} 
                        onChange={(e) => handleNodeChange(catIndex, nodeIndex, 'level', e.target.value)} 
                        required 
                        className="h-8 w-20 bg-space-900 border-space-700 text-xs" 
                        placeholder="%"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeNode(catIndex, nodeIndex)}
                        className="opacity-0 group-hover/node:opacity-100 text-red-500 hover:text-red-400 h-8 w-8 shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  {cat.nodes.length === 0 && (
                    <p className="text-[10px] text-slate-500 font-display italic">No nodes configured.</p>
                  )}
                </div>
              </div>

            </div>
          ))}
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
            className="bg-energy-gold/20 hover:bg-energy-gold/40 text-energy-gold border border-energy-gold/50 font-display tracking-widest uppercase transition-all duration-300"
          >
            {isSaving ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-energy-gold border-t-transparent rounded-full animate-spin" />
                Processing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Save className="w-4 h-4" /> Sync Matrix
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
