import React from 'react';

import { TriangleAlert, X } from 'lucide-react';

const Alert7 = () => {
  return (
    <div className="flex w-full items-start space-x-3 rounded-lg border border-yellow-500 bg-yellow-500/10 p-4">
      <div className="flex flex-col items-center">
        <div className="flex size-4 rounded-full text-yellow-500">
          <TriangleAlert />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h5 className="text-foreground text-sm font-semibold">Warning!</h5>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">
          Please review your information.
        </p>
      </div>
      <div className="flex items-center self-center">
        <button className="text-yellow-400 transition-colors duration-200 hover:text-yellow-600">
          <X />
        </button>
      </div>
    </div>
  );
};

export default Alert7;
