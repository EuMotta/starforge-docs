'use client';

import React from 'react';

import { AnimatePresence, motion, type HTMLMotionProps } from 'framer-motion';

import { cn } from '@/lib/utils';

type ViewTransitionVariant = 'slide' | 'fade' | 'zoom';

const SLIDE_OFFSET_PX = 48;
const ZOOM_EXIT_SCALE = 1.05;
const ZOOM_ENTER_SCALE = 0.92;

interface ViewTransitionProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  transitionKey: React.Key;
  variant?: ViewTransitionVariant;
  direction?: 1 | -1;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

function ViewTransition({
  transitionKey,
  variant = 'slide',
  direction = 1,
  duration = 0.25,
  className,
  children,
  ...props
}: ViewTransitionProps) {
  const states = {
    slide: {
      initial: { x: SLIDE_OFFSET_PX * direction, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -SLIDE_OFFSET_PX * direction, opacity: 0 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    zoom: {
      initial: { scale: ZOOM_ENTER_SCALE, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: ZOOM_EXIT_SCALE, opacity: 0 }
    }
  }[variant];

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={transitionKey}
        initial={states.initial}
        animate={states.animate}
        exit={states.exit}
        transition={{ duration, ease: 'easeOut' }}
        className={cn('h-full w-full', className)}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default ViewTransition;
export type { ViewTransitionProps, ViewTransitionVariant };
