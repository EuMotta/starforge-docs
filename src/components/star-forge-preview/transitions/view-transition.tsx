'use client';

import React from 'react';

import { ViewTransition } from '@/components/star-forge';
import type { ViewTransitionVariant } from '@/components/star-forge/transitions/view-transition';

const VARIANTS: ViewTransitionVariant[] = ['slide', 'fade', 'zoom'];

interface VariantDemoProps {
  variant: ViewTransitionVariant;
}

function VariantDemo({ variant }: VariantDemoProps) {
  const [detail, setDetail] = React.useState(false);

  return (
    <div className="flex w-full flex-col gap-3">
      <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
        {variant}
      </span>
      <div className="h-64 w-full overflow-hidden rounded-xl border">
        <ViewTransition
          transitionKey={detail ? 'detail' : 'explore'}
          variant={variant}
          direction={detail ? 1 : -1}
        >
          {detail ? (
            <div className="flex h-full flex-col">
              <div className="bg-primary/80 h-24" />
              <div className="flex flex-1 flex-col gap-3 p-4">
                <span className="font-semibold">Detail</span>
                <div className="bg-muted h-2 w-3/4 rounded" />
                <div className="bg-muted h-2 w-full rounded" />
                <div className="bg-muted h-2 w-5/6 rounded" />
                <button
                  type="button"
                  onClick={() => setDetail(false)}
                  className="bg-foreground text-background mt-auto rounded-md py-2 text-sm"
                >
                  Back
                </button>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col gap-3 p-4">
              <span className="font-semibold">Explore</span>
              <button
                type="button"
                onClick={() => setDetail(true)}
                className="bg-muted flex h-20 items-center justify-center rounded-lg text-sm"
              >
                Open detail
              </button>
              <div className="bg-muted/60 h-20 rounded-lg" />
              <div className="bg-muted/60 h-20 rounded-lg" />
            </div>
          )}
        </ViewTransition>
      </div>
    </div>
  );
}

const ViewTransitionPreview = () => {
  return (
    <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
      {VARIANTS.map((variant) => (
        <VariantDemo key={variant} variant={variant} />
      ))}
    </div>
  );
};

export default ViewTransitionPreview;
