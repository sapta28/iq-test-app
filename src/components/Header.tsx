import React, { useState } from 'react';

interface HeaderProps {
  onOpenTechGuide: () => void;
  onGoHome: () => void;
  isTesting: boolean;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <div
          onClick={isTesting ? undefined : onGoHome}
          className={`flex items-center gap-3 group flex-shrink-0 ${
            isTesting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
          }`}
        >
          <div className="w-9 h-9 rounded-lg bg-[#059669] text-white flex items-center justify-center font-bold shadow-sm group-hover:bg-[#047857] transition-colors">
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 leading-none">
              <span className="text-lg font-extrabold text-gray-900 tracking-tight">NeuroMatrix</span>
              <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 tracking-wider">
                LABS
              </span>
            </div>
            <span className="text-[11px] text-gray-500 tracking-normal mt-0.5">
              Evaluasi Psikometrik Terkalibrasi
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => handleNavClick('beranda')}
            className="text-sm font-semibold text-[#059669] py-1 border-b-2 border-[#059669] cursor-pointer"
          >
            Beranda
          </button>
          <button
            onClick={() => handleNavClick('metodologi')}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-1 cursor-pointer"
          >
            Metodologi RPM
          </button>
          <button
            onClick={() => handleNavClick('distribusi')}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-1 cursor-pointer"
          >
            Kohort Normatif
          </button>
          <button
            onClick={() => handleNavClick('komparasi')}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-1 cursor-pointer"
          >
            Transparansi
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-1 cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Right CTA Cluster */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => handleNavClick('mode-tes')}
            className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98] cursor-pointer gap-1.5"
          >
            <span>Mulai Tes IQ Gratis</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <button
            aria-label="Buka Menu Navigasi"
            className="md:hidden p-2 rounded-md hover:bg-gray-100 text-gray-800 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-2">
          <button
            onClick={() => handleNavClick('beranda')}
            className="block w-full text-left py-2 px-3 text-sm font-semibold text-[#059669] bg-emerald-50 rounded"
          >
            BERANDA
          </button>
          <button
            onClick={() => handleNavClick('metodologi')}
            className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded"
          >
            METODOLOGI RPM
          </button>
          <button
            onClick={() => handleNavClick('distribusi')}
            className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded"
          >
            KOHORT NORMATIF
          </button>
          <button
            onClick={() => handleNavClick('komparasi')}
            className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded"
          >
            TRANSPARANSI SKOR
          </button>
          <button
            onClick={() => handleNavClick('mode-tes')}
            className="block w-full text-center py-2.5 px-4 bg-[#059669] text-white font-semibold rounded-lg text-sm mt-2"
          >
            Mulai Tes IQ Sekarang
          </button>
        </div>
      )}
    </header>
  );
};

