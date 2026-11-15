'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

interface ExpandableCardProps {
  id: string;
  title: string;
  description?: string;
  media?: React.ReactNode;
  mediaClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

function ExpandableCard({
  id,
  title,
  description,
  media,
  mediaClassName,
  className,
  children
}: ExpandableCardProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        layoutId={`expandable-card-${id}`}
        aria-expanded={open}
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
        onClick={() => setOpen(true)}
        className={cn(
          'bg-card flex w-full cursor-pointer flex-col overflow-hidden rounded-xl border text-left',
          className
        )}
      >
        <motion.div
          layoutId={`expandable-card-media-${id}`}
          className={cn('h-40 w-full', mediaClassName)}
        >
          {media}
        </motion.div>
        <div className="p-4">
          <motion.h3
            layoutId={`expandable-card-title-${id}`}
            className="font-semibold"
          >
            {title}
          </motion.h3>
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60"
            />
            <div className="pointer-events-none fixed inset-0 z-50 grid place-items-center p-4">
              <motion.div
                layoutId={`expandable-card-${id}`}
                role="dialog"
                aria-modal="true"
                aria-label={title}
                className="bg-popover text-popover-foreground pointer-events-auto w-full max-w-lg overflow-hidden rounded-xl border shadow-xl"
              >
                <div className="relative">
                  <motion.div
                    layoutId={`expandable-card-media-${id}`}
                    className={cn('h-56 w-full', mediaClassName)}
                  >
                    {media}
                  </motion.div>
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                    className="bg-background/80 hover:bg-background absolute top-3 right-3 rounded-full p-1.5 transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <div className="p-5">
                  <motion.h3
                    layoutId={`expandable-card-title-${id}`}
                    className="text-lg font-semibold"
                  >
                    {title}
                  </motion.h3>
                  {description && (
                    <p className="text-muted-foreground mt-1 text-sm">
                      {description}
                    </p>
                  )}
                  {children && <div className="mt-4">{children}</div>}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default ExpandableCard;
export type { ExpandableCardProps };
