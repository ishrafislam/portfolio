import { heroPipeline } from '@/data/site';

const NODE_HEIGHT = 44;
const GAP = 18;
const WIDTH = 260;

/**
 * The QA pipeline as a static inline SVG: Requirements → Quality. Drawn with
 * theme tokens so it follows dark/light, and given a short staggered fade that
 * CSS disables under prefers-reduced-motion.
 */
export function HeroVisual() {
  const height = heroPipeline.length * NODE_HEIGHT + (heroPipeline.length - 1) * GAP;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${height}`}
      className="h-auto w-full max-w-[260px]"
      role="img"
      aria-label={`Quality engineering pipeline: ${heroPipeline.join(', then ')}`}
    >
      {heroPipeline.map((label, index) => {
        const y = index * (NODE_HEIGHT + GAP);
        const isLast = index === heroPipeline.length - 1;

        return (
          <g key={label} className="reveal" data-revealed="true"
             style={{ '--reveal-delay': `${300 + index * 110}ms` } as React.CSSProperties}>
            <rect
              x={0.5}
              y={y + 0.5}
              width={WIDTH - 1}
              height={NODE_HEIGHT}
              rx={8}
              fill={isLast ? 'var(--accent-soft)' : 'var(--surface)'}
              stroke={isLast ? 'var(--accent)' : 'var(--border)'}
            />
            <text
              x={18}
              y={y + NODE_HEIGHT / 2 + 4}
              fill={isLast ? 'var(--accent)' : 'var(--muted)'}
              className="font-mono text-[11px]"
              style={{ fontSize: 11 }}
            >
              {label}
            </text>
            <circle
              cx={WIDTH - 20}
              cy={y + NODE_HEIGHT / 2}
              r={3}
              fill={isLast ? 'var(--accent)' : 'var(--border-strong)'}
            />
            {!isLast ? (
              <line
                x1={WIDTH - 20}
                y1={y + NODE_HEIGHT}
                x2={WIDTH - 20}
                y2={y + NODE_HEIGHT + GAP}
                stroke="var(--border-strong)"
                strokeWidth={1}
                strokeDasharray="3 3"
              />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
