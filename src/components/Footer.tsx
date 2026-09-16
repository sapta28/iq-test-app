import React from 'react';

interface FooterProps {
  onSelectView?: (view: 'hero' | 'metodologi' | 'kohort' | 'transparansi' | 'faq') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView }) => {

  return (
    <footer style={{ width: '100%', position: 'relative', background: '#f8fafc', overflow: 'hidden' }}>
      
      {/* ==================== 2. COGNITIVE SILHOUETTE WAVE TOP DIVIDER ==================== */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, marginTop: '20px' }}>
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '-2px' }}
        >
          {/* Siluet Gabungan Wave Gelombang Otak (EEG), Node Sinaps, Jam Waktu, dan Kubus Logika */}
          <path
            d="M0,140 L0,85                C30,85 45,65 60,65 C75,65 90,95 105,95 C120,95 135,45 150,45 C165,45 180,80 195,80                C210,80 225,55 240,55 L255,55 L255,40 L275,40 L275,55 L290,55                C305,55 320,85 335,85 C350,85 365,30 380,30 C395,30 410,75 425,75                C440,75 455,50 470,50 C485,50 500,90 515,90                C530,90 545,20 560,20 C575,20 590,65 605,65                C620,65 635,40 650,40 C665,40 680,80 695,80                L710,80 L710,25 L735,25 L735,80 L750,80                C765,80 780,35 795,35 C810,35 825,70 840,70                C855,70 870,45 885,45 C900,45 915,85 930,85                C945,85 960,15 975,15 C990,15 1005,60 1020,60                C1035,60 1050,35 1065,35 C1080,35 1095,75 1110,75                L1125,75 L1125,45 L1145,45 L1145,75 L1160,75                C1175,75 1190,40 1205,40 C1220,40 1235,85 1250,85                C1265,85 1280,50 1295,50 C1310,50 1325,90 1340,90                C1355,90 1370,60 1385,60 C1400,60 1420,80 1440,80 L1440,140 Z"
            fill="#064e3b"
          />
          {/* Node Lingkaran Sinapsis pada Siluet */}
          <circle cx="150" cy="45" r="4" fill="#10b981" />
          <circle cx="380" cy="30" r="4" fill="#10b981" />
          <circle cx="560" cy="20" r="5" fill="#34d399" />
          <circle cx="722" cy="25" r="4" fill="#10b981" />
          <circle cx="975" cy="15" r="5" fill="#34d399" />
          <circle cx="1205" cy="40" r="4" fill="#10b981" />
        </svg>
      </div>

      {/* ==================== 3. DEEP EMERALD FOOTER CONTAINER ==================== */}
      <div style={{ background: '#064e3b', color: '#e2e8f0', padding: '48px 0 32px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr 1fr',
            gap: '48px',
            alignItems: 'start',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
          }}>
            
            {/* ── LEFT COLUMN: Navigation & About ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: '#10b981', display: 'flex', alignItems: 'center', justifyControl: 'center', justifyContent: 'center' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#fff' }}>grid_view</span>
                    </div>
                    <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>NeuroMatrix</span>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#064e3b', background: '#a7f3d0', padding: '1px 5px', borderRadius: '4px' }}>LABS</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#ffffff', lineHeight: 1.65, margin: 0, opacity: 0.95 }}>
                    Inisiatif sains kognitif terbuka untuk evaluasi kecerdasan cair (fluid intelligence), kecepatan pemrosesan, dan memori kerja secara transparan.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Tentang NeuroMatrix Labs', href: '#beranda', view: 'hero' },
                    { label: 'Metodologi Raven SPM', href: '#metodologi', view: 'metodologi' },
                    { label: 'Distribusi Kohort Wechsler', href: '#distribusi', view: 'kohort' },
                    { label: 'Transparansi & Etika', href: '#transparansi', view: 'transparansi' },
                    { label: 'Sertifikasi Psikometrik', href: '#mode-tes', view: 'hero' },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={(e) => {
                        if (item.view && onSelectView) {
                          e.preventDefault();
                          onSelectView(item.view as any);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      style={{ fontSize: '13px', color: '#ffffff', fontWeight: 600, textDecoration: 'none', transition: 'color 0.15s', cursor: 'pointer' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#34d399'}
                      onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Social Icons */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
                  {['public', 'share', 'science'].map((icon, i) => (
                    <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#fff' }}>{icon}</span>
                    </div>
                  ))}
                </div>
              </div>

            {/* ── CENTER COLUMN: METODOLOGI & CTA CARD ── */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  width: '100%',
                  boxSizing: 'border-box',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                    Metodologi Bebas Bias & Transparan
                  </h3>

                  <p style={{ fontSize: '12px', color: '#ffffff', margin: '0 0 16px', lineHeight: 1.65, opacity: 0.95 }}>
                    Pengujian matriks progresif 100% diproses langsung dengan standar kurva Wechsler.
                  </p>

                  <a
                    href="#mode-tes"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      width: '100%',
                      height: '42px',
                      borderRadius: '8px',
                      background: '#fef3c7',
                      color: '#064e3b',
                      fontWeight: 800,
                      fontSize: '13px',
                      letterSpacing: '0.02em',
                      textDecoration: 'none',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>play_arrow</span>
                    <span>MULAI TES IQ SEKARANG</span>
                  </a>
                </div>
              </div>

            {/* ── RIGHT COLUMN: CONTACT & ACCREDITATION STAMP ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'right', alignItems: 'flex-end' }}>
                <div style={{ fontSize: '13px', color: '#ffffff', fontWeight: 800 }}>
                  NeuroMatrix IQ Platform
                </div>

                <div style={{ fontSize: '11px', color: '#e2e8f0', lineHeight: 1.5, opacity: 0.85 }}>
                  Platform Evaluasi Kognitif Mandiri berbasis Web<br />
                  Akses Terbuka • Client-Side Processing<br />
                  Bebas Biaya & Tanpa Iklan
                </div>

                {/* Certified Psychometric Stamp Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  borderRadius: '9999px',
                  padding: '6px 14px',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: '#ffffff',
                  background: 'rgba(255,255,255,0.05)',
                  marginTop: '4px',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#34d399' }}>verified</span>
                  <span>PSYCHOMETRIC STANDARDIZED</span>
                </div>
              </div>

          </div>

          {/* ── BOTTOM COPYRIGHT BAR ── */}
          <div style={{
              paddingTop: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '11px',
              color: '#e2e8f0',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                © 2026 NeuroMatrix. Diterbitkan sebagai proyek Sains Kognitif & Pengujian Terbuka.
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="#beranda" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Kebijakan Privasi</a>
                <a href="#beranda" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Syarat & Ketentuan</a>
                <a href="#beranda" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Client-Side Zero-Trace</a>
              </div>
            </div>

        </div>
      </div>

    </footer>
  );
};
