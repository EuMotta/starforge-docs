'use client';

import Link from 'next/link';
import React from 'react';

const DEFAULT_ACCENT = '#00d4ff';
const DEFAULT_BACKGROUND = '#0d1117';
const DEFAULT_CUT = '9px';
const DEFAULT_BORDER_WIDTH = '1px';
const EXTERNAL_URL_PREFIX = 'http';
const PROTOCOL_RELATIVE_URL_PREFIX = '//';

const OCTAGON = (cut: string): string =>
  `polygon(${cut} 0%, calc(100% - ${cut}) 0%, 100% ${cut}, 100% calc(100% - ${cut}), calc(100% - ${cut}) 100%, ${cut} 100%, 0% calc(100% - ${cut}), 0% ${cut})`;

const SLASH_TL = (cut: string): string =>
  `polygon(${cut} 0, 100% 0, 100% calc(100% - ${cut}), calc(100% - ${cut}) 100%, 0 100%, 0 ${cut})`;

const SLASH_TR = (cut: string): string =>
  `polygon(calc(100% - ${cut}) 0, 100% ${cut}, 100% 100%, ${cut} 100%, 0 calc(100% - ${cut}), 0 0)`;

const CORNER_CLIPS = {
  'top-left': 'polygon(0 0, 0% 100%, 100% 0)',
  'top-right': 'polygon(100% 0, 0 0, 100% 100%)',
  'bottom-left': 'polygon(0 0, 100% 100%, 0 100%)',
  'bottom-right': 'polygon(100% 0, 100% 100%, 0 100%)'
} as const;

export type SciFiBtnShape = 'octagon' | 'slash-tl' | 'slash-tr';
type CornerPos = keyof typeof CORNER_CLIPS;
type SciFiButtonStyle = React.CSSProperties &
  Record<
    '--btn-shape' | '--btn-cut' | '--btn-border' | '--btn-accent' | '--btn-bg',
    string
  >;

interface SciFiBtnProps {
  readonly children: React.ReactNode;
  readonly shape?: SciFiBtnShape;
  readonly cut?: string;
  readonly cornerPos?: Partial<Record<CornerPos, boolean>>;
  readonly bars?: boolean;
  readonly scanner?: boolean;
  readonly shine?: boolean;
  readonly disabled?: boolean;
  readonly accent?: string;
  readonly bg?: string;
  readonly borderPx?: string;
  readonly borderHover?: boolean;
  readonly className?: string;
  readonly onClick?: () => void;
  readonly href?: string;
}

function resolveClipPath(shapeName: SciFiBtnShape, cutValue: string): string {
  if (shapeName === 'octagon') return OCTAGON(cutValue);
  if (shapeName === 'slash-tl') return SLASH_TL(cutValue);
  return SLASH_TR(cutValue);
}

function SciFiBtn({
  children,
  shape = 'octagon',
  cut = DEFAULT_CUT,
  cornerPos = undefined,
  bars = false,
  scanner = false,
  shine = true,
  disabled = false,
  accent = DEFAULT_ACCENT,
  bg = DEFAULT_BACKGROUND,
  borderPx = DEFAULT_BORDER_WIDTH,
  borderHover = false,
  className = '',
  onClick = undefined,
  href = undefined
}: SciFiBtnProps) {
  const clipPath = resolveClipPath(shape, cut);
  const accentOpacity = borderHover ? 0 : 1;
  const buttonStyle: SciFiButtonStyle = {
    '--btn-shape': clipPath,
    '--btn-cut': cut,
    '--btn-border': borderPx,
    '--btn-accent': accent,
    '--btn-bg': bg
  };

  const content = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          clipPath,
          opacity: accentOpacity,
          background: accent,
          boxShadow: `inset 0 0 25px -10px ${accent}`
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          inset: borderPx,
          clipPath,
          background: bg,
          boxShadow: `inset 0 0 20px -10px color-mix(in srgb, ${accent} 40%, transparent)`
        }}
      />
      {shine && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath }}
        >
          <span
            className="absolute"
            style={{
              top: 0,
              bottom: 0,
              left: '-60px',
              width: '35px',
              background:
                'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'skewX(-15deg)',
              animation: 'shine 4s ease-in-out infinite'
            }}
          />
        </span>
      )}
      {scanner && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath }}
        >
          <span
            className="absolute right-0 left-0 h-px opacity-50"
            style={{
              top: '-2px',
              background: accent,
              animation: 'sf-scan 2.5s linear infinite'
            }}
          />
        </span>
      )}
      {bars && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-[-1px] z-10 h-[35%] w-[3px] -translate-y-1/2"
            style={{ background: accent }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-[-1px] z-10 h-[35%] w-[3px] -translate-y-1/2"
            style={{ background: accent }}
          />
        </>
      )}
      {cornerPos &&
        Object.entries(cornerPos).map(([pos, show]) =>
          show ? (
            <span
              key={pos}
              aria-hidden="true"
              className="pointer-events-none absolute z-10"
              style={{
                width: `calc(${cut} - 2px)`,
                height: `calc(${cut} - 2px)`,
                background: accent,
                clipPath: CORNER_CLIPS[pos as CornerPos],
                top: pos.includes('top') ? -1 : 'auto',
                bottom: pos.includes('bottom') ? -1 : 'auto',
                left: pos.includes('left') ? -1 : 'auto',
                right: pos.includes('right') ? -1 : 'auto'
              }}
            />
          ) : null
        )}
      <span className="relative z-20 inline-flex items-center gap-2 whitespace-nowrap">
        {children}
      </span>
    </>
  );

  const baseClasses = `group relative inline-flex items-center gap-2 border-0 bg-transparent px-[22px] py-[10px] font-mono text-[13px] tracking-[0.5px] text-white no-underline [word-spacing:3px] select-none transition-[filter,transform] duration-300 hover:-translate-y-px hover:brightness-125 active:translate-y-0 active:brightness-110 disabled:pointer-events-none disabled:opacity-40 ${className}`;

  const element = href ? (
    href.startsWith(EXTERNAL_URL_PREFIX) ||
    href.startsWith(PROTOCOL_RELATIVE_URL_PREFIX) ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        style={buttonStyle}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={baseClasses} style={buttonStyle}>
        {content}
      </Link>
    )
  ) : (
    <button
      type="button"
      className={baseClasses}
      style={buttonStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );

  return (
    <>
      {element}
      <style>{`
        @keyframes sf-scan {
          0% { top: -2px; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: calc(100% + 2px); opacity: 0; }
        }
        @keyframes shine {
          0%, 60% { left: -60px; }
          100% { left: calc(100% + 60px); }
        }
      `}</style>
    </>
  );
}

export { SciFiBtn };
export type { SciFiBtnProps };
