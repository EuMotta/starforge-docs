'use client';

import React from 'react';

import { CircleReveal } from '@/components/star-forge';
import type { CircleRevealOrigin } from '@/components/star-forge/transitions/circle-reveal';

const CircleRevealPreview = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [origin, setOrigin] = React.useState<CircleRevealOrigin>({
    x: '50%',
    y: '50%'
  });

  const revealFrom = (event: React.MouseEvent<HTMLButtonElement>) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (bounds) {
      setOrigin({
        x: `${event.clientX - bounds.left}px`,
        y: `${event.clientY - bounds.top}px`
      });
    }
    setOpen(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-72 w-full max-w-sm overflow-hidden rounded-xl border"
    >
      <div className="flex h-full flex-col gap-3 p-4">
        <span className="font-semibold">Explore</span>
        <div className="bg-muted h-20 rounded-lg" />
        <div className="bg-muted/60 h-20 rounded-lg" />
        <button
          type="button"
          onClick={revealFrom}
          className="bg-foreground text-background mt-auto rounded-md py-2 text-sm"
        >
          Open detail
        </button>
      </div>

      <CircleReveal open={open} origin={origin} className="bg-background">
        <div className="flex h-full flex-col">
          <div className="bg-primary/80 h-32" />
          <div className="flex flex-1 flex-col gap-3 p-4">
            <span className="font-semibold">Detail</span>
            <div className="bg-muted h-2 w-3/4 rounded" />
            <div className="bg-muted h-2 w-full rounded" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="bg-foreground text-background mt-auto rounded-md py-2 text-sm"
            >
              Back
            </button>
          </div>
        </div>
      </CircleReveal>
    </div>
  );
};

export default CircleRevealPreview;
