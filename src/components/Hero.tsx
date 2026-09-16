import { ScrollZoomIn } from './ScrollZoomIn';
import React from 'react';
import { TestMode, TestResult } from '../types';
import { BrainCognitiveDiagram } from './BrainCognitiveDiagram';

interface HeroProps {
  onStartTest: (mode: TestMode) => void;
  onOpenTechGuide: () => void;
  pastResults?: TestResult[];
  onSelectPastResult?: (res: TestResult) => void;
  onClearHistory?: () => void;
}


const TypewriterText: React.FC = () => {
  const segments = [
    { text: "Instrumen psikometrik berbasis ", bold: false },
    { text: "Raven's Progressive Matrices (RPM)", bold: true },
    { text: " dengan standardisasi kurva ", bold: false },
    { text: "Skala Wechsler (Mean 100, SD 15)", bold: true },
    { text: ". 100% gratis selamanya tanpa tipu muslihat kartu kredit, diproses aman langsung pada peramban web Anda (Client-Side Privacy).", bold: false },
  ];

  const totalChars = segments.reduce((sum, s) => sum + s.text.length, 0);
  const [charCount, setCharCount] = React.useState(0);
  const [isTypingStarted, setIsTypingStarted] = React.useState(false);
  const containerRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTypingStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isTypingStarted) return;

    const interval = setInterval(() => {
      setCharCount((prev) => {
        if (prev < totalChars) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [isTypingStarted, totalChars]);

  let remaining = charCount;

  return (
    <p
      ref={containerRef}
      style={{
        color: "#4b5563",
        fontSize: "1rem",
        lineHeight: 1.75,
        margin: 0,
        minHeight: "4.8em",
      }}
    >
      <style>{`
        @keyframes typewriterBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      {segments.map((seg, idx) => {
        if (remaining <= 0) return null;
        const currentSlice = seg.text.slice(0, remaining);
        remaining -= seg.text.length;

        if (seg.bold) {
          return (
            <strong key={idx} style={{ color: "#111827", fontWeight: 600 }}>
              {currentSlice}
            </strong>
          );
        }
        return <span key={idx}>{currentSlice}</span>;
      })}

      {charCount < totalChars && (
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            backgroundColor: "#059669",
            marginLeft: "3px",
            verticalAlign: "middle",
            animation: "typewriterBlink 0.7s infinite",
          }}
        />
      )}
    </p>
  );
};

export const Hero: React.FC<HeroProps> = ({ onStartTest }) => {
  return (
    <div style={{ width: '100%' }}>

      {/* ==================== HERO SECTION ==================== */}
      <section
        id="beranda"
        style={{
          background: 'linear-gradient(160deg, #eaf6ef 0%, #f3faf5 55%, #f8fdf9 100%)',
          borderBottom: '1px solid #c9e6d5',
          padding: '80px 0 96px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px' }}>
          {/* ── 2-column hero grid: left (text) | right (image) ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '7fr 5fr',
            gap: '48px',
            alignItems: 'center',
          }}>
            {/* ────── Left Column: Copywriting ────── */}
            <ScrollZoomIn delay={0.05}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h1 style={{
                color: '#111827',
                fontSize: '2.75rem',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: 0,
              }}>
                Ukur{' '}
                <span style={{
                  color: '#059669',
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(5,150,105,0.3)',
                  textDecorationThickness: '3px',
                  textUnderlineOffset: '6px',
                }}>
                  Kecerdasan Cair
                </span>
                {' '}(Fluid Intelligence) Anda Secara Akurat &amp; Transparan.
              </h1>

                            <TypewriterText />

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  onClick={() => onStartTest('standard')}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    height: '48px', padding: '0 28px', borderRadius: '8px',
                    background: '#059669', color: '#fff', border: 'none',
                    fontWeight: 700, fontSize: '15px', cursor: 'pointer',
                    boxShadow: '0 2px 10px rgba(5,150,105,0.28)',
                    fontFamily: 'inherit',
                  }}
                >
                  <span>Mulai Tes Standar (12 Menit)</span>
                </button>
                <a
                  href="#mode-tes"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    height: '48px', padding: '0 20px', borderRadius: '8px',
                    background: '#fff', color: '#374151', border: '1px solid #d1d5db',
                    fontWeight: 600, fontSize: '14px', textDecoration: 'none',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#9ca3af' }}>menu_book</span>
                  <span>Pelajari Metodologi Skala</span>
                </a>
              </div>

              {/* Social Proof Metrics */}
              <div style={{
                borderTop: '1px solid #b2d8c2',
                paddingTop: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>142.850+</div>
                  <div style={{ fontSize: '11px', color: '#6b7280', fontWeight: 500, marginTop: '2px' }}>Kohort Normalisasi RI</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#059669', letterSpacing: '-0.02em' }}>99.4%</div>
                  <div style={{ fontSize: '11px', color: '#6b7280', fontWeight: 500, marginTop: '2px' }}>Validitas Konstruk</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>Rp 0</div>
                  <div style={{ fontSize: '11px', color: '#6b7280', fontWeight: 500, marginTop: '2px' }}>Tanpa Registrasi / Iklan</div>
                </div>
              </div>
            </div>

            </ScrollZoomIn>
            {/* ────── Right Column: Cognitive Flow Diagram ────── */}
            <ScrollZoomIn delay={0.25}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BrainCognitiveDiagram />
            </div>
            </ScrollZoomIn>


          </div>{/* end 2-col grid */}
        </div>
      </section>

      {/* ==================== TEST MODE SELECTION ==================== */}
      <section id="mode-tes" style={{ background: '#f9fafb', padding: '72px 0' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px' }}>
          {/* Header */}
          <ScrollZoomIn delay={0.05}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px auto' }}>
            <div style={{
              display: 'inline-block',
              padding: '5px 16px', borderRadius: '9999px',
              background: '#e5e7eb', color: '#4b5563',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.09em', textTransform: 'uppercase',
              marginBottom: '14px',
            }}>
              PILIH INSTRUMEN EVALUASI
            </div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.025em', margin: '0 0 10px' }}>
              Pilih Mode Sesuai Kebutuhan Anda
            </h2>
            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.65, margin: 0 }}>
              Seluruh mode dilengkapi kalibrasi matriks non-verbal yang bebas dari bias bahasa, latar belakang pendidikan, maupun budaya.
            </p>
          </div>

          </ScrollZoomIn>
          {/* 3-column Bento Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', alignItems: 'start' }}>

            {/* CARD 1 – Tes Kilat */}
            <ScrollZoomIn delay={0.1} style={{ height: "100%" }}>
            <div style={{
              background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px',
              padding: '24px', display: 'flex', flexDirection: 'column',
              boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#374151' }}>speed</span>
                </span>
                <span style={{
                  fontSize: '11px', padding: '3px 10px', borderRadius: '9999px',
                  background: '#f3f4f6', color: '#6b7280', fontWeight: 600,
                }}>8 Menit</span>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', margin: '0 0 3px' }}>Tes Kilat</h3>
              <p style={{ fontSize: '11px', color: '#059669', fontWeight: 700, margin: '0 0 12px' }}>Rapid Screening (Penyaringan Cepat)</p>
              <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.65, margin: '0 0 16px' }}>
                Dirancang untuk penilaian kognitif pendahuluan dengan butir soal adaptif berbobot diskriminasi tinggi.
              </p>
              <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  <><strong>8 Butir Soal</strong> Matriks Terpilih</>,
                  <>Batas Waktu Ketat <strong>8 Menit</strong></>,
                  <>Estimasi Kasar Bandwith IQ (±7 poin)</>,
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#374151' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '17px', color: '#9ca3af' }}>check</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onStartTest('quick')}
                style={{
                  marginTop: '24px', height: '42px', borderRadius: '8px',
                  background: '#f9fafb', border: '1px solid #e5e7eb',
                  color: '#374151', fontWeight: 600, fontSize: '13px',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'inherit',
                }}
              >
                Mulai Screening Cepat
              </button>
            </div>
            </ScrollZoomIn>

            {/* CARD 2 – Tes Standar Klinis (ELEVATED) */}
            <ScrollZoomIn delay={0.2} style={{ height: "100%" }}>
            <div style={{
              background: '#fff', border: '2px solid #059669', borderRadius: '16px',
              padding: '28px', display: 'flex', flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(5,150,105,0.18)',
              position: 'relative', zIndex: 10,
              transform: 'scale(1.025)', transformOrigin: 'center center',
            }}>
              {/* Floating Badge */}
              <div style={{
                position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                background: '#059669', color: '#fff',
                padding: '4px 14px', borderRadius: '9999px',
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
                display: 'inline-flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(5,150,105,0.3)',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>auto_awesome</span>
                REKOMENDASI UTAMA
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', marginTop: '6px' }}>
                <span style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#059669' }}>psychology</span>
                </span>
                <span style={{
                  fontSize: '11px', padding: '3px 10px', borderRadius: '9999px',
                  background: '#dcfce7', color: '#059669', fontWeight: 700,
                }}>12 Menit</span>
              </div>

              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', margin: '0 0 3px' }}>Tes Standar Klinis</h3>
              <p style={{ fontSize: '11px', color: '#059669', fontWeight: 800, margin: '0 0 12px' }}>Kalibrasi Gaussian Presisi Penuh</p>
              <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.65, margin: '0 0 16px' }}>
                Instrumen lengkap untuk menghitung fluid intelligence individual terhadap kohort normatif nasional Wechsler SD=15.
              </p>
              <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  <><strong>15 Butir Soal</strong> Progresif Gradual</>,
                  <>Estimasi Rentang IQ Presisi <strong>70 – 155</strong></>,
                  <><strong>Bonus Kecepatan</strong> (Speed Multiplier)</>,
                  <>Sertifikat Digital &amp; Breakdown 5 Sektor</>,
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#374151' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '17px', color: '#059669' }}>check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onStartTest('standard')}
                style={{
                  marginTop: '24px', height: '46px', borderRadius: '8px',
                  background: '#059669', border: 'none',
                  color: '#fff', fontWeight: 700, fontSize: '14px',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  boxShadow: '0 2px 8px rgba(5,150,105,0.22)',
                  fontFamily: 'inherit',
                }}
              >
                <span>Mulai Tes Standar Sekarang</span>
              </button>
            </div>
            </ScrollZoomIn>

            {/* CARD 3 – Mode Latihan Bebas */}
            <ScrollZoomIn delay={0.3} style={{ height: "100%" }}>
            <div style={{
              background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px',
              padding: '24px', display: 'flex', flexDirection: 'column',
              boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#374151' }}>model_training</span>
                </span>
                <span style={{
                  fontSize: '11px', padding: '3px 10px', borderRadius: '9999px',
                  background: '#f3f4f6', color: '#6b7280', fontWeight: 600,
                }}>Tanpa Selalu</span>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', margin: '0 0 3px' }}>Mode Latihan Bebas</h3>
              <p style={{ fontSize: '11px', color: '#6b7280', fontWeight: 700, margin: '0 0 12px' }}>Study &amp; Logic Deconstruction</p>
              <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.65, margin: '0 0 16px' }}>
                Pahami prinsip matematis, operasi logika boolean (XOR/AND), dan rotasi spasial di balik setiap pola butir soal.
              </p>
              <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  <><strong>15 Butir Soal</strong> Interaktif</>,
                  <><strong>Tanpa Timer</strong> (Bebas Tekanan Waktu)</>,
                  <>Pembahasan Aturan Logika Terbuka Langsung</>,
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#374151' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '17px', color: '#9ca3af' }}>check</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onStartTest('practice')}
                style={{
                  marginTop: '24px', height: '42px', borderRadius: '8px',
                  background: '#f9fafb', border: '1px solid #e5e7eb',
                  color: '#374151', fontWeight: 600, fontSize: '13px',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'inherit',
                }}
              >
                Buka Eksplorasi Latihan
              </button>
            </div>
            </ScrollZoomIn>

          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA CONSOLE BANNER ==================== */}
      <ScrollZoomIn delay={0.05}>
      <section style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)',
        borderTop: '1px solid #e5e7eb',
        padding: '72px 0',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '5px 16px', borderRadius: '9999px',
            background: '#dcfce7', color: '#059669',
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', flexShrink: 0 }}></span>
            SESI PENGUJIAN TERSEDIA BEBAS
          </div>

          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.025em', margin: '0 0 16px' }}>
            Siap Mengetahui Kapasitas Penalaran Logika Anda?
          </h2>

          <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Waktu pengerjaan hanya 12 menit. Tidak ada pendaftaran berbelit, tanpa email, langsung dapatkan skor dan sertifikat digital Anda saat ini juga.
          </p>

          <button
            onClick={() => onStartTest('standard')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              height: '50px', padding: '0 36px', borderRadius: '8px',
              background: '#059669', border: 'none',
              color: '#fff', fontWeight: 700, fontSize: '15px',
              cursor: 'pointer', boxShadow: '0 4px 16px rgba(5,150,105,0.28)',
              fontFamily: 'inherit',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>play_arrow</span>
            <span>Mulai Tes IQ Sekarang (Gratis)</span>
          </button>
        </div>
      </section>
      </ScrollZoomIn>

    </div>
  );
};
              <TypewriterText />