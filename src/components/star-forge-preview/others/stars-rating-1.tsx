'use client';

import { useState } from 'react';

import { StarsRating1 } from '@/components/star-forge';

export default function StarsRating1Preview() {
  const [rating, setRating] = useState(3.5);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Interactive Rating</h3>
        <StarsRating1 rating={rating} onChange={setRating} size="lg" />
        <p className="text-muted-foreground mt-2 text-sm">
          Current rating: {rating.toFixed(1)}
        </p>
      </div>

      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Read-only Rating</h3>
        <StarsRating1 rating={4.2} readonly size="md" />
        <p className="text-muted-foreground mt-2 text-sm">Fixed rating: 4.2</p>
      </div>

      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Small Size</h3>
        <StarsRating1 rating={2.5} onChange={setRating} size="sm" />
      </div>
    </div>
  );
}
