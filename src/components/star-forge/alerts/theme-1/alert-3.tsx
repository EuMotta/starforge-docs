import React from 'react';

import { CircleAlert, X } from 'lucide-react';

const Component = () => {
  return (
    <div className="flex w-full items-center space-x-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
      <div className="flex-shrink-0">
        <div className="flex size-10 items-center justify-center rounded-full bg-blue-500">
          <CircleAlert />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-blue-800">Information</h3>
        <p className="mt-1 text-sm text-blue-700">
          New features are now available in your dashboard.
        </p>
      </div>
      <button className="text-blue-400 transition-colors duration-200 hover:text-blue-600">
        <X />
      </button>
    </div>
  );
};

export default Component;
