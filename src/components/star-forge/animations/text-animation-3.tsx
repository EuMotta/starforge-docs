'use client';

import { type ElementType, createElement } from 'react';

import { useTypewriter } from '@/hooks/star-forge/use-typewriter';

import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  speed?: number;
  delay?: number;
  enabled?: boolean;
  cursor?: boolean;
  cursorClassName?: string;
  loop?: boolean;
}

export function TextAnimation3(props: Readonly<TypewriterTextProps>) {
  const {
    text,
    as = 'span',
    className,
    speed,
    delay,
    enabled = true,
    cursor = true,
    cursorClassName,
    loop = false
  } = props;

  const { displayText, isDone } = useTypewriter({
    text,
    speed,
    delay,
    enabled,
    loop
  });

  return createElement(
    as,
    { className: cn('relative inline', className) },
    displayText,
    cursor &&
      !isDone &&
      createElement('span', {
        className: cn(
          'ml-0.5 inline-block w-0.5 animate-pulse bg-current align-text-bottom',
          cursorClassName
        ),
        style: { height: '1em' },
        'aria-hidden': 'true',
        key: 'cursor'
      })
  );
}
