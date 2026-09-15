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
}

const CALLOUTS: CalloutItem[] = [
  {
    id: 'frontal-lobe',
    title: 'Penalaran Logika',
    subtitle: 'Frontal Lobe (Analisis & Logika)',
    icon: 'psychology',
    color: '#2563eb', // Blue
    accentBg: '#1d4ed8',
    cardBg: 'rgba(239, 246, 255, 0.95)',
    borderColor: '#93c5fd',
    nodeX: 228,
    nodeY: 118,
    elbowX: 195,
    badgeX: 180,
    badgeY: 76,
    position: 'top-left',
  },
  {
    id: 'parietal-lobe',
    title: 'Kecepatan Pemrosesan',
    subtitle: 'Parietal Lobe (Atensi & Efisiensi)',
    icon: 'settings_suggest',
    color: '#db2777', // Pink/Magenta
    accentBg: '#be185d',
    cardBg: 'rgba(253, 242, 248, 0.95)',
    borderColor: '#fbcfe8',
    nodeX: 202,
    nodeY: 272,
    elbowX: 172,
    badgeX: 180,
    badgeY: 308,
    position: 'bottom-left',
  },
  {
    id: 'spatial-vis',
    title: 'Visualisasi Spasial',
    subtitle: 'Spatial Reasoning (Rotasi 3D)',
    icon: 'view_in_ar',
    color: '#d97706', // Gold / Amber
    accentBg: '#b45309',
    cardBg: 'rgba(254, 252, 232, 0.95)',
    borderColor: '#fde68a',
    nodeX: 342,
    nodeY: 118,
    elbowX: 375,
    badgeX: 380,
    badgeY: 76,
    position: 'top-right',
  },
  {
    id: 'problem-solving',
    title: 'Pemecahan Masalah',
    subtitle: 'Problem Solving (Fleksibilitas)',
    icon: 'extension',
    color: '#7c3aed', // Purple
    accentBg: '#6d28d9',
    cardBg: 'rgba(245, 243, 255, 0.95)',
    borderColor: '#ddd6fe',
    nodeX: 322,
    nodeY: 298,
    elbowX: 355,
    badgeX: 380,
    badgeY: 332,
    position: 'bottom-right',
  },
];

export const BrainCognitiveDiagram: React.FC = () => {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '16px 0',
      }}
    >
      {/* Container wrapper for aspect ratio calibration */}
      <div style={{ position: 'relative', width: '100%', height: '420px' }}>
        
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
              transition: 'transform 0.4s ease',
            }}
          />
        </div>

        {/* SVG Flowchart Lines & Anchor Nodes */}
        <svg
          viewBox="0 0 560 420"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        >
          <defs>
            {CALLOUTS.map((item) => (
              <linearGradient
                key={`grad-${item.id}`}
                id={`lineGrad-${item.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={item.color} stopOpacity="0.9" />
                <stop offset="100%" stopColor={item.accentBg} stopOpacity="1" />
              </linearGradient>
            ))}
          </defs>

          {CALLOUTS.map((item) => {
            const isHovered = activeHover === item.id;
            const strokeWidth = isHovered ? 3.5 : 2.5;

            // Draw polyline path from node to elbow to badge
            const pathD = `M ${item.nodeX} ${item.nodeY} L ${item.elbowX} ${item.badgeY} L ${item.badgeX} ${item.badgeY}`;

            return (
              <g key={item.id}>
                {/* Background Shadow Polyline Line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={strokeWidth + 2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={0.9}
                />

                {/* Base Colored Solid Polyline Line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={`url(#lineGrad-${item.id})`}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={activeHover && !isHovered ? 0.4 : 0.95}
                  style={{ transition: 'stroke-width 0.3s ease, opacity 0.3s ease' }}
                />

                {/* Flowing Dash Beam Animation Layer */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={strokeWidth - 0.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={isHovered ? 1 : 0.75}
                  className="animate-line-flow"
                />

                {/* Outer Pulsing Aura Circle at Anchor Node */}
                <circle
                  cx={item.nodeX}
                  cy={item.nodeY}
                  r={isHovered ? 10 : 8}
                  fill={item.color}
                  opacity={0.3}
                  className="animate-node-pulse"
                />

                {/* Inner White Node Circle */}
                <circle
                  cx={item.nodeX}
                  cy={item.nodeY}
                  r={isHovered ? 6 : 4.5}
                  fill="#ffffff"
                  stroke={item.color}
                  strokeWidth="2.5"
                  style={{ transition: 'all 0.3s ease' }}
                />
              </g>
            );
          })}
        </svg>

        {/* HTML Callout Badges Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          {CALLOUTS.map((item, index) => {
            const isHovered = activeHover === item.id;
            const isTop = item.position.startsWith('top');
            const isLeft = item.position.endsWith('left');

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveHover(item.id)}
                onMouseLeave={() => setActiveHover(null)}
                className="animate-badge-pop"
                style={{
                  position: 'absolute',
                  top: isTop ? `${item.badgeY - 26}px` : `${item.badgeY - 26}px`,
                  left: isLeft ? '8px' : 'auto',
                  right: !isLeft ? '8px' : 'auto',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                  animationDelay: `${0.15 * index}s`,
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
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
                    maxWidth: '225px',
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
      </div>
    </div>
  );
};
