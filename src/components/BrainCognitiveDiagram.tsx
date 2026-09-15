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
  drawDelay: number; // Delay in seconds for fluid draw start
}

const CALLOUTS: CalloutItem[] = [
  {
    id: 'frontal-lobe',
    title: 'Penalaran Logika',
    subtitle: 'Frontal Lobe (Analisis & Logika)',
    icon: 'psychology',
    color: '#2563eb', // Blue
    accentBg: '#1d4ed8',
    cardBg: 'rgba(239, 246, 255, 0.96)',
    borderColor: '#93c5fd',
    nodeX: 228,
    nodeY: 118,
    elbowX: 195,
    badgeX: 180,
    badgeY: 76,
    position: 'top-left',
    drawDelay: 0.2, // 1st line starts at 0.2s
  },
  {
    id: 'spatial-vis',
    title: 'Visualisasi Spasial',
    subtitle: 'Spatial Reasoning (Rotasi 3D)',
    icon: 'view_in_ar',
    color: '#d97706', // Amber / Gold
    accentBg: '#b45309',
    cardBg: 'rgba(254, 252, 232, 0.96)',
    borderColor: '#fde68a',
    nodeX: 342,
    nodeY: 118,
    elbowX: 375,
    badgeX: 380,
    badgeY: 76,
    position: 'top-right',
    drawDelay: 1.0, // 2nd line starts at 1.0s
  },
  {
    id: 'parietal-lobe',
    title: 'Kecepatan Pemrosesan',
    subtitle: 'Parietal Lobe (Atensi & Efisiensi)',
    icon: 'settings_suggest',
    color: '#db2777', // Pink/Magenta
    accentBg: '#be185d',
    cardBg: 'rgba(253, 242, 248, 0.96)',
    borderColor: '#fbcfe8',
    nodeX: 202,
    nodeY: 272,
    elbowX: 172,
    badgeX: 180,
    badgeY: 308,
    position: 'bottom-left',
    drawDelay: 1.8, // 3rd line starts at 1.8s
  },
  {
    id: 'problem-solving',
    title: 'Pemecahan Masalah',
    subtitle: 'Problem Solving (Fleksibilitas)',
    icon: 'extension',
    color: '#7c3aed', // Purple
    accentBg: '#6d28d9',
    cardBg: 'rgba(245, 243, 255, 0.96)',
    borderColor: '#ddd6fe',
    nodeX: 322,
    nodeY: 298,
    elbowX: 355,
    badgeX: 380,
    badgeY: 332,
    position: 'bottom-right',
    drawDelay: 2.6, // 4th line starts at 2.6s
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
            }}
          />
        </div>

        {/* SVG Flowchart Water Arrows & Anchor Nodes */}
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

            {/* Arrowhead Markers Pointing Towards Badges */}
            {CALLOUTS.map((item) => {
              const isLeft = item.position.endsWith('left');
              return (
                <marker
                  key={`arrow-${item.id}`}
                  id={`arrow-${item.id}`}
                  viewBox="0 0 10 10"
                  refX={isLeft ? '2' : '8'}
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto"
                >
                  <path
                    d={isLeft ? "M 10 1 L 2 5 L 10 9 Z" : "M 0 1 L 8 5 L 0 9 Z"}
                    fill={item.color}
                  />
                </marker>
              );
            })}
          </defs>

          {CALLOUTS.map((item) => {
            const isHovered = activeHover === item.id;
            const strokeWidth = isHovered ? 3.5 : 2.5;

            // Polyline path: Node -> Elbow -> Badge
            const pathD = `M ${item.nodeX} ${item.nodeY} L ${item.elbowX} ${item.badgeY} L ${item.badgeX} ${item.badgeY}`;
            const flowDuration = 1.1; // Smooth fluid flow duration (seconds)

            return (
              <g key={item.id}>
                {/* 1. White Background Fluid Shadow Path */}
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
                    animation: `waterFlowStream ${flowDuration}s cubic-bezier(0.35, 0, 0.25, 1) ${item.drawDelay}s forwards`,
                    opacity: 0.95,
                  }}
                />

                {/* 2. Fluid Water Stream Arrow Line (Flows out like water) */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={`url(#waterGrad-${item.id})`}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="360"
                  strokeDashoffset="360"
                  markerEnd={`url(#arrow-${item.id})`}
                  style={{
                    animation: `waterFlowStream ${flowDuration}s cubic-bezier(0.35, 0, 0.25, 1) ${item.drawDelay}s forwards`,
                    opacity: activeHover && !isHovered ? 0.35 : 1,
                    transition: 'stroke-width 0.3s ease, opacity 0.3s ease',
                  }}
                />

                {/* 3. Static Clean White Anchor Node Dot on Brain/Cube (NO pulsing bullets!) */}
                <g style={{ opacity: 0, animation: `nodeAppear 0.4s ease-out ${item.drawDelay}s forwards` }}>
                  {/* Clean Static White Anchor Circle with colored stroke */}
                  <circle
                    cx={item.nodeX}
                    cy={item.nodeY}
                    r={isHovered ? 6 : 5}
                    fill="#ffffff"
                    stroke={item.color}
                    strokeWidth="3"
                    style={{
                      filter: `drop-shadow(0 2px 4px ${item.color}44)`,
                      transition: 'all 0.3s ease',
                    }}
                  />
                </g>
              </g>
            );
          })}
        </svg>

        {/* HTML Callout Badges Layer (Appears ONE-SHOT right after water arrow reaches endpoint) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          {CALLOUTS.map((item) => {
            const isHovered = activeHover === item.id;
            const isTop = item.position.startsWith('top');
            const isLeft = item.position.endsWith('left');
            const badgeAppearDelay = item.drawDelay + 0.95; // Triggers right when water stream arrives

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveHover(item.id)}
                onMouseLeave={() => setActiveHover(null)}
                style={{
                  position: 'absolute',
                  top: isTop ? `${item.badgeY - 26}px` : `${item.badgeY - 26}px`,
                  left: isLeft ? '8px' : 'auto',
                  right: !isLeft ? '8px' : 'auto',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                  opacity: 0,
                  animation: `badgePopOneShot 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${badgeAppearDelay}s forwards`,
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
      </div>
    </div>
  );
};
