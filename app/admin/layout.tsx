'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  GraduationCap, 
  Code2, 
  FolderGit2, 
  Briefcase, 
  LogOut,
  Terminal,
  Server
} from 'lucide-react';
import { logoutAdmin } from '@/app/actions/auth';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/admin', label: 'Command Center', icon: LayoutDashboard },
  { href: '/admin/hero', label: 'Hero / Intro', icon: Terminal },
  { href: '/admin/about', label: 'Dossier (About)', icon: FileText },
  { href: '/admin/academic', label: 'Academic Records', icon: GraduationCap },
  { href: '/admin/skills', label: 'Tech Matrix', icon: Code2 },
  { href: '/admin/projects', label: 'Missions (Projects)', icon: FolderGit2 },
  { href: '/admin/experience', label: 'Service Logs', icon: Briefcase },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const handleLogout = async () => {
    await logoutAdmin();
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] flex text-slate-300 font-sans selection:bg-energy-violet/30 selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none mix-blend-screen opacity-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.energy.teal)_0%,transparent_50%)] z-0" />
      <div className="fixed inset-0 pointer-events-none mix-blend-screen opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,theme(colors.energy.violet)_0%,transparent_50%)] z-0" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none z-0" />

      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-space-700 bg-space-900/50 backdrop-blur-md flex flex-col relative z-10 shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-space-700">
          <div className="flex items-center gap-3">
            <Server className="w-5 h-5 text-energy-teal animate-pulse" />
            <span className="font-display font-bold tracking-widest text-slate-200 uppercase text-sm">
              Vanguard <span className="text-energy-teal">Admin</span>
            </span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded transition-all duration-300 group ${
                  isActive 
                    ? 'bg-energy-teal/10 text-energy-teal shadow-[inset_4px_0_0_rgba(69,162,158,1)]' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-space-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-energy-teal' : 'text-slate-500 group-hover:text-slate-300'}`} />
                <span className="font-display text-xs tracking-widest uppercase">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-space-700">
          <Button 
            onClick={handleLogout}
            variant="ghost" 
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/10 font-display text-xs tracking-widest uppercase"
          >
            <LogOut className="w-4 h-4 mr-3" /> System Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 relative z-10">
        <header className="h-16 border-b border-space-700 bg-space-900/30 backdrop-blur-sm flex items-center justify-between px-8">
          <h2 className="font-display text-sm tracking-widest text-slate-400 uppercase">
            Data Management Terminal
          </h2>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 rounded bg-energy-gold/10 border border-energy-gold/30 text-energy-gold font-display text-[10px] tracking-widest uppercase flex items-center gap-2 shadow-[0_0_10px_rgba(242,169,0,0.2)]">
              <span className="w-2 h-2 rounded-full bg-energy-gold animate-pulse" />
              Live System
            </div>
            <Link href="/" target="_blank" className="text-xs font-display text-energy-blue hover:text-energy-teal uppercase tracking-widest transition-colors">
              View Public Feed ↗
            </Link>
          </div>
        </header>

        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
