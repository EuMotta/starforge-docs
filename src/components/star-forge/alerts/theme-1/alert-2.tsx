import React from 'react';

import { TriangleAlert, X } from 'lucide-react';

const Component = () => {
  return (
    <div className="flex w-full items-center space-x-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
      <div className="flex-shrink-0">
        <div className="flex size-10 items-center justify-center rounded-full bg-yellow-500">
          <TriangleAlert />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-yellow-800">Warning!</h3>
        <p className="mt-1 text-sm text-yellow-700">
          Please review your information.
        </p>
      </div>
      <button className="text-yellow-400 transition-colors duration-200 hover:text-yellow-600">
        <X />
      </button>
    </div>
  );
};

export default Component;
