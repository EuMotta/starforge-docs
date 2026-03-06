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
  showValue?: boolean;
}

const StarsRating2 = ({
  rating = 0,
  maxRating = 5,
  size = 'md',
  readonly = false,
  onChange,
  className,
  showValue = true
}: StarsRatingProps) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [tempRating, setTempRating] = useState(0);

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const containerSizeClasses = {
    sm: 'gap-0.5',
    md: 'gap-1',
    lg: 'gap-1.5'
  };

  const handleRatingChange = (newRating: number) => {
    if (readonly) return;

    setCurrentRating(newRating);
    onChange?.(newRating);
  };

  const handleMouseEnter = (starValue: number) => {
    if (readonly) return;
    setTempRating(starValue);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setTempRating(0);
  };

  const activeRating = tempRating || currentRating;

  return (
    <div
      className={cx('flex items-center', containerSizeClasses[size], className)}
    >
      <div className="flex items-center">
        {[...Array(maxRating)].map((_, index) => {
          const starValue = index + 1;
          const isActive = starValue <= activeRating;

          return (
            <button
              key={index}
              type="button"
              disabled={readonly}
              onClick={() => handleRatingChange(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              className={cx(
                'relative transition-transform duration-200',
                readonly ? 'cursor-default' : 'cursor-pointer hover:scale-105',
                !readonly && 'rounded'
              )}
            >
              <Star
                className={cx(
                  sizeClasses[size],
                  'transition-all duration-300',
                  isActive ? 'text-amber-500' : 'text-gray-300',
                  !readonly && 'hover:text-amber-400'
                )}
                fill={isActive ? 'currentColor' : 'none'}
              />
            </button>
          );
        })}
      </div>

      {showValue && (
        <div className="ml-2 flex items-center">
          <span
            className={cx(
              'font-medium',
              size === 'sm'
                ? 'text-xs'
                : size === 'md'
                  ? 'text-sm'
                  : 'text-base',
              activeRating > 0 ? 'text-amber-600' : 'text-muted-foreground'
            )}
          >
            {activeRating.toFixed(1)}
          </span>
        </div>
      )}
    </div>
  );
};

export default StarsRating2;
