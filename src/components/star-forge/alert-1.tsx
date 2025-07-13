import React from 'react';

import { Check, X } from 'lucide-react';

const Component = () => {
  return (
    <div className="flex w-full items-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-4">
      <div className="flex-shrink-0">
        <div className="flex size-10 items-center justify-center rounded-full bg-green-500">
          <Check />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-green-800">Success!</h3>
        <p className="mt-1 text-sm text-green-700">
          Your changes have been saved successfully.
        </p>
      </div>
      <button className="text-green-400 transition-colors duration-200 hover:text-green-600">
        <X />
      </button>
    </div>
  );
};

export default Component;
