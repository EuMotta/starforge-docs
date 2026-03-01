import React from 'react';

import { CircleAlert, X } from 'lucide-react';

const Alert8 = () => {
  return (
    <div className="flex w-full items-start space-x-3 rounded-lg border border-blue-500 bg-blue-500/10 p-4">
      <div className="flex flex-col items-center">
        <div className="flex size-4 rounded-full text-blue-500">
          <CircleAlert />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h5 className="text-foreground text-sm font-semibold">Information</h5>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">
          New features are now available in your dashboard.
        </p>
      </div>
      <div className="flex items-center self-center">
        <button className="text-blue-400 transition-colors duration-200 hover:text-blue-600">
          <X />
        </button>
      </div>
    </div>
  );
};

export default Alert8;
