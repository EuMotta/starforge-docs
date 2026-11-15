'use client';

import React from 'react';

import { motion, type HTMLMotionProps } from 'framer-motion';

import { cn } from '@/lib/utils';

interface CircleRevealOrigin {
  x: string;
  y: string;
}

interface CircleRevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  open: boolean;
  origin?: CircleRevealOrigin;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

const DEFAULT_ORIGIN: CircleRevealOrigin = { x: '50%', y: '50%' };
const REVEAL_RADIUS_PERCENT = 150;

function CircleReveal({
  open,
  origin = DEFAULT_ORIGIN,
  duration = 0.5,
  className,
  style,
  children,
  ...props
}: CircleRevealProps) {
  const clipPath = `circle(${open ? REVEAL_RADIUS_PERCENT : 0}% at ${origin.x} ${origin.y})`;

  return (
    <motion.div
      aria-hidden={!open}
      inert={!open}
      initial={false}
      animate={{ clipPath }}
      transition={{ duration, ease: 'easeInOut' }}
      style={{ pointerEvents: open ? 'auto' : 'none', ...style }}
      className={cn('absolute inset-0', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default CircleReveal;
export type { CircleRevealOrigin, CircleRevealProps };
