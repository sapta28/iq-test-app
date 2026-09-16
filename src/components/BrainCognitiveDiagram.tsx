import React, { useState, useEffect } from 'react';
import brainCubeImg from '../assets/brain-cube.png';

interface CalloutItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  accentBg: string;
  cardBg: string;
  borderColor: string;
  nodeX: number;
  nodeY: number;
  elbowX: number;
  badgeX: number;
  badgeY: number;
  position: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
  badgeOffsetStyle: React.CSSProperties;
  startDotDelay: number;
  lineDelay: number;
  badgeDelay: number;
}

// Sequence: 1. Biru -> 2. Kuning -> 3. Merah/Pink -> 4. Ungu
const CALLOUTS: CalloutItem[] = [
  {
    id: 'frontal-lobe',
    title: 'Penalaran Logika',
    subtitle: 'Frontal Lobe (Analisis & Logika)',
    icon: 'psychology',
    color: '#2563eb',
    accentBg: '#1d4ed8',
    cardBg: 'rgba(239, 246, 255, 0.96)',
    borderColor: '#93c5fd',
    nodeX: 255,
    nodeY: 82,
    elbowX: 200,
    badgeX: 165,
    badgeY: 62,
    position: 'top-left',
    badgeOffsetStyle: { left: '8px' },
    startDotDelay: 0.3,
    lineDelay: 0.6,
    badgeDelay: 1.7,
  },
  {
    id: 'spatial-vis',
    title: 'Visualisasi Spasial',
    subtitle: 'Spatial Reasoning (Rotasi 3D)',
    icon: 'view_in_ar',
    color: '#d97706',
    accentBg: '#b45309',
    cardBg: 'rgba(254, 252, 232, 0.96)',
    borderColor: '#fde68a',
    nodeX: 345,
    nodeY: 118,
    elbowX: 385,
    badgeX: 420,
    badgeY: 62,
    position: 'top-right',
    badgeOffsetStyle: { right: '-50px' },
    startDotDelay: 2.1,
    lineDelay: 2.4,
    badgeDelay: 3.5,
  },
  {
    id: 'parietal-lobe',
    title: 'Kecepatan Pemrosesan',
    subtitle: 'Parietal Lobe (Atensi & Efisiensi)',
    icon: 'settings_suggest',
    color: '#db2777',
    accentBg: '#be185d',
    cardBg: 'rgba(253, 242, 248, 0.96)',
    borderColor: '#fbcfe8',
    nodeX: 195,
    nodeY: 245,
    elbowX: 165,
    badgeX: 140,
    badgeY: 350,
    position: 'bottom-left',
    badgeOffsetStyle: { left: '8px' },
    startDotDelay: 3.9,
    lineDelay: 4.2,
    badgeDelay: 5.3,
  },
  {
    id: 'problem-solving',
    title: 'Pemecahan Masalah',
    subtitle: 'Problem Solving (Fleksibilitas)',
    icon: 'extension',
    color: '#7c3aed',
    accentBg: '#6d28d9',
    cardBg: 'rgba(245, 243, 255, 0.96)',
    borderColor: '#ddd6fe',
    nodeX: 305,
    nodeY: 300,
    elbowX: 385,
    badgeX: 420,
    badgeY: 350,
    position: 'bottom-right',
    badgeOffsetStyle: { right: '-50px' },
    startDotDelay: 5.7,
    lineDelay: 6.0,
    badgeDelay: 7.1,
  },
];

export const BrainCognitiveDiagram: React.FC = () => {
  const [activeHover, setActiveHover] = useState<string | null>(null);
  
  // FIX UTAMA: Gunakan React State untuk memicu animasi secara permanen (bukan keyframes)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Jeda 50ms memastikan browser me-render posisi awal kosong sebelum ditarik jadi penuh
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const lineDuration = 1.1; // Durasi garis tumbuh

  // Ukuran paten (150px sudah lebih dari cukup untuk menutupi garis terpanjang)
  const PATH_LENGTH = 150; 

  return (
    <>
      <style>
        {`
          /* Kita hanya menyisakan keyframes untuk Dot dan Badge, karena masalah selalu ada pada path garis */
          @keyframes dotZoomIn {
            0% { opacity: 0; transform: scale(0); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes badgeZoomIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          margin: '0 auto',
          padding: '16px 0',
          overflow: 'visible',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'visible' }}>
          
          {/* Gambar Tengah */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '270px',
              height: '270px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            <img
              src={brainCubeImg}
              alt="Brain and Rubik's Cube Kognitif"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.08))',
              }}
            />
          </div>

          {/* HTML Badges Layer */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', overflow: 'visible' }}>
            {CALLOUTS.map((item) => {
              const isHovered = activeHover === item.id;
              const isLeft = item.position.endsWith('left');

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveHover(item.id)}
                  onMouseLeave={() => setActiveHover(null)}
                  style={{
                    position: 'absolute',
                    top: `${item.badgeY - 22}px`,
                    ...item.badgeOffsetStyle,
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                    opacity: 0,
                    transformOrigin: isLeft ? 'right center' : 'left center',
                    animation: `badgeZoomIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${item.badgeDelay}s forwards`,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: item.cardBg,
                      border: `1.5px solid ${item.borderColor}`,
                      borderRadius: '9999px',
                      padding: '4px 16px 4px 5px',
                      boxShadow: isHovered ? `0 8px 20px ${item.color}33` : '0 4px 12px rgba(0,0,0,0.06)',
                      backdropFilter: 'blur(8px)',
                      maxWidth: '230px',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${item.color} 0%, ${item.accentBg} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        boxShadow: `0 2px 6px ${item.color}55`,
                        flexShrink: 0,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        {item.icon}
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '10px', fontWeight: 600, color: item.color, lineHeight: 1.2, marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SVG Garis Utama (Menggunakan State Transisi, BUKAN Keyframes) */}
          <svg viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5, overflow: 'visible' }}>
            <defs>
              {CALLOUTS.map((item) => (
                <linearGradient key={`grad-${item.id}`} id={`waterGrad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={item.color} stopOpacity="0.85" />
                  <stop offset="100%" stopColor={item.accentBg} stopOpacity="1" />
                </linearGradient>
              ))}
            </defs>

            {CALLOUTS.map((item) => {
              const isHovered = activeHover === item.id;
              const strokeWidth = isHovered ? 3.5 : 2.5;
              const pathD = `M ${item.nodeX} ${item.nodeY} L ${item.elbowX} ${item.badgeY} L ${item.badgeX} ${item.badgeY}`;

              return (
                <g key={item.id}>
                  
                  {/* 1. Efek Bayangan Putih */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth={strokeWidth + 2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={PATH_LENGTH}
                    // Jika komponen sudah dimuat, offset jadi 0 (penuh). Browser dijamin mengingat ini.
                    strokeDashoffset={isMounted ? 0 : PATH_LENGTH}
                    style={{
                      transition: `stroke-dashoffset ${lineDuration}s cubic-bezier(0.25, 1, 0.4, 1) ${item.lineDelay}s, stroke-width 0.3s ease`,
                      opacity: 0.95,
                    }}
                  />

                  {/* 2. Garis Warna Bergradien Utama */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={`url(#waterGrad-${item.id})`}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={PATH_LENGTH}
                    strokeDashoffset={isMounted ? 0 : PATH_LENGTH}
                    style={{
                      transition: `stroke-dashoffset ${lineDuration}s cubic-bezier(0.25, 1, 0.4, 1) ${item.lineDelay}s, stroke-width 0.3s ease, opacity 0.3s ease`,
                      opacity: activeHover && !isHovered ? 0.35 : 1,
                    }}
                  />

                  {/* 3. Titik Awal */}
                  <g style={{
                    opacity: 0,
                    transformOrigin: `${item.nodeX}px ${item.nodeY}px`,
                    animation: `dotZoomIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${item.startDotDelay}s forwards`,
                  }}>
                    <circle cx={item.nodeX} cy={item.nodeY} r={isHovered ? 6.5 : 5} fill="#ffffff" stroke={item.color} strokeWidth="3" style={{ filter: `drop-shadow(0 2px 5px ${item.color}44)`, transition: 'all 0.3s ease' }} />
                  </g>

                  {/* 4. Titik Akhir (Dekat Badge) */}
                  <g style={{
                    opacity: 0,
                    transformOrigin: `${item.badgeX}px ${item.badgeY}px`,
                    animation: `dotZoomIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${item.badgeDelay}s forwards`,
                  }}>
                    <circle cx={item.badgeX} cy={item.badgeY} r={isHovered ? 6.5 : 5} fill="#ffffff" stroke={item.color} strokeWidth="3" style={{ filter: `drop-shadow(0 2px 5px ${item.color}44)`, transition: 'all 0.3s ease' }} />
                  </g>
                  
                </g>
              );
            })}
          </svg>

        </div>
      </div>
    </>
  );
};