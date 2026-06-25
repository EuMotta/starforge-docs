'use client';

import React from 'react';

const DEFAULT_ACCENT = '#00d4ff';
const DEFAULT_CARD_BORDER = 'rgba(0, 212, 255, 0.2)';
const DEFAULT_CARD_BACKGROUND = 'rgba(0, 212, 255, 0.04)';
const DEFAULT_CUT = '9px';

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

type SciFiCardShape = 'octagon' | 'slash-tl' | 'slash-tr';
type CornerPos = keyof typeof CORNER_CLIPS;

interface SciFiCardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly variant?: 'default' | 'ghost' | 'nested';
  readonly shape?: SciFiCardShape;
  readonly cut?: string;
  readonly cornerPos?: Partial<Record<CornerPos, boolean>>;
  readonly accent?: string;
  readonly borderColor?: string;
  readonly background?: string;
}

function resolveClipPath(shapeName: SciFiCardShape, cutValue: string): string {
  if (shapeName === 'octagon') return OCTAGON(cutValue);
  if (shapeName === 'slash-tl') return SLASH_TL(cutValue);
  return SLASH_TR(cutValue);
}

function SciFiCard({
  children,
  className = '',
  variant = 'default',
  shape,
  cut = DEFAULT_CUT,
  cornerPos,
  accent = DEFAULT_ACCENT,
  borderColor = DEFAULT_CARD_BORDER,
  background = DEFAULT_CARD_BACKGROUND
}: SciFiCardProps) {
  const clipPath = shape ? resolveClipPath(shape, cut) : undefined;
  const isNested = variant === 'nested';
  const isGhost = variant === 'ghost';
  const wrapperClassName = isNested
    ? 'group relative border border-white/[0.06] bg-black/20 p-5 transition-[border-color,background,transform] duration-300 hover:-translate-y-px hover:border-white/10 hover:bg-black/30'
    : `relative border p-7 pt-7 transition-[border-color,background] duration-400 ${isGhost ? 'bg-transparent' : ''}`;

  return (
    <div
      className={`${wrapperClassName} ${className}`}
      style={{
        clipPath,
        ...(isNested
          ? {}
          : {
              borderColor: isGhost ? 'rgba(255, 255, 255, 0.1)' : borderColor,
              background: isGhost ? 'transparent' : background
            })
      }}
    >
      {!isNested && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 h-px w-10"
            style={{ background: accent }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 h-10 w-px"
            style={{ background: accent }}
          />
        </>
      )}
      {isNested && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 h-px w-5 opacity-40 transition-opacity duration-300 group-hover:opacity-70"
            style={{
              background: `linear-gradient(to left, ${accent}, transparent)`
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-5 w-px opacity-40 transition-opacity duration-300 group-hover:opacity-70"
            style={{
              background: `linear-gradient(to top, ${accent}, transparent)`
            }}
          />
        </>
      )}
      {cornerPos &&
        Object.entries(cornerPos).map(([pos, show]) =>
          show ? (
            <span
              key={pos}
              aria-hidden="true"
              className="pointer-events-none absolute z-10 h-3 w-3"
              style={{
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
      {children}
    </div>
  );
}

export { SciFiCard };
export type { SciFiCardProps };
