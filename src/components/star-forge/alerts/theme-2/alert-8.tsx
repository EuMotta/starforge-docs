import React from 'react';

import { XCircle, X } from 'lucide-react';

const Component = () => {
  return (
    <div className="flex w-full items-start space-x-3 rounded-lg border border-red-500 bg-red-500/10 p-4">
      <div className="flex flex-col items-center">
        <div className="flex size-4 rounded-full text-red-500">
          <XCircle />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h5 className="text-foreground text-sm font-semibold">Error!</h5>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">
          Something went wrong. Please try again.
        </p>
      </div>
      <div className="flex items-center self-center">
        <button className="text-red-400 transition-colors duration-200 hover:text-red-600">
          <X />
        </button>
      </div>
    </div>
  );
};

export default Component;
