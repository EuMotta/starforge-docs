import { memo } from 'react';

interface BackgroundLinesProps {
  gridOpacity?: number;
  strokeWidth?: number;
}

const BackgroundLines = memo(
  ({ gridOpacity = 0.1, strokeWidth = 0.5 }: BackgroundLinesProps) => {
    const commonLineStyle = {
      stroke: 'oklch(var(--primary))',
      strokeWidth,
      opacity: 0,
      strokeDasharray: '5 5',
      strokeDashoffset: 1000,
      animation: 'grid-draw 2s ease-out forwards'
    };

    const lines = [
      { x1: '0', y1: '20%', x2: '100%', y2: '20%', delay: '0.5s' },
      { x1: '0', y1: '80%', x2: '100%', y2: '80%', delay: '1s' },
      { x1: '20%', y1: '0', x2: '20%', y2: '100%', delay: '1.5s' },
      { x1: '80%', y1: '0', x2: '80%', y2: '100%', delay: '2s' },
      {
        x1: '50%',
        y1: '0',
        x2: '50%',
        y2: '100%',
        delay: '2.5s',
        opacity: 0.05
      },
      { x1: '0', y1: '50%', x2: '100%', y2: '50%', delay: '3s', opacity: 0.05 }
    ];

    return (
      <svg
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke={`rgba(200, 180, 160, ${gridOpacity})`}
              strokeWidth={strokeWidth}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {lines.map((line, index) => (
          <line
            key={`line-${index}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            style={{
              ...commonLineStyle,
              animationDelay: line.delay,
              opacity: line.opacity ?? commonLineStyle.opacity
            }}
          />
        ))}
      </svg>
    );
  }
);
BackgroundLines.displayName = 'BackgroundLines';

const Background = () => (
  <div className="h-full">
    <BackgroundLines />
  </div>
);

export default Background;
