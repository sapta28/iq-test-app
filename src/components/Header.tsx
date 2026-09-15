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
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '0 32px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}>

        {/* ── Brand / Logo ── */}
        <div
          onClick={isTesting ? undefined : onGoHome}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
            cursor: isTesting ? 'not-allowed' : 'pointer',
            opacity: isTesting ? 0.8 : 1,
          }}
        >
          {/* Icon box */}
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '9px',
            background: '#059669',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#fff' }}>
              grid_view
            </span>
          </div>

          {/* Text block */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                fontSize: '17px',
                fontWeight: 800,
                color: '#111827',
                letterSpacing: '-0.02em',
              }}>
                NeuroMatrix
              </span>
              <span style={{
                fontSize: '9px',
                fontWeight: 700,
                color: '#6b7280',
                background: '#f3f4f6',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                padding: '1px 5px',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
              }}>
                LABS
              </span>
            </div>
            <span style={{
              fontSize: '10.5px',
              color: '#9ca3af',
              marginTop: '3px',
              letterSpacing: '0.01em',
            }}>
              Evaluasi Fluid Intelligence Terkalibrasi
            </span>
          </div>
        </div>

        {/* ── Desktop Navigation ── */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px', flex: 1, justifyContent: 'center' }}>
          {/* Active: Beranda */}
          <button
            onClick={() => handleNavClick('beranda')}
            style={{
              background: 'none', border: 'none',
              fontSize: '13.5px', fontWeight: 600,
              color: '#059669',
              borderBottom: '2px solid #059669',
              paddingBottom: '2px',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Beranda
          </button>
          {[
            { label: 'Metodologi RPM', id: 'metodologi' },
            { label: 'Kohort Normatif', id: 'distribusi' },
            { label: 'Transparansi', id: 'komparasi' },
            { label: 'FAQ', id: 'faq' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              style={{
                background: 'none', border: 'none',
                fontSize: '13.5px', fontWeight: 500,
                color: '#6b7280',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#111827')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* ── CTA Button ── */}
        <div style={{ flexShrink: 0 }}>
          <button
            onClick={() => handleNavClick('mode-tes')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              height: '40px',
              padding: '0 20px',
              borderRadius: '9999px',
              background: '#059669',
              color: '#fff',
              border: 'none',
              fontWeight: 700,
              fontSize: '13.5px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(5,150,105,0.3)',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#047857')}
            onMouseLeave={e => (e.currentTarget.style.background = '#059669')}
          >
            <span>Mulai Tes IQ Gratis</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div style={{ borderTop: '1px solid #e5e7eb', background: '#fff', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button onClick={() => handleNavClick('beranda')} style={{ textAlign: 'left', padding: '8px 12px', background: '#f0fdf4', color: '#059669', fontWeight: 700, fontSize: '13px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>BERANDA</button>
          <button onClick={() => handleNavClick('metodologi')} style={{ textAlign: 'left', padding: '8px 12px', color: '#6b7280', fontSize: '13px', borderRadius: '6px', border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}>METODOLOGI RPM</button>
          <button onClick={() => handleNavClick('distribusi')} style={{ textAlign: 'left', padding: '8px 12px', color: '#6b7280', fontSize: '13px', borderRadius: '6px', border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}>KOHORT NORMATIF</button>
          <button onClick={() => handleNavClick('komparasi')} style={{ textAlign: 'left', padding: '8px 12px', color: '#6b7280', fontSize: '13px', borderRadius: '6px', border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}>TRANSPARANSI</button>
          <button onClick={() => handleNavClick('mode-tes')} style={{ textAlign: 'center', padding: '10px 16px', background: '#059669', color: '#fff', fontWeight: 700, fontSize: '13px', borderRadius: '9999px', border: 'none', cursor: 'pointer', marginTop: '4px', fontFamily: 'inherit' }}>Mulai Tes IQ Sekarang</button>
        </div>
      )}
    </header>
  );
};
