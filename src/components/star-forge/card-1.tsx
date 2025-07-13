'use client';
import React from 'react';

import { Star } from 'lucide-react';

import { Button } from '../ui/button';

export const Component = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="from-primary-400 to-primary-600 relative h-48 bg-gradient-to-br">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: 'url(/ogimage.png)' }}
        ></div>
        <div className="absolute right-4 bottom-4 left-4">
          <h3 className="text-xl font-semibold text-white">Basic Card</h3>
          <p className="text-sm text-white opacity-90">
            Simple and clean design
          </p>
        </div>
      </div>
      <div className="bg-white p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">Components</h3>
        <p className="mb-4 text-gray-600">
          A collection of customizable card for StarForge.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-500" />
            <span className="text-muted text-sm">4.8</span>
          </div>
          <Button>View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default Component;
