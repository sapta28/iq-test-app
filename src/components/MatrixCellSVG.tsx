import React from 'react';
import { SVGCellSpec } from '../types';

interface MatrixCellSVGProps {
  spec: SVGCellSpec | null;
  isQuestionMark?: boolean;
  size?: number;
  className?: string;
}

export const MatrixCellSVG: React.FC<MatrixCellSVGProps> = ({
  spec,
  isQuestionMark = false,
  size = 100,
  className = '',
}) => {
  if (isQuestionMark || !spec) {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full rounded-xl transition-all duration-300 ${className}`}
        style={{ width: '100%', height: '100%' }}
      >
        <rect x="2" y="2" width="96" height="96" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fontSize="36"
          fontWeight="bold"
          fill="#818CF8"
          className="animate-pulse"
        >
          ?
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-full h-full rounded-xl transition-all duration-200 ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Background card */}
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx="12"
        fill={spec.background || '#1E293B'}
        stroke="#334155"
        strokeWidth="2"
      />

      {/* Render shapes */}
      {spec.shapes &&
        spec.shapes.map((shape, idx) => {
          const stroke = shape.stroke || '#818CF8';
          const fill = shape.fill || 'none';
          const strokeWidth = shape.strokeWidth || 3;
          const transform = shape.rotation ? `rotate(${shape.rotation} 50 50)` : undefined;

          switch (shape.type) {
            case 'circle':
              return (
                <circle
                  key={idx}
                  cx={shape.cx ?? 50}
                  cy={shape.cy ?? 50}
                  r={shape.r ?? 25}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  transform={transform}
                />
              );
            case 'rect':
              return (
                <rect
                  key={idx}
                  x={shape.x ?? 25}
                  y={shape.y ?? 25}
                  width={shape.width ?? 50}
                  height={shape.height ?? 50}
                  rx={4}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  transform={transform}
                />
              );
            case 'line':
              return (
                <line
                  key={idx}
                  x1={shape.x1 ?? 15}
                  y1={shape.y1 ?? 50}
                  x2={shape.x2 ?? 85}
                  y2={shape.y2 ?? 50}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  transform={transform}
                />
              );
            case 'cross':
              return (
                <g key={idx} transform={transform}>
                  <line x1="20" y1="50" x2="80" y2="50" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
                </g>
              );
            case 'polygon':
              return (
                <polygon
                  key={idx}
                  points={shape.points || '50,15 85,80 15,80'}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeJoin="round"
                  transform={transform}
                />
              );
            case 'dots': {
              const count = shape.count || 1;
              const dotRadius = shape.r || 5;
              const dots = [];
              if (count === 1) {
                dots.push({ x: 50, y: 50 });
              } else if (count === 2) {
                dots.push({ x: 35, y: 50 }, { x: 65, y: 50 });
              } else if (count === 3) {
                dots.push({ x: 30, y: 50 }, { x: 50, y: 50 }, { x: 70, y: 50 });
              } else if (count === 4) {
                dots.push({ x: 35, y: 35 }, { x: 65, y: 35 }, { x: 35, y: 65 }, { x: 65, y: 65 });
              } else if (count === 5) {
                dots.push({ x: 30, y: 30 }, { x: 70, y: 30 }, { x: 50, y: 50 }, { x: 30, y: 70 }, { x: 70, y: 70 });
              }
              return (
                <g key={idx} transform={transform}>
                  {dots.map((d, dIdx) => (
                    <circle key={dIdx} cx={d.x} cy={d.y} r={dotRadius} fill={stroke} />
                  ))}
                </g>
              );
            }
            case 'star':
              return (
                <polygon
                  key={idx}
                  points="50,15 61,38 85,38 66,54 73,78 50,63 27,78 34,54 15,38 39,38"
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeJoin="round"
                  transform={transform}
                />
              );
            case 'grid_lines':
              return (
                <g key={idx} transform={transform}>
                  <line x1="33" y1="15" x2="33" y2="85" stroke={stroke} strokeWidth={strokeWidth} opacity="0.6" />
                  <line x1="66" y1="15" x2="66" y2="85" stroke={stroke} strokeWidth={strokeWidth} opacity="0.6" />
                  <line x1="15" y1="33" x2="85" y2="33" stroke={stroke} strokeWidth={strokeWidth} opacity="0.6" />
                  <line x1="15" y1="66" x2="85" y2="66" stroke={stroke} strokeWidth={strokeWidth} opacity="0.6" />
                </g>
              );
            default:
              return null;
          }
        })}
    </svg>
  );
};
