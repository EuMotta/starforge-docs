'use client';

import React from 'react';

import { AnimatePresence, motion, type PanInfo } from 'framer-motion';

import { cn } from '@/lib/utils';

interface CardStackItem {
  id: React.Key;
  content: React.ReactNode;
}

interface CardStackProps {
  items: CardStackItem[];
  visibleCount?: number;
  dismissOffset?: number;
  dismissVelocity?: number;
  recycle?: boolean;
  onDismiss?: (id: React.Key) => void;
  className?: string;
  cardClassName?: string;
}

const STACK_GAP_PX = 12;
const STACK_SCALE_STEP = 0.05;
const EXIT_DISTANCE_PX = 400;

function CardStack({
  items,
  visibleCount = 3,
  dismissOffset = 100,
  dismissVelocity = 500,
  recycle = true,
  onDismiss,
  className,
  cardClassName
}: CardStackProps) {
  const [order, setOrder] = React.useState<React.Key[]>(() =>
    items.map((item) => item.id)
  );

  const itemById = new Map(items.map((item) => [item.id, item]));
  const orderedItems = order
    .map((itemId) => itemById.get(itemId))
    .filter((item): item is CardStackItem => item !== undefined)
    .slice(0, visibleCount);

  const dismissFront = () => {
    const front = order[0];
    if (front === undefined) return;
    setOrder(([first, ...rest]) =>
      recycle && first !== undefined ? [...rest, first] : rest
    );
    onDismiss?.(front);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > dismissOffset || info.velocity.y > dismissVelocity) {
      dismissFront();
    }
  };

  return (
    <div className={cn('relative', className)}>
      <AnimatePresence mode="popLayout">
        {orderedItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={false}
            animate={{
              y: -index * STACK_GAP_PX,
              scale: 1 - index * STACK_SCALE_STEP
            }}
            exit={{ y: EXIT_DISTANCE_PX, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ zIndex: items.length - index }}
            drag={index === 0 ? 'y' : false}
            dragConstraints={{ top: 0 }}
            dragElastic={0.6}
            onDragEnd={index === 0 ? handleDragEnd : undefined}
            className={cn(
              'absolute inset-0',
              index === 0 && 'cursor-grab active:cursor-grabbing',
              cardClassName
            )}
          >
            {item.content}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default CardStack;
export type { CardStackItem, CardStackProps };
