'use client';

import React from 'react';

import { CardStack } from '@/components/star-forge';

const STACK_CARDS = [
  { id: 'card-1', label: 'Detail 01', className: 'from-sky-400 to-indigo-600' },
  {
    id: 'card-2',
    label: 'Detail 02',
    className: 'from-orange-400 to-rose-600'
  },
  {
    id: 'card-3',
    label: 'Detail 03',
    className: 'from-emerald-400 to-teal-700'
  },
  {
    id: 'card-4',
    label: 'Detail 04',
    className: 'from-violet-400 to-purple-700'
  }
];

const CardStackPreview = () => {
  const items = STACK_CARDS.map((card) => ({
    id: card.id,
    content: (
      <div className="bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-xl border shadow-md">
        <div className={`h-28 bg-gradient-to-br ${card.className}`} />
        <div className="flex flex-1 flex-col gap-3 p-4">
          <span className="font-semibold">{card.label}</span>
          <div className="bg-muted h-2 w-3/4 rounded" />
          <div className="bg-muted h-2 w-full rounded" />
          <span className="text-muted-foreground mt-auto text-xs">
            Drag me down to dismiss
          </span>
        </div>
      </div>
    )
  }));

  return (
    <div className="h-80 w-full max-w-xs">
      <CardStack items={items} className="h-full w-full" />
    </div>
  );
};

export default CardStackPreview;
