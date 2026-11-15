'use client';

import React from 'react';

import { FlipCard } from '@/components/star-forge';

const FlipCardPreview = () => {
  return (
    <FlipCard
      className="h-48 w-full max-w-xs"
      front={
        <div className="bg-popover text-popover-foreground flex h-full w-full flex-col justify-between rounded-xl border p-5 shadow-sm">
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            Star Forge
          </span>
          <span className="font-mono text-lg tracking-widest">
            4242 4242 4242 4242
          </span>
          <div className="flex justify-between text-sm">
            <span>J. DOE</span>
            <span>12/29</span>
          </div>
        </div>
      }
      back={
        <div className="bg-popover text-popover-foreground flex h-full w-full flex-col rounded-xl border shadow-sm">
          <div className="bg-foreground/80 mt-5 h-8 w-full" />
          <div className="flex flex-1 items-center justify-end p-5">
            <span className="bg-muted rounded px-3 py-1 font-mono text-sm">
              CVC 123
            </span>
          </div>
        </div>
      }
    />
  );
};

export default FlipCardPreview;
