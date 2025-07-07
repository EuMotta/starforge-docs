'use client';

import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Easing, HTMLMotionProps, motion, Variants } from 'framer-motion';

import { cn } from '@/lib/utils';

const textAnimationVariants = cva('inline', {
  variants: {
    variant: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

interface TextAnimationProps
  extends HTMLMotionProps<'span'>,
    VariantProps<typeof textAnimationVariants> {
  children: React.ReactNode;
}

const TextAnimation = React.forwardRef<HTMLSpanElement, TextAnimationProps>(
  ({ children, variant, className, ...props }, ref) => {
    const fadeIn = (
      direction: 'down' | 'up' | 'left' | 'right',
      transitionConfig: {
        type?: 'tween' | 'spring' | 'inertia';
        delay?: number;
        duration?: number;
        ease?: Easing | Easing[] | undefined;
      }
    ): Variants => {
      const {
        type = 'tween',
        delay = 0,
        duration = 0.5,
        ease = 'backOut'
      } = transitionConfig;

      return {
        hidden: {
          x: direction === 'left' ? 200 : direction === 'right' ? -100 : 0,
          y: direction === 'up' ? 200 : direction === 'down' ? -100 : 0,
          opacity: 0
        },
        show: (i: number) => ({
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type,
            delay: delay + i * 0.2,
            duration,
            ease
          }
        })
      };
    };

    const textContent =
      typeof children === 'string'
        ? children
        : React.Children.toArray(children).join('');

    const words = textContent.split(/(\s+)/);

    return (
      <span className="inline-flex flex-wrap gap-x-1" ref={ref}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={fadeIn('down', {
              type: 'tween',

            })}
            initial="hidden"
            animate="show"
            className={cn(textAnimationVariants({ variant }), className)}
            aria-hidden="true"
            {...props}
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  }
);

TextAnimation.displayName = 'TextAnimation';

export default TextAnimation;
