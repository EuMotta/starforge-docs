'use client';

import { useState } from 'react';

import { StarsRating2 } from '@/components/star-forge';

export default function StarsRating2Preview() {
  const [rating, setRating] = useState(4.2);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Interactive Rating</h3>
        <StarsRating2
          rating={rating}
          onChange={setRating}
          size="lg"
          showValue
        />
        <p className="text-muted-foreground mt-2 text-sm">
          Current rating: {rating.toFixed(1)}
        </p>
      </div>

      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Read-only Rating</h3>
        <StarsRating2 rating={3.8} readonly size="md" showValue />
      </div>

      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Without Value Display</h3>
        <div className="flex justify-center">
          <StarsRating2
            rating={2.5}
            onChange={setRating}
            size="sm"
            showValue={false}
          />
        </div>
      </div>
    </div>
  );
}
