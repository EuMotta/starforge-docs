import React from 'react';

import { SciFiBtn } from '@/components/star-forge';

const SciFiButtonPreview = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex flex-wrap gap-4">
        <SciFiBtn>Default</SciFiBtn>
        <SciFiBtn shape="slash-tl">Slash TL</SciFiBtn>
        <SciFiBtn shape="slash-tr">Slash TR</SciFiBtn>
      </div>

      <div className="flex flex-wrap gap-4">
        <SciFiBtn shine={false}>No Shine</SciFiBtn>
        <SciFiBtn scanner>Scanner</SciFiBtn>
        <SciFiBtn bars>Bars</SciFiBtn>
      </div>

      <div className="flex flex-wrap gap-4">
        <SciFiBtn
          cornerPos={{
            'top-left': true,
            'top-right': true,
            'bottom-left': true,
            'bottom-right': true
          }}
        >
          Corners
        </SciFiBtn>
        <SciFiBtn disabled>Disabled</SciFiBtn>
      </div>

      <div className="flex flex-wrap gap-4">
        <SciFiBtn accent="#ef4444" bg="rgba(0,0,0,0.9)">
          Custom Accent
        </SciFiBtn>
        <SciFiBtn href="/docs">Internal Link</SciFiBtn>
        <SciFiBtn href="https://github.com">External</SciFiBtn>
      </div>
    </div>
  );
};

export default SciFiButtonPreview;
