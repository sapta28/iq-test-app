import { ScrollZoomIn } from './ScrollZoomIn';
import React, { useState, useEffect, useRef } from 'react';
import { TestMode } from '../types';

interface RpmMethodologyPageProps {
  onStartTest: (mode: TestMode) => void;
  onGoHome: () => void;
}



export const RpmMethodologyPage: React.FC<RpmMethodologyPageProps> = ({ onStartTest }) => {
  const [showRulesModal, setShowRulesModal] = useState(false);

  return (
    <div style={{ width: '100%', background: '#f6fbf5', color: '#181d19' }}>
      
      {/* ==================== HERO SECTION ==================== */}
      <section style={{
        position: 'relative',
        padding: '64px 0 72px',
        background: 'linear-gradient(160deg, #f6fbf5 0%, #eaf6ef 100%)',
        borderBottom: '1px solid #e2e8f0',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px' }}>
          
          {/* Section Badge */}
          <ScrollZoomIn delay={0}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(0, 95, 64, 0.1)',
              border: '1px solid rgba(0, 95, 64, 0.2)',
              color: '#005f40',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              marginBottom: '24px',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#005f40', display: 'inline-block' }} />
              <span>LANDASAN PSIKOMETRI & STANDAR KLINIS</span>
            </div>
          </ScrollZoomIn>

          {/* Title & Subtitle */}
          <ScrollZoomIn delay={0.1}>
            <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#111827',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}>
                Metodologi Raven's Progressive Matrices (RPM)
              </h1>
              <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: 1.7 }}>
                Pelajari bagaimana instrumen non-verbal berbasis induksi visual mengukur kecerdasan cair (<em style={{ color: '#111827', fontStyle: 'normal', fontWeight: 600 }}>fluid intelligence</em>) secara objektif tanpa bias bahasa, kultur lokal, atau disparitas tingkat pendidikan formal.
              </p>
            </div>
          </ScrollZoomIn>

          {/* Metric Pills Bento Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}>
            {[
              { label: 'Reliabilitas Konsistensi', val: '0.91', sub: "Cronbach's Alpha (α)", icon: 'verified' },
              { label: 'Validitas Konstruk', val: '99.4%', sub: 'Konvergensi Faktor-G', icon: 'rule' },
              { label: 'Kalibrasi Distribusi', val: 'SD=15', sub: 'Kurva Gaussian Wechsler (μ=100)', icon: 'insights' },
              { label: 'Model Psikometri', val: '2PL IRT', sub: 'Item Response Theory Modern', icon: 'functions' },
            ].map((metric, idx) => (
              <ScrollZoomIn key={idx} delay={0.15 + idx * 0.08}>
                <div style={{
                  background: '#ffffff',
                  padding: '20px 24px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#6b7280' }}>{metric.label}</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#005f40' }}>{metric.icon}</span>
                  </div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.03em' }}>{metric.val}</div>
                  <p style={{ fontSize: '11px', fontWeight: 600, color: '#005f40', marginTop: '4px' }}>{metric.sub}</p>
                </div>
              </ScrollZoomIn>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== MAIN CONTENT CONTAINER ==================== */}
      <main style={{ maxWidth: '1120px', margin: '0 auto', padding: '64px 32px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
        
        {/* ── 1. CHC THEORY & FLUID VS CRYSTALLIZED ── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            
            {/* Fluid Intelligence (Gf) Card */}
            <ScrollZoomIn delay={0.05}>
              <div style={{
                background: 'rgba(0, 122, 83, 0.04)',
                border: '2px solid #007a53',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxSizing: 'border-box',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      background: '#007a53',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check</span>
                      Parameter Inti RPM
                    </span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#007a53',
                      background: 'rgba(0, 122, 83, 0.1)',
                      padding: '2px 10px',
                      borderRadius: '6px',
                    }}>
                      CHC Strata II
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: '#007a53',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(0,122,83,0.25)',
                    }}>
                      Gf
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: 0, letterSpacing: '-0.01em' }}>
                        Fluid Intelligence (Kecerdasan Cair)
                      </h3>
                      <p style={{ fontSize: '12px', fontWeight: 600, color: '#007a53', margin: '2px 0 0' }}>
                        Kapasitas penalaran logis & induksi murni
                      </p>
                    </div>
                  </div>

                  <div style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '20px',
                  }}>
                    <p style={{ fontSize: '12px', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                      <strong style={{ color: '#111827', fontWeight: 700 }}>Definisi Klinis:</strong> Kemampuan memanipulasi representasi mental abstrak, mendeteksi pola baru, dan memecahkan teka-teki tanpa pengalaman belajar sebelumnya.
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: '#374151' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#005f40', flexShrink: 0 }}>verified</span>
                      <span><strong style={{ color: '#111827' }}>Bebas Kurikulum:</strong> Tidak terpengaruh kualitas sekolah atau hafalan teks.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: '#374151' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#005f40', flexShrink: 0 }}>verified</span>
                      <span><strong style={{ color: '#111827' }}>Kekuatan Universal:</strong> Reliabel diterapkan ke seluruh warga global dari latar belakang apa pun.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: '#374151' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#005f40', flexShrink: 0 }}>verified</span>
                      <span><strong style={{ color: '#111827' }}>Aktivasi Korteks Prefrontal:</strong> Menguji kecepatan kerja working memory dan konsentrasi laten.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollZoomIn>

            {/* Crystallized Intelligence (Gc) Card */}
            <ScrollZoomIn delay={0.15}>
              <div style={{
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxSizing: 'border-box',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', background: '#e2e8f0', padding: '4px 12px', borderRadius: '9999px' }}>
                      CHC Strata II • Dieliminasi dari Tes RPM
                    </span>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'monospace', color: '#64748b' }}>Gc</span>
                  </div>

                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#334155', margin: '0 0 4px' }}>
                    Crystallized Intelligence (Kristalisasi)
                  </h3>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 16px' }}>
                    Kekayaan vokabulari, budaya & fakta terhafal
                  </p>

                  <div style={{
                    background: '#ffffff',
                    border: '1px solid #fecaca',
                    borderRadius: '12px',
                    padding: '14px',
                    marginBottom: '20px',
                  }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#dc2626', marginBottom: '2px' }}>
                      Kelemahan Penilaian Konvensional:
                    </div>
                    <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                      Tes konvensional yang menyertakan sinonim-antonim kata atau fakta sejarah memicu ketidakadilan penilaian antar status ekonomi keluarga.
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: '#475569' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#dc2626', flexShrink: 0 }}>cancel</span>
                      <span><strong style={{ color: '#1e293b' }}>Dipengaruhi Sosio-Ekonomi:</strong> Sangat tergantung tingkat fasilitas pendidikan masa kecil.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: '#475569' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#dc2626', flexShrink: 0 }}>cancel</span>
                      <span><strong style={{ color: '#1e293b' }}>Terhambat Kamus Bahasa:</strong> Menghukum penutur non-native atau dialek minor.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: '#475569' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#dc2626', flexShrink: 0 }}>cancel</span>
                      <span><strong style={{ color: '#1e293b' }}>Mudah Dihafalkan:</strong> Menguji daya tampung memori statis daripada kapasitas logika murni.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollZoomIn>

          </div>
        </section>

        {/* ── 2. THE 5 MATRIX TRANSFORMATION RULES BANNER ── */}
        <ScrollZoomIn delay={0.05}>
          <section style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '24px 28px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '280px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(0, 95, 64, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#005f40',
                flexShrink: 0,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>grid_view</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', margin: '0 0 2px' }}>
                  5 Kaidah Transformasi Logika Matriks
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                  Eksplorasi hukum rotasi, progresi, aljabar boolean, translasi spasial, dan mutasi morfologi butir soal RPM.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowRulesModal(!showRulesModal)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                background: '#f8fafc',
                color: '#005f40',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
                transition: 'all 0.15s ease',
              }}
            >
              <span>{showRulesModal ? 'Tutup 5 Kaidah Logika' : 'Lihat 5 Kaidah Logika'}</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                {showRulesModal ? 'expand_less' : 'arrow_forward'}
              </span>
            </button>
          </section>
        </ScrollZoomIn>

        {/* Expandable 5 Rules Visual Breakdown */}
        {showRulesModal && (
          <ScrollZoomIn delay={0.05}>
            <section style={{
              background: '#ffffff',
              border: '2px solid #005f40',
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              boxShadow: '0 4px 16px rgba(0,95,64,0.1)',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#005f40', margin: 0 }}>
                Panduan 5 Aturan Penalaran Matriks Progresif
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                {[
                  { title: '1. Rotasi Spasial', desc: 'Perputaran pola 90° atau 180° searah/berlawanan jarum jam pada setiap langkah baris.' },
                  { title: '2. Progresi Jumlah', desc: 'Penambahan atau pengurangan jumlah elemen visual secara gradual dari kolom ke kolom.' },
                  { title: '3. Operasi Boolean (XOR)', desc: 'Penggabungan bentuk di mana garis yang tumpang tindih akan terhapus secara logis.' },
                  { title: '4. Translasi Posisi', desc: 'Pergeseran posisi simetri elemen pada sumbu horizontal atau vertikal.' },
                  { title: '5. Mutasi Morfologi', desc: 'Perubahan bentuk dasar, warna isian, atau ketebalan garis sesuai urutan aturan.' },
                ].map((rule, idx) => (
                  <div key={idx} style={{ background: '#f6fbf5', border: '1px solid #95f6c6', padding: '16px', borderRadius: '12px' }}>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: '#111827', marginBottom: '6px' }}>{rule.title}</div>
                    <div style={{ fontSize: '11px', color: '#4b5563', lineHeight: 1.5 }}>{rule.desc}</div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollZoomIn>
        )}

        {/* ── 3. CROSS-CULTURAL FAIRNESS & MENSA ADOPTION ── */}
        <ScrollZoomIn delay={0.05}>
          <section style={{
            background: 'rgba(255, 232, 210, 0.3)',
            borderRadius: '20px',
            padding: '36px',
            border: '1px solid #e2e8f0',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#005f40',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  marginBottom: '12px',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>public</span>
                  <span>BEBAS BIAS KULTURAL & BAHASA</span>
                </div>

                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111827', margin: '0 0 14px', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                  Mengapa Standar Raven Digunakan Oleh Mensa & Komunitas Klinis Dunia?
                </h2>

                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 24px' }}>
                  Berbeda dengan tes kecerdasan konvensional yang menyertakan penalaran verbal, sinonim kata, atau matematika berhitung sekolah, Raven's Progressive Matrices hanya mengandalkan rangsangan simbolik murni.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#005f40', marginTop: '2px' }}>language</span>
                    <div>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827', display: 'block', marginBottom: '2px' }}>Zero Language Barrier</span>
                      <span style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>Dapat dikerjakan oleh siapa saja tanpa hambatan kendala penguasaan bahasa formal tertentu.</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#005f40', marginTop: '2px' }}>school</span>
                    <div>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827', display: 'block', marginBottom: '2px' }}>Education-Neutral</span>
                      <span style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>Menetralkan perbedaan akses pendidikan dasar dan kualitas sistem persekolahan antarwilayah.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mensa Gold Benchmark Card */}
              <ScrollZoomIn delay={0.15}>
                <div style={{
                  background: '#ffffff',
                  padding: '32px 24px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(0, 95, 64, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#005f40',
                    marginBottom: '16px',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>workspace_premium</span>
                  </div>

                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', marginBottom: '6px' }}>
                    Standar Mensa High-IQ
                  </div>

                  <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.6, marginBottom: '20px' }}>
                    Tolak ukur evaluasi persentil ke-98 (&gt;130 IQ SD=15) dalam tes seleksi keanggotaan Mensa Internasional.
                  </p>

                  <span style={{
                    padding: '6px 16px',
                    borderRadius: '9999px',
                    background: '#f1f4f9',
                    color: '#005f40',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                  }}>
                    Certified Gold Benchmark
                  </span>
                </div>
              </ScrollZoomIn>
            </div>
          </section>
        </ScrollZoomIn>

        {/* ── 4. INTERACTIVE PROTOCOL CTA SECTION ── */}
        <ScrollZoomIn delay={0.05}>
          <section style={{
            background: 'linear-gradient(135deg, #005f40 0%, #004d34 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '48px 32px',
            boxShadow: '0 8px 32px rgba(0,95,64,0.25)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}>
            <div style={{
              position: 'absolute',
              right: '-40px',
              bottom: '-40px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(255,255,255,0.15)',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>bolt</span>
                <span>SESI ADAPTIF BERJALAN: 30 ITEM TERKALIBRASI</span>
              </div>

              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.25, margin: 0 }}>
                Uji Kemampuan Penalaran Logika Anda Sekarang
              </h2>

              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, margin: 0 }}>
                Ukur kecerdasan cair (fluid intelligence) secara komparatif terhadap populasi normatif global dengan laporan psikometri instan.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', paddingTop: '8px', width: '100%' }}>
                <button
                  onClick={() => onStartTest('standard')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    height: '48px',
                    padding: '0 32px',
                    borderRadius: '10px',
                    background: '#ffffff',
                    color: '#005f40',
                    fontWeight: 800,
                    fontSize: '15px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    fontFamily: 'inherit',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>Mulai Asesmen Klinis RPM</span>
                </button>

                <button
                  onClick={() => onStartTest('practice')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    height: '48px',
                    padding: '0 24px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.15)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>quiz</span>
                  <span>Lihat Contoh Soal Latihan</span>
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span> Waktu Rata-rata: 20 Menit
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>visibility_off</span> Anonim & Terenkripsi
                </span>
              </div>

            </div>
          </section>
        </ScrollZoomIn>

      </main>

    </div>
  );
};
