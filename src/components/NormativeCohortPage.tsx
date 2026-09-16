import React, { useState, useEffect, useRef } from "react";
import { ScrollZoomIn } from "./ScrollZoomIn";
import { TestMode } from "../types";

interface NormativeCohortPageProps {
  onStartTest: (mode: TestMode) => void;
  onGoToMethodology?: () => void;
}

// Custom hook for smooth animated number counting
const useCountUp = (target: number, isStarted: boolean, duration: number = 3200, decimals: number = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isStarted) return;
    let startTime: number | null = null;
    let animFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Cubic ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easedProgress * target);

      if (progress < 1) {
        animFrame = requestAnimationFrame(step);
      }
    };

    animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [isStarted, target, duration]);

  return count.toFixed(decimals);
};

export const NormativeCohortPage: React.FC<NormativeCohortPageProps> = ({
  onStartTest,
  onGoToMethodology,
}) => {
  const [isGraphVisible, setIsGraphVisible] = useState(false);
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGraphVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (graphRef.current) {
      observer.observe(graphRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Count-up animated numbers (smooth 3.2s duration)
  const val22_left = useCountUp(2.2, isGraphVisible, 3200, 1);
  const val136_left = useCountUp(13.6, isGraphVisible, 3200, 1);
  const val682 = useCountUp(68.2, isGraphVisible, 3200, 1);
  const val136_right = useCountUp(13.6, isGraphVisible, 3200, 1);
  const val22_right = useCountUp(2.2, isGraphVisible, 3200, 1);

  const iq70 = useCountUp(70, isGraphVisible, 2800, 0);
  const iq85 = useCountUp(85, isGraphVisible, 2800, 0);
  const iq100 = useCountUp(100, isGraphVisible, 2800, 0);
  const iq115 = useCountUp(115, isGraphVisible, 2800, 0);
  const iq130 = useCountUp(130, isGraphVisible, 2800, 0);

  // Single ultra-smooth mathematical Bézier curve path (zero wobble)
  const curvePath = "M 50 250 C 240 250, 310 30, 450 30 C 590 30, 660 250, 850 250";
  const closedPath = "M 50 250 C 240 250, 310 30, 450 30 C 590 30, 660 250, 850 250 L 850 250 L 50 250 Z";

  return (
    <div style={{ width: "100%", background: "#f6fbf5", color: "#181d19" }}>

      {/* ==================== HERO SECTION ==================== */}
      <section style={{
        position: "relative",
        padding: "64px 0 72px",
        background: "linear-gradient(160deg, #f6fbf5 0%, #eaf6ef 100%)",
        borderBottom: "1px solid #e2e8f0",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          
          <ScrollZoomIn delay={0}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              marginBottom: "20px",
            }}>
              <span style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#005f40",
                boxShadow: "0 0 8px rgba(0,95,64,0.4)",
              }} />
              <span style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#111827",
                textTransform: "uppercase",
              }}>
                DISTRIBUSI POPULASI & ACUAN SKOR
              </span>
            </div>
          </ScrollZoomIn>

          <ScrollZoomIn delay={0.1}>
            <h1 style={{
              fontSize: "2.75rem",
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              margin: "0 0 16px",
              maxWidth: "760px",
              marginLeft: "auto",
              marginRight: "auto",
            }}>
              Distribusi Skor IQ & Populasi Acuan
            </h1>
          </ScrollZoomIn>

          <ScrollZoomIn delay={0.2}>
            <p style={{
              fontSize: "1.125rem",
              color: "#4b5563",
              maxWidth: "640px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}>
              Pahami bagaimana skor IQ Anda dibandingkan dengan 142.850 orang dari populasi umum secara objektif dan mudah.
            </p>
          </ScrollZoomIn>

          {/* 3-column stats card */}
          <ScrollZoomIn delay={0.3}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              background: "#ffffff",
              padding: "24px 32px",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 20px rgba(17,24,39,0.05)",
              textAlign: "left",
              maxWidth: "800px",
              margin: "0 auto",
            }}>
              <div style={{ borderRight: "1px solid #e2e8f0", paddingRight: "16px" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#6e7a72", textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: "4px" }}>
                  Basis Data Kalibrasi
                </span>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>
                  142.850
                </div>
                <span style={{ fontSize: "12px", color: "#005f40", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>groups</span>
                  Peserta Aktif Terverifikasi
                </span>
              </div>

              <div style={{ borderRight: "1px solid #e2e8f0", paddingRight: "16px" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#6e7a72", textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: "4px" }}>
                  Titik Tengah Populasi
                </span>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>
                  100 Skor
                </div>
                <span style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px", display: "block" }}>
                  Nilai Rata-Rata Umum
                </span>
              </div>

              <div>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#6e7a72", textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: "4px" }}>
                  Tingkat Keandalan Hasil
                </span>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#005f40", letterSpacing: "-0.02em" }}>
                  95% Akurasi
                </div>
                <span style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px", display: "block" }}>
                  Presisi Kalibrasi Standar
                </span>
              </div>
            </div>
          </ScrollZoomIn>

        </div>
      </section>

      {/* ==================== BELL CURVE GAUSS DISTRIBUTION SECTION ==================== */}
      <section style={{ padding: "72px 0", maxWidth: "1120px", margin: "0 auto" }}>
        <div style={{ padding: "0 32px" }}>
          
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#005f40", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  VISUALISASI MUDAH DIPAHAMI
                </span>
                <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.025em", margin: "4px 0 8px" }}>
                  Kurva Distribusi Skor IQ
                </h2>
                <p style={{ fontSize: "14px", color: "#4b5563", maxWidth: "600px", margin: 0, lineHeight: 1.6 }}>
                  Gambaran sederhana bagaimana kecerdasan logika terdistribusi di masyarakat luas. Sebagian besar orang berada tepat di bagian tengah.
                </p>
              </div>

              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "#f1f4f9",
                border: "1px solid #e2e8f0",
                fontSize: "12px",
                fontWeight: 600,
                color: "#111827",
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#005f40" }} />
                <span>Standar Acuan Wechsler (Rata-rata 100)</span>
              </div>
            </div>
          </div>

          {/* GAUSS SVG GRAPH CARD (UNIFIED PERFECT BEZIER CURVE & RELAXED 3.2s FLOW ANIMATION) */}
          <div
            ref={graphRef}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(17,24,39,0.05)",
            }}
          >
            <div style={{ width: "100%", overflow: "hidden", paddingTop: "16px", paddingBottom: "8px" }}>
              <svg viewBox="0 0 900 330" style={{ width: "100%", height: "auto", userSelect: "none" }}>
                <defs>
                  <linearGradient id="grad-center" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#007A53" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#007A53" stopOpacity="0.03" />
                  </linearGradient>
                  <linearGradient id="grad-sub" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#79d9ab" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#79d9ab" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="grad-low" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#bdc9c0" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#bdc9c0" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="grad-mensa" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#005236" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#005236" stopOpacity="0.15" />
                  </linearGradient>

                  {/* 5 Vertical Zone Clips for perfect gradient segment division */}
                  <clipPath id="clip-zone-1"><rect x="50" y="0" width="160" height="250" /></clipPath>
                  <clipPath id="clip-zone-2"><rect x="210" y="0" width="120" height="250" /></clipPath>
                  <clipPath id="clip-zone-3"><rect x="330" y="0" width="240" height="250" /></clipPath>
                  <clipPath id="clip-zone-4"><rect x="570" y="0" width="120" height="250" /></clipPath>
                  <clipPath id="clip-zone-5"><rect x="690" y="0" width="160" height="250" /></clipPath>

                  {/* Master clip-path for rising gradient fill animation (bottom to top over 3s) */}
                  <clipPath id="gauss-fill-clip">
                    <rect
                      x="0"
                      y={isGraphVisible ? "0" : "250"}
                      width="900"
                      height={isGraphVisible ? "250" : "0"}
                      style={{
                        transition: "y 3.0s cubic-bezier(0.25, 1, 0.35, 1) 0.2s, height 3.0s cubic-bezier(0.25, 1, 0.35, 1) 0.2s",
                      }}
                    />
                  </clipPath>
                </defs>

                {/* Baseline & Dotted Mean line */}
                <line x1="50" y1="250" x2="850" y2="250" stroke="#E2E8F0" strokeWidth="1.5" />
                <line x1="450" y1="30" x2="450" y2="250" stroke="#007A53" strokeWidth="2" strokeDasharray="4,4" />

                {/* Unified Smooth Gradient Fill Areas (rising from bottom to top) */}
                <g clipPath="url(#gauss-fill-clip)">
                  <g clipPath="url(#clip-zone-1)"><path d={closedPath} fill="url(#grad-low)" /></g>
                  <g clipPath="url(#clip-zone-2)"><path d={closedPath} fill="url(#grad-sub)" /></g>
                  <g clipPath="url(#clip-zone-3)"><path d={closedPath} fill="url(#grad-center)" /></g>
                  <g clipPath="url(#clip-zone-4)"><path d={closedPath} fill="url(#grad-sub)" /></g>
                  <g clipPath="url(#clip-zone-5)"><path d={closedPath} fill="url(#grad-mensa)" /></g>
                </g>

                {/* Master Ultra-Smooth Curve Line (flowing gracefully from left to right over 3.2s) */}
                <path
                  d={curvePath}
                  fill="none"
                  stroke="#005f40"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 1000,
                    strokeDashoffset: isGraphVisible ? 0 : 1000,
                    transition: "stroke-dashoffset 3.2s cubic-bezier(0.25, 1, 0.35, 1)",
                  }}
                />

                {/* Animated Count-Up Percentile Labels (3.2s count-up) */}
                <text x="135" y="238" textAnchor="middle" fill="#4B5563" fontSize="12" fontWeight="600" fontFamily="Inter">{val22_left}%</text>
                <text x="270" y="205" textAnchor="middle" fill="#181d19" fontSize="13" fontWeight="600" fontFamily="Inter">{val136_left}%</text>
                <text x="450" y="100" textAnchor="middle" fill="#005f40" fontSize="18" fontWeight="700" fontFamily="Inter">{val682}%</text>
                <text
                  x="450" y="122" textAnchor="middle" fill="#3e4942" fontSize="12" fontWeight="600" fontFamily="Inter"
                  style={{
                    opacity: isGraphVisible ? 1 : 0,
                    transform: isGraphVisible ? "translateY(0)" : "translateY(6px)",
                    transition: "opacity 1.0s ease-out 1.2s, transform 1.0s ease-out 1.2s",
                  }}
                >
                  Sebagian Besar Orang (Normal)
                </text>
                <text x="630" y="205" textAnchor="middle" fill="#181d19" fontSize="13" fontWeight="600" fontFamily="Inter">{val136_right}%</text>
                <text x="765" y="238" textAnchor="middle" fill="#005236" fontSize="12" fontWeight="700" fontFamily="Inter">{val22_right}%</text>

                {/* Peak Node & Label */}
                <circle
                  cx="450" cy="30" r="5" fill="#007A53" stroke="#ffffff" strokeWidth="2"
                  style={{
                    opacity: isGraphVisible ? 1 : 0,
                    transform: isGraphVisible ? "scale(1)" : "scale(0)",
                    transformOrigin: "450px 30px",
                    transition: "opacity 0.6s ease-out 1.5s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1.5s",
                  }}
                />
                <text
                  x="450" y="18" textAnchor="middle" fill="#007A53" fontSize="12" fontWeight="700" fontFamily="Inter"
                  style={{
                    opacity: isGraphVisible ? 1 : 0,
                    transition: "opacity 0.8s ease-out 1.5s",
                  }}
                >
                  Puncak: Rata-Rata 100
                </text>

                {/* X-axis ticks & animated IQ scale values */}
                <g style={{
                  opacity: isGraphVisible ? 1 : 0,
                  transform: isGraphVisible ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 1.0s ease-out 0.8s, transform 1.0s ease-out 0.8s",
                }}>
                  <text x="210" y="272" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="700" fontFamily="Inter">{iq70}</text>
                  <text x="210" y="288" textAnchor="middle" fill="#6e7a72" fontSize="11" fontWeight="500" fontFamily="Inter">Batas Awal</text>

                  <text x="330" y="272" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="700" fontFamily="Inter">{iq85}</text>
                  <text x="330" y="288" textAnchor="middle" fill="#6e7a72" fontSize="11" fontWeight="500" fontFamily="Inter">Awal Normal</text>

                  <text x="450" y="272" textAnchor="middle" fill="#007A53" fontSize="14" fontWeight="800" fontFamily="Inter">{iq100}</text>
                  <text x="450" y="288" textAnchor="middle" fill="#007A53" fontSize="11" fontWeight="600" fontFamily="Inter">Skor Rata-Rata</text>

                  <text x="570" y="272" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="700" fontFamily="Inter">{iq115}</text>
                  <text x="570" y="288" textAnchor="middle" fill="#6e7a72" fontSize="11" fontWeight="500" fontFamily="Inter">Batas Atas Normal</text>

                  <text x="690" y="272" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="700" fontFamily="Inter">{iq130}</text>
                  <text x="690" y="288" textAnchor="middle" fill="#6e7a72" fontSize="11" fontWeight="500" fontFamily="Inter">Tinggi / Superior</text>

                  <text x="810" y="272" textAnchor="middle" fill="#6e7a72" fontSize="12" fontWeight="600" fontFamily="Inter">140+</text>
                  <text x="810" y="288" textAnchor="middle" fill="#6e7a72" fontSize="11" fontWeight="500" fontFamily="Inter">Sangat Langka</text>
                </g>
              </svg>
            </div>

            {/* 4 Classification Bento Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginTop: "24px", paddingTop: "24px", borderTop: "1px solid #e2e8f0" }}>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#bdc9c0" }} />
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#4b5563" }}>Rentang Bawah</span>
                </div>
                <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827" }}>70 – 85</div>
                <span style={{ fontSize: "11px", color: "#6e7a72", marginTop: "4px", display: "block" }}>Sekitar 13.6% orang</span>
              </div>

              <div style={{ background: "rgba(0, 122, 83, 0.06)", border: "2px solid #007a53", borderRadius: "12px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#007a53" }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#007a53" }}>Rata-Rata Umum</span>
                </div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#007a53" }}>85 – 115</div>
                <span style={{ fontSize: "11px", color: "#3e4942", fontWeight: 600, marginTop: "4px", display: "block" }}>Sebagian Besar Orang (68.2%)</span>
              </div>

              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#79d9ab" }} />
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#4b5563" }}>Di Atas Rata-Rata</span>
                </div>
                <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827" }}>115 – 130</div>
                <span style={{ fontSize: "11px", color: "#6e7a72", marginTop: "4px", display: "block" }}>Sekitar 13.6% orang</span>
              </div>

              <div style={{ background: "#f8fafc", border: "1px solid rgba(0,95,64,0.3)", borderRadius: "12px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#005f40" }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#005f40" }}>Sangat Unggul</span>
                </div>
                <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827" }}>&gt; 130 (Istimewa)</div>
                <span style={{ fontSize: "11px", color: "#005f40", fontWeight: 600, marginTop: "4px", display: "block" }}>Top 2.2% Populasi</span>
              </div>
            </div>

            {/* Quick Note Banner */}
            <div style={{
              marginTop: "24px",
              padding: "20px 24px",
              borderRadius: "12px",
              background: "#f1f4f9",
              border: "1px solid #e2e8f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#005f40",
                  flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>info</span>
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: "0 0 2px" }}>Catatan Singkat untuk Anda</h4>
                  <p style={{ fontSize: "13px", color: "#4b5563", margin: 0, lineHeight: 1.5 }}>
                    Skor 100 adalah nilai rata-rata kebanyakan orang. Jika skor Anda berada di antara 85 sampai 115, Anda berada di rentang normal bersama 68% populasi dunia.
                  </p>
                </div>
              </div>

              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontWeight: 700,
                color: "#005f40",
                background: "#ffffff",
                padding: "8px 14px",
                borderRadius: "6px",
                border: "1px solid #e2e8f0",
                whiteSpace: "nowrap",
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>check_circle</span>
                <span>Terkalibrasi Standar Internasional</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================== PERCENTILE MATRIX TABLE SECTION ==================== */}
      <section style={{ padding: "48px 0 72px", maxWidth: "1120px", margin: "0 auto" }}>
        <div style={{ padding: "0 32px" }}>
          
          <ScrollZoomIn delay={0.05}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#005f40", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  KLASIFIKASI PRAKTIS
                </span>
                <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.025em", margin: "4px 0 0" }}>
                  Tabel Tingkatan Skor IQ
                </h2>
              </div>

              <div style={{ fontSize: "13px", fontWeight: 600, color: "#4b5563", display: "flex", alignItems: "center", gap: "6px" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "#005f40" }}>verified</span>
                <span>Data Diperbarui Otomatis</span>
              </div>
            </div>
          </ScrollZoomIn>

          <ScrollZoomIn delay={0.15}>
            <div style={{
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(17,24,39,0.05)",
            }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "#f1f4f9", borderBottom: "1px solid #e2e8f0", color: "#6e7a72", fontSize: "13px", fontWeight: 600 }}>
                    <th style={{ padding: "16px 24px" }}>Rentang Skor IQ</th>
                    <th style={{ padding: "16px 16px" }}>Kategori / Klasifikasi</th>
                    <th style={{ padding: "16px 16px" }}>Persentil Populasi</th>
                    <th style={{ padding: "16px 24px" }}>Keterangan Singkat</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "14px", color: "#111827" }}>
                  
                  <tr style={{ borderBottom: "1px solid #e2e8f0", transition: "background 0.15s" }}>
                    <td style={{ padding: "18px 24px", fontWeight: 800, color: "#005f40" }}>130 ke atas</td>
                    <td style={{ padding: "18px 16px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "3px 10px", borderRadius: "9999px", fontSize: "12px", fontWeight: 700, background: "rgba(0,122,83,0.12)", color: "#005f40" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#005f40" }} />
                        Sangat Unggul (Very Gifted)
                      </span>
                    </td>
                    <td style={{ padding: "18px 16px", fontWeight: 700 }}>Top 2% Teratas</td>
                    <td style={{ padding: "18px 24px", color: "#4b5563" }}>Penalaran logika tingkat tinggi dan pemahaman konsep abstrak sangat cepat</td>
                  </tr>

                  <tr style={{ borderBottom: "1px solid #e2e8f0", transition: "background 0.15s" }}>
                    <td style={{ padding: "18px 24px", fontWeight: 700 }}>115 – 129</td>
                    <td style={{ padding: "18px 16px", fontWeight: 600 }}>Di Atas Rata-Rata (Superior)</td>
                    <td style={{ padding: "18px 16px", fontWeight: 700 }}>Top 15% Teratas</td>
                    <td style={{ padding: "18px 24px", color: "#4b5563" }}>Kemampuan analisis cepat, tangkas menghubungkan pola hubungan logis</td>
                  </tr>

                  <tr style={{ background: "rgba(229,233,228,0.4)", borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "18px 24px", fontWeight: 800, color: "#005f40" }}>85 – 114</td>
                    <td style={{ padding: "18px 16px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "3px 10px", borderRadius: "9999px", fontSize: "12px", fontWeight: 700, background: "#ffffff", border: "1px solid #e2e8f0", color: "#111827" }}>
                        Rata-Rata Normal (Umum)
                      </span>
                    </td>
                    <td style={{ padding: "18px 16px", fontWeight: 800, color: "#005f40" }}>Rentang 68% Tengah</td>
                    <td style={{ padding: "18px 24px", color: "#4b5563" }}>Kemampuan pemecahan masalah harian yang solid dan seimbang</td>
                  </tr>

                  <tr>
                    <td style={{ padding: "18px 24px", fontWeight: 700, color: "#6e7a72" }}>Di bawah 85</td>
                    <td style={{ padding: "18px 16px", color: "#4b5563", fontWeight: 500 }}>Butuh Latihan Tambahan</td>
                    <td style={{ padding: "18px 16px", color: "#4b5563" }}>15% Terbawah</td>
                    <td style={{ padding: "18px 24px", color: "#4b5563" }}>Disarankan mengasah penalaran pola visual dan latihan konsentrasi teratur</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "12px", color: "#6e7a72", marginTop: "8px", textAlign: "right" }}>
              *Persentil menunjukkan persentase orang yang skornya setara atau di bawah nilai Anda.
            </p>
          </ScrollZoomIn>

        </div>
      </section>

      {/* ==================== DEMOGRAPHICS & PSYCHOMETRICS BENTO ==================== */}
      <section style={{ padding: "72px 0", maxWidth: "1120px", margin: "0 auto" }}>
        <div style={{ padding: "0 32px" }}>
          
          <ScrollZoomIn delay={0.05}>
            <div style={{ marginBottom: "36px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#005f40", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                KETERPERCAYAAN & AKURASI
              </span>
              <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.025em", margin: "4px 0 8px" }}>
                Mengapa Acuan Data Ini Terpercaya?
              </h2>
              <p style={{ fontSize: "15px", color: "#4b5563", margin: 0 }}>
                NeuroMatrix dirancang agar sepenuhnya adil dan tidak membeda-bedakan latar belakang, bahasa, maupun tingkat pendidikan peserta.
              </p>
            </div>
          </ScrollZoomIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            
            <ScrollZoomIn delay={0.1}>
              <div style={{
                background: "#ffffff",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxSizing: "border-box",
              }}>
                <div>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,95,64,0.1)", color: "#005f40", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>translate</span>
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>Uji Bebas Bahasa & Budaya</h3>
                  <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.65, margin: 0 }}>
                    Menggunakan pola visual non-verbal murni (gambar matriks abstrak), sehingga adil bagi siapa saja tanpa terpengaruh penguasaan bahasa atau pendidikan formal.
                  </p>
                </div>
                <div style={{ marginTop: "24px", paddingTop: "12px", borderTop: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 700, color: "#005f40" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>check_circle</span>
                  <span>100% Non-Verbal & Universal</span>
                </div>
              </div>
            </ScrollZoomIn>

            <ScrollZoomIn delay={0.2}>
              <div style={{
                background: "#ffffff",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxSizing: "border-box",
              }}>
                <div>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,95,64,0.1)", color: "#005f40", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>groups</span>
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>Seimbang untuk Semua Kalangan</h3>
                  <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.65, margin: 0 }}>
                    Kalibrasi sampel mencakup berbagai rentang usia (16 hingga 50+ tahun) dengan komposisi seimbang antara pria (50.8%) dan wanita (49.2%).
                  </p>
                </div>
                <div style={{ marginTop: "24px", paddingTop: "12px", borderTop: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 700, color: "#005f40" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>check_circle</span>
                  <span>Proporsional Terverifikasi</span>
                </div>
              </div>
            </ScrollZoomIn>

            <ScrollZoomIn delay={0.3}>
              <div style={{
                background: "#ffffff",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxSizing: "border-box",
              }}>
                <div>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,95,64,0.1)", color: "#005f40", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>visibility</span>
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>Hasil Langsung & Transparan</h3>
                  <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.65, margin: 0 }}>
                    Tidak ada biaya tersembunyi. Setelah menyelesaikan tes, Anda langsung mengetahui skor IQ terkalibrasi beserta posisi persentil Anda di antara populasi umum.
                  </p>
                </div>
                <div style={{ marginTop: "24px", paddingTop: "12px", borderTop: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 700, color: "#005f40" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>check_circle</span>
                  <span>Instan Tanpa Syarat Rumit</span>
                </div>
              </div>
            </ScrollZoomIn>

          </div>

        </div>
      </section>

      {/* ==================== BOTTOM CONVERSION HERO / CTA ==================== */}
      <section style={{
        background: "#ffffff",
        borderTop: "1px solid #e2e8f0",
        padding: "80px 0",
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          
          <ScrollZoomIn delay={0.05}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(0,95,64,0.1)",
              color: "#005f40",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>analytics</span>
            </div>

            <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#111827", letterSpacing: "-0.025em", margin: "0 0 12px" }}>
              Cari Tahu Posisi Skor IQ Anda di Antara Populasi
            </h2>

            <p style={{ fontSize: "1rem", color: "#4b5563", margin: "0 auto 32px", lineHeight: 1.7, maxWidth: "560px" }}>
              Lakukan tes penalaran visual singkat selama 12 menit. Dapatkan skor terkalibrasi dan posisi persentil akurat dibandingkan 142.850 peserta lainnya.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <button
                onClick={() => onStartTest("standard")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "48px",
                  padding: "0 28px",
                  borderRadius: "8px",
                  background: "#005f40",
                  color: "#ffffff",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "14px",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(0,95,64,0.25)",
                  fontFamily: "inherit",
                }}
              >
                <span>Mulai Tes IQ Gratis (12 Menit)</span>
              </button>

              {onGoToMethodology && (
                <button
                  onClick={onGoToMethodology}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    height: "48px",
                    padding: "0 24px",
                    borderRadius: "8px",
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    color: "#111827",
                    fontWeight: 700,
                    fontSize: "14px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Pelajari Cara Penilaian
                </button>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "24px", fontSize: "12px", color: "#6b7280", flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "#005f40" }}>check</span>
                Tanpa Registrasi Rumit
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "#005f40" }}>check</span>
                Hasil & Grafik Persentil Instan
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "#005f40" }}>check</span>
                100% Bebas Bahasa
              </span>
            </div>
          </ScrollZoomIn>

        </div>
      </section>

    </div>
  );
};
