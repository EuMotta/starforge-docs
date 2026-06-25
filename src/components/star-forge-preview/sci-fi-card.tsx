import React from 'react';

import { SciFiCard } from '@/components/star-forge';

const SciFiCardPreview = () => {
  return (
    <div className="flex flex-col gap-6">
      <SciFiCard>
        <h3 className="mb-2 text-lg font-semibold">Default Card</h3>
        <p className="text-sm opacity-80">
          Showcase card with top-left accent lines and configurable clip-path
          shape.
        </p>
      </SciFiCard>

      <SciFiCard variant="ghost">
        <h3 className="mb-2 text-lg font-semibold">Ghost Card</h3>
        <p className="text-sm opacity-80">
          Transparent background with subtle border.
        </p>
      </SciFiCard>

      <SciFiCard variant="nested">
        <h3 className="mb-2 text-lg font-semibold">Nested Card</h3>
        <p className="text-sm opacity-80">
          Inner card with hover lift and gradient accent lines.
        </p>
      </SciFiCard>

      <div className="grid gap-6 md:grid-cols-2">
        <SciFiCard shape="octagon">
          <h3 className="mb-2 text-lg font-semibold">Octagon</h3>
          <p className="text-sm opacity-80">Clipped octagon shape.</p>
        </SciFiCard>

        <SciFiCard
          shape="slash-tl"
          cornerPos={{
            'top-left': true,
            'bottom-right': true
          }}
          accent="#f59e0b"
        >
          <h3 className="mb-2 text-lg font-semibold">Slash + Corners</h3>
          <p className="text-sm opacity-80">Custom accent color and corners.</p>
        </SciFiCard>
      </div>
    </div>
  );
};

export default SciFiCardPreview;
