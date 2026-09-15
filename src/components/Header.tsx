import React, { useState } from 'react';

interface HeaderProps {
  onOpenTechGuide: () => void;
  onGoHome: () => void;
  isTesting: boolean;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTechGuide,
  onGoHome,
  isTesting,
  onScrollToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onGoHome();
    setTimeout(() => {
      onScrollToSection(sectionId);
    }, 100);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border border-border-subtle shadow-sm transition-all duration-200">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-3.5 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <div
          onClick={isTesting ? undefined : onGoHome}
          className={`flex items-center gap-3.5 group flex-shrink-0 ${
            isTesting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
          }`}
        >
          <div className="w-10 h-10 rounded-lg bg-primary-container text-white flex items-center justify-center font-bold shadow-sm group-hover:bg-primary transition-colors">
            <span className="material-symbols-outlined text-[22px]">grid_view</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-text-slate-primary tracking-tight">NeuroMatrix</span>
              <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant tracking-wider">
                LABS
              </span>
            </div>
            <span className="text-[11px] text-text-slate-secondary tracking-normal">
              Evaluasi Fluid Intelligence Terkalibrasi
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => handleNavClick('beranda')}
            className="text-sm font-semibold text-primary py-1 border-b-2 border-primary cursor-pointer"
          >
            Beranda
          </button>
          <button
            onClick={() => handleNavClick('metodologi')}
            className="text-sm font-medium text-text-slate-secondary hover:text-text-slate-primary transition-colors py-1 cursor-pointer"
          >
            Metodologi RPM
          </button>
          <button
            onClick={() => handleNavClick('distribusi')}
            className="text-sm font-medium text-text-slate-secondary hover:text-text-slate-primary transition-colors py-1 cursor-pointer"
          >
            Kohort Normatif
          </button>
          <button
            onClick={() => handleNavClick('komparasi')}
            className="text-sm font-medium text-text-slate-secondary hover:text-text-slate-primary transition-colors py-1 cursor-pointer"
          >
            Transparansi
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="text-sm font-medium text-text-slate-secondary hover:text-text-slate-primary transition-colors py-1 cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Right CTA Cluster */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => handleNavClick('mode-tes')}
            className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-md bg-primary-container hover:bg-primary text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            <span>Mulai Tes IQ Gratis</span>
            <span className="material-symbols-outlined text-[18px] ml-1.5">arrow_forward</span>
          </button>

          <button
            aria-label="Buka Menu Navigasi"
            className="md:hidden p-2 rounded-md hover:bg-surface-soft-slate text-text-slate-primary cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-white px-4 py-3 space-y-2">
          <button
            onClick={() => handleNavClick('beranda')}
            className="block w-full text-left py-2 px-3 text-sm font-semibold text-primary bg-surface-soft-slate rounded"
          >
            BERANDA
          </button>
          <button
            onClick={() => handleNavClick('metodologi')}
            className="block w-full text-left py-2 px-3 text-sm text-text-slate-secondary hover:bg-surface-soft-slate rounded"
          >
            METODOLOGI RPM
          </button>
          <button
            onClick={() => handleNavClick('distribusi')}
            className="block w-full text-left py-2 px-3 text-sm text-text-slate-secondary hover:bg-surface-soft-slate rounded"
          >
            KOHORT NORMATIF
          </button>
          <button
            onClick={() => handleNavClick('komparasi')}
            className="block w-full text-left py-2 px-3 text-sm text-text-slate-secondary hover:bg-surface-soft-slate rounded"
          >
            TRANSPARANSI SKOR
          </button>
          <button
            onClick={() => handleNavClick('mode-tes')}
            className="block w-full text-center py-2.5 px-4 bg-primary-container text-white font-semibold rounded text-sm mt-2"
          >
            Mulai Tes IQ Sekarang
          </button>
        </div>
      )}
    </header>
  );
};
