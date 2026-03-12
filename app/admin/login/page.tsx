'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldAlert, Terminal, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { loginAdmin } from '@/app/actions/auth';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await loginAdmin(password);
      if (result.success) {
        router.push('/admin');
        router.refresh(); // Ensure middleware picks up the cookie
      } else {
        setError(result.error || 'Access Denied');
        setPassword('');
      }
    } catch (err) {
      setError('An error occurred during authentication');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-space-900 flex items-center justify-center relative overflow-hidden p-4">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20 bg-[radial-gradient(circle_at_center,theme(colors.energy.violet)_0%,transparent_50%)]" />
      
      <div className="w-full max-w-md relative z-10">
        <div className="glass-panel p-8 border border-energy-violet/50 shadow-[0_0_50px_rgba(166,74,201,0.2)] rounded-lg relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-energy-violet to-transparent" />

          <div className="flex flex-col items-center mb-8">
            <div className="p-4 rounded-full bg-space-800 border-2 border-energy-violet/50 shadow-[inset_0_0_20px_rgba(166,74,201,0.3)] mb-4">
              <ShieldAlert className="w-8 h-8 text-energy-violet" />
            </div>
            <h1 className="text-2xl font-display font-bold text-slate-200 tracking-widest uppercase">
              Vanguard <span className="text-energy-violet">Command</span>
            </h1>
            <p className="text-xs font-display text-slate-500 tracking-widest mt-2 uppercase">
              Restricted Access Level 9
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 relative">
              <label className="text-xs font-display tracking-widest text-energy-violet uppercase flex items-center gap-2">
                <Lock className="w-3 h-3" /> Security Crystal
              </label>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter bypass code"
                className="bg-space-900 border-space-700 focus:border-energy-violet text-slate-200 placeholder:text-slate-600 focus-visible:ring-energy-violet rounded-none placeholder:font-display placeholder:text-xs tracking-wider h-12"
              />
              {error && (
                <p className="text-xs font-display text-red-500 tracking-wider absolute -bottom-6 flex items-center gap-1 animate-pulse">
                  <Terminal className="w-3 h-3" /> {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-energy-violet/10 hover:bg-energy-violet/20 text-energy-violet border border-energy-violet/50 hover:border-energy-violet hover:shadow-[0_0_20px_rgba(166,74,201,0.4)] font-display tracking-widest uppercase transition-all duration-300 mt-4"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-energy-violet border-t-transparent rounded-full animate-spin" />
                  Decrypting...
                </span>
              ) : (
                'Authenticate'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
