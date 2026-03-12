import React from 'react';
import { Database, Activity, Server, FileJson } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <header className="border-b border-energy-teal/30 pb-6 mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-200 uppercase tracking-widest">
          Command <span className="text-energy-teal">Center</span>
        </h1>
        <p className="text-slate-400 mt-2 font-sans">
          Welcome to the Vanguard management interface. Select a module from the sidebar to update your portfolio data.
        </p>
      </header>

      {/* System Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="glass-panel p-6 border-t border-l border-r border-space-700 border-b-2 border-b-energy-teal hover:-translate-y-1 transition-transform group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded bg-energy-teal/10 text-energy-teal">
              <Database className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 text-[10px] font-display text-green-400 bg-green-400/10 border border-green-400/30 rounded uppercase tracking-widest">Online</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-slate-200">Supabase</h3>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Primary Database</p>
        </div>

        <div className="glass-panel p-6 border-t border-l border-r border-space-700 border-b-2 border-b-energy-violet hover:-translate-y-1 transition-transform group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded bg-energy-violet/10 text-energy-violet">
              <Activity className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 text-[10px] font-display text-energy-violet bg-energy-violet/10 border border-energy-violet/30 rounded uppercase tracking-widest">Secured</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-slate-200">Active</h3>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Admin Session</p>
        </div>

        <div className="glass-panel p-6 border-t border-l border-r border-space-700 border-b-2 border-b-energy-gold hover:-translate-y-1 transition-transform group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded bg-energy-gold/10 text-energy-gold">
              <Server className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 text-[10px] font-display text-energy-gold bg-energy-gold/10 border border-energy-gold/30 rounded uppercase tracking-widest">Normal</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-slate-200">Vercel</h3>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Deployment Node</p>
        </div>

        <div className="glass-panel p-6 border-t border-l border-r border-space-700 border-b-2 border-b-energy-blue hover:-translate-y-1 transition-transform group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded bg-energy-blue/10 text-energy-blue">
              <FileJson className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 text-[10px] font-display text-energy-blue bg-energy-blue/10 border border-energy-blue/30 rounded uppercase tracking-widest">Pending</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-slate-200">Cache</h3>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Data Hydration</p>
        </div>

      </div>

      <div className="mt-12 glass-panel p-8 border border-space-700 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-energy-teal" />
        <h3 className="text-xl font-display font-bold text-slate-200 mb-4 tracking-wide uppercase">Initialization Status</h3>
        <p className="text-slate-400 font-sans leading-relaxed">
          The admin CMS shell has been established. The next phase requires Supabase connection keys to link the visual interface with persistent data storage. Once connected, data forms will be unlocked for configuration.
        </p>
      </div>

    </div>
  );
}
