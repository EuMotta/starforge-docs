import React from 'react';

import { XCircle, X } from 'lucide-react';

const Alert4 = () => {
  return (
    <div className="flex w-full items-center space-x-3 rounded-lg border border-red-200 bg-red-50 p-4">
      <div className="flex-shrink-0">
        <div className="flex size-10 items-center justify-center rounded-full bg-red-500">
          <XCircle />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-red-800">Error!</h3>
        <p className="mt-1 text-sm text-red-700">
          Something went wrong. Please try again.
        </p>
      </div>
      <button className="text-red-400 transition-colors duration-200 hover:text-red-600">
        <X />
      </button>
    </div>
  );
};

export default Alert4;
