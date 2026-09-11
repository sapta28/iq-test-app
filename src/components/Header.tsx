import React from 'react';
import { Brain, ShieldCheck, Code, Award } from 'lucide-react';

interface HeaderProps {
  onOpenTechGuide: () => void;
  onGoHome: () => void;
  isTesting: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTechGuide, onGoHome, isTesting }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={isTesting ? undefined : onGoHome}
          className={`flex items-center gap-3 ${isTesting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white tracking-tight">NeuroMatrix</span>
              <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full font-semibold">
                IQ Matrix
              </span>
            </div>
            <span className="text-xs text-slate-400 hidden sm:block">Platform Tes IQ Psikometri 100% Gratis</span>
          </div>
        </div>

        {/* Right Badges & Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Tanpa Paywall / Gratis 100%</span>
          </div>

          <button
            onClick={onOpenTechGuide}
            className="flex items-center gap-2 text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 px-3 py-1.5 rounded-lg transition-all"
          >
            <Code className="w-4 h-4 text-cyan-400" />
            <span>Panduan Teknis & Arsitektur</span>
          </button>
        </div>
      </div>
    </header>
  );
};
