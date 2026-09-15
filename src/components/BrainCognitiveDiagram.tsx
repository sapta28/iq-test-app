import React, { useState } from 'react';
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
  nodeX: number; // Anchor point on image canvas (0-560)
  nodeY: number;
  elbowX: number; // Line bend point
  badgeX: number; // End point near badge
  badgeY: number;
  position: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
  badgeOffsetStyle: React.CSSProperties;
  startDotDelay: number;
  lineDelay: number;
  badgeDelay: number;
}

// Sequence: 1. Biru (Blue) -> 2. Kuning (Yellow) -> 3. Merah/Pink (Red) -> 4. Ungu (Purple)
const CALLOUTS: CalloutItem[] = [
  {
    id: 'frontal-lobe',
    title: 'Penalaran Logika',
    subtitle: 'Frontal Lobe (Analisis & Logika)',
    icon: 'psychology',
    color: '#2563eb', // BIRU (Blue)
    accentBg: '#1d4ed8',
    cardBg: 'rgba(239, 246, 255, 0.96)',
    borderColor: '#93c5fd',
    nodeX: 255,
    nodeY: 82,
    elbowX: 205,
    badgeX: 180,
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
    color: '#d97706', // KUNING (Yellow / Gold)
    accentBg: '#b45309',
    cardBg: 'rgba(254, 252, 232, 0.96)',
    borderColor: '#fde68a',
    nodeX: 335,
    nodeY: 82,
    elbowX: 395,
    badgeX: 415,
    badgeY: 62,
    position: 'top-right',
    badgeOffsetStyle: { right: '-24px' }, // Shifted further right to prevent overlapping!
    startDotDelay: 2.1,
    lineDelay: 2.4,
    badgeDelay: 3.5,
  },
  {
    id: 'parietal-lobe',
    title: 'Kecepatan Pemrosesan',
    subtitle: 'Parietal Lobe (Atensi & Efisiensi)',
    icon: 'settings_suggest',
    color: '#db2777', // MERAH / PINK (Red/Pink)
    accentBg: '#be185d',
    cardBg: 'rgba(253, 242, 248, 0.96)',
    borderColor: '#fbcfe8',
    nodeX: 195,
    nodeY: 245,
    elbowX: 165,
    badgeX: 180,
    badgeY: 326,
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
    color: '#7c3aed', // UNGU (Purple)
    accentBg: '#6d28d9',
    cardBg: 'rgba(245, 243, 255, 0.96)',
    borderColor: '#ddd6fe',
    nodeX: 305,
    nodeY: 310,
    elbowX: 370,
    badgeX: 390,
    badgeY: 348,
    position: 'bottom-right',
    badgeOffsetStyle: { right: '8px' },
    startDotDelay: 5.7,
    lineDelay: 6.0,
    badgeDelay: 7.1,
  },
];

export const BrainCognitiveDiagram: React.FC = () => {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const lineDuration = 1.1; // Growing Line Effect duration (seconds)

  return (
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
      {/* Container wrapper for aspect ratio calibration */}
      <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'visible' }}>
        
        {/* Central Brain-Cube Image */}
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

        {/* HTML Callout Badges Layer (Zoom-In from small object to full size) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            pointerEvents: 'none',
            overflow: 'visible',
          }}
        >
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
                {/* Modern Pill Badge Container */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: item.cardBg,
                    border: `1.5px solid ${item.borderColor}`,
                    borderRadius: '9999px',
                    padding: '4px 16px 4px 5px',
                    boxShadow: isHovered
                      ? `0 8px 20px ${item.color}33`
                      : '0 4px 12px rgba(0,0,0,0.06)',
                    backdropFilter: 'blur(8px)',
                    maxWidth: '230px',
                  }}
                >
                  {/* Circle Icon Badge */}
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

                  {/* Title & Subtitle */}
                  <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#1e293b',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        color: item.color,
                        lineHeight: 1.2,
                        marginTop: '1px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SVG Flowchart Lines & Round Anchor/End Nodes (zIndex: 5 - ALWAYS VISIBLE ON TOP) */}
        <svg
          viewBox="0 0 560 420"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 5,
            overflow: 'visible',
          }}
        >
          <defs>
            {/* Fluid Color Gradients */}
            {CALLOUTS.map((item) => (
              <linearGradient
                key={`grad-${item.id}`}
                id={`waterGrad-${item.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={item.color} stopOpacity="0.85" />
                <stop offset="100%" stopColor={item.accentBg} stopOpacity="1" />
              </linearGradient>
            ))}
          </defs>

          {CALLOUTS.map((item) => {
            const isHovered = activeHover === item.id;
            const strokeWidth = isHovered ? 3.5 : 2.5;

            // Polyline path bending OUTWARDS: Start Node -> Outward Elbow -> Badge End Node
            const pathD = `M ${item.nodeX} ${item.nodeY} L ${item.elbowX} ${item.badgeY} L ${item.badgeX} ${item.badgeY}`;

            return (
              <g key={item.id}>
                {/* 1. White Background Shadow Line (Growing Line Effect) */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={strokeWidth + 2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="360"
                  strokeDashoffset="360"
                  style={{
                    animation: `growingLineEffect ${lineDuration}s cubic-bezier(0.25, 1, 0.4, 1) ${item.lineDelay}s forwards`,
                    opacity: 0.95,
                  }}
                />

                {/* 2. Main Growing Line (Garis Tumbuh belok keluar dari titik awal ke titik akhir) */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={`url(#waterGrad-${item.id})`}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="360"
                  strokeDashoffset="360"
                  style={{
                    animation: `growingLineEffect ${lineDuration}s cubic-bezier(0.25, 1, 0.4, 1) ${item.lineDelay}s forwards`,
                    opacity: activeHover && !isHovered ? 0.35 : 1,
                    transition: 'stroke-width 0.3s ease, opacity 0.3s ease',
                  }}
                />

                {/* 3. START POINT: Node Dot Zoom-In (Membesar dari titik kecil) */}
                <g
                  style={{
                    opacity: 0,
                    transformOrigin: `${item.nodeX}px ${item.nodeY}px`,
                    animation: `dotZoomIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${item.startDotDelay}s forwards`,
                  }}
                >
                  <circle
                    cx={item.nodeX}
                    cy={item.nodeY}
                    r={isHovered ? 6.5 : 5}
                    fill="#ffffff"
                    stroke={item.color}
                    strokeWidth="3"
                    style={{
                      filter: `drop-shadow(0 2px 5px ${item.color}44)`,
                      transition: 'all 0.3s ease',
                    }}
                  />
                </g>

                {/* 4. END POINT: Round Circle Dot Zoom-In near Badge (Membesar saat garis tumbuh sampai) */}
                <g
                  style={{
                    opacity: 0,
                    transformOrigin: `${item.badgeX}px ${item.badgeY}px`,
                    animation: `dotZoomIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${item.badgeDelay}s forwards`,
                  }}
                >
                  <circle
                    cx={item.badgeX}
                    cy={item.badgeY}
                    r={isHovered ? 6.5 : 5}
                    fill="#ffffff"
                    stroke={item.color}
                    strokeWidth="3"
                    style={{
                      filter: `drop-shadow(0 2px 5px ${item.color}44)`,
                      transition: 'all 0.3s ease',
                    }}
                  />
                </g>
              </g>
            );
          })}
        </svg>

      </div>
    </div>
  );
};
