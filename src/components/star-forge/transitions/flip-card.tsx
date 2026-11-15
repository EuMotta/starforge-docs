'use client';

import React from 'react';

import { cn } from '@/lib/utils';

type FlipAxis = 'x' | 'y';

interface FlipCardProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  front: React.ReactNode;
  back: React.ReactNode;
  flipped?: boolean;
  defaultFlipped?: boolean;
  onFlippedChange?: (flipped: boolean) => void;
  axis?: FlipAxis;
}

function FlipCard({
  front,
  back,
  flipped,
  defaultFlipped = false,
  onFlippedChange,
  axis = 'y',
  className,
  onClick,
  onKeyDown,
  ...props
}: FlipCardProps) {
  const isControlled = flipped !== undefined;
  const [internalFlipped, setInternalFlipped] = React.useState(defaultFlipped);
  const isFlipped = isControlled ? flipped : internalFlipped;

  const toggle = () => {
    if (!isControlled) setInternalFlipped((value) => !value);
    onFlippedChange?.(!isFlipped);
  };

  const rotateClass =
    axis === 'y'
      ? '[transform:rotateY(180deg)]'
      : '[transform:rotateX(180deg)]';

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      className={cn(
        'cursor-pointer select-none [perspective:1200px] focus-visible:outline-2 focus-visible:outline-offset-2',
        className
      )}
      onClick={(event) => {
        toggle();
        onClick?.(event);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggle();
        }
        onKeyDown?.(event);
      }}
      {...props}
    >
      <div
        className={cn(
          'relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]',
          isFlipped && rotateClass
        )}
      >
        <div className="h-full w-full [backface-visibility:hidden]">
          {front}
        </div>
        <div
          className={cn(
            'absolute inset-0 [backface-visibility:hidden]',
            rotateClass
          )}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
export type { FlipAxis, FlipCardProps };
