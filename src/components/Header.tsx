import React from 'react';
import { Brain, ShieldCheck, Code, Award } from 'lucide-react';

interface HeaderProps {
  onOpenTechGuide: () => void;
  onGoHome: () => void;
  isTesting: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTechGuide, onGoHome, isTesting }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo (Personality.co inspired green emblem) */}
        <div
          onClick={isTesting ? undefined : onGoHome}
          className={`flex items-center gap-3 ${isTesting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shadow-sm">
            <Brain className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl text-slate-900 tracking-tight">NeuroMatrix</span>
              <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
                IQ Certified
              </span>
            </div>
            <span className="text-xs text-slate-500 hidden sm:block font-medium">Standardized Fluid Intelligence Assessment</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Free & Certified</span>
          </div>

          <button
            onClick={onOpenTechGuide}
            className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3.5 py-2 rounded-lg transition-all"
          >
            <Code className="w-4 h-4 text-slate-600" />
            <span>Panduan Teknis</span>
          </button>
        </div>
      </div>
    </header>
  );
};
