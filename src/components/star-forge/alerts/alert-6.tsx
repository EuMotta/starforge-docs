import React from 'react';

import { CircleCheck, X } from 'lucide-react';

const Alert6 = () => {
  return (
    <div className="flex w-full items-start space-x-3 rounded-lg border border-green-500 bg-green-500/10 p-4">
      <div className="flex flex-col items-center">
        <div className="flex size-4 rounded-full text-green-500">
          <CircleCheck />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h5 className="text-foreground text-sm font-semibold">Success!</h5>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">
          Your changes have been saved successfully.
        </p>
      </div>
      <div className="flex items-center self-center">
        <button className="text-green-400 transition-colors duration-200 hover:text-green-600">
          <X />
        </button>
      </div>
    </div>
  );
};

export default Alert6;
