'use client';

import React, { useState } from 'react';

import { cx } from 'class-variance-authority';
import { Star } from 'lucide-react';

interface StarsRatingProps {
  rating?: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

const StarsRating1 = ({
  rating = 0,
  maxRating = 5,
  size = 'md',
  readonly = false,
  onChange,
  className
}: StarsRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleStarClick = (starRating: number) => {
    if (readonly) return;

    setCurrentRating(starRating);
    onChange?.(starRating);
  };

  const handleMouseEnter = (starRating: number) => {
    if (readonly) return;
    setHoveredRating(starRating);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoveredRating(0);
  };

  const displayRating = hoveredRating || currentRating;

  return (
    <div className={cx('flex items-center gap-1', className)}>
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= displayRating;

        return (
          <button
            key={index}
            type="button"
            disabled={readonly}
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            className={cx(
              'transition-all duration-200',
              readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110',
              'rounded'
            )}
          >
            <Star
              className={cx(
                sizeClasses[size],
                'transition-colors duration-200',
                isFilled
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-gray-200 text-gray-300',
                !readonly && 'hover:fill-yellow-400 hover:text-yellow-400'
              )}
            />
          </button>
        );
      })}
      {!readonly && (
        <span className="text-muted-foreground ml-2 text-sm">
          {currentRating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarsRating1;
