'use client';
import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLMotionProps, motion } from 'framer-motion';

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
  text: string;
}

const TextAnimation = React.forwardRef<HTMLSpanElement, TextAnimationProps>(
  ({ text, variant, className, ...props }, ref) => {
    const characters = text.split('');

    const letterVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.05,
          duration: 0.3
        }
      })
    };

    return (
      <span aria-label={text} className="inline-flex flex-wrap">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className={cn(textAnimationVariants({ variant }), className)}
            aria-hidden="true"
            {...props}
            ref={ref}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    );
  }
);

TextAnimation.displayName = 'TextAnimation';

export default TextAnimation;
