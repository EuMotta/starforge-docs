'use client';

import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  enabled?: boolean;
  loop?: boolean;
  loopDelay?: number;
}

interface UseTypewriterReturn {
  displayText: string;
  isDone: boolean;
  isTyping: boolean;
}

const DEFAULT_SPEED = 50;
const DEFAULT_DELAY = 0;
const DEFAULT_LOOP_DELAY = 2000;

export function useTypewriter({
  text,
  speed = DEFAULT_SPEED,
  delay = DEFAULT_DELAY,
  enabled = true,
  loop = false,
  loopDelay = DEFAULT_LOOP_DELAY
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let cancelled = false;

    const startTyping = () => {
      setIsTyping(true);
      setIsDone(false);
      setDisplayText('');

      const startTime = performance.now() + delay;

      const tick = (now: number) => {
        const elapsed = now - startTime;

        if (elapsed < 0) {
          rafRef.current = requestAnimationFrame(tick);
          return;
        }

        const visibleChars = Math.min(text.length, Math.floor(elapsed / speed));

        setDisplayText(text.slice(0, visibleChars));

        if (visibleChars >= text.length) {
          setIsDone(true);
          setIsTyping(false);

          if (loop) {
            timeoutRef.current = setTimeout(() => {
              if (!cancelled) startTyping();
            }, loopDelay);
          }
          return;
        }

        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(startTyping);

    return () => {
      cancelled = true;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [enabled, text, speed, delay, loop, loopDelay]);

  return {
    displayText: enabled ? displayText : text,
    isDone: enabled ? isDone : true,
    isTyping: enabled && isTyping
  };
}
