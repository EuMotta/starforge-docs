'use client';

import React from 'react';

import { ExpandableCard } from '@/components/star-forge';

const CARDS = [
  {
    id: 'aurora',
    title: 'Aurora theme',
    description: 'Shared element keeps context',
    mediaClassName: 'bg-gradient-to-br from-sky-400 to-indigo-600'
  },
  {
    id: 'ember',
    title: 'Ember theme',
    description: 'Click to morph into detail',
    mediaClassName: 'bg-gradient-to-br from-orange-400 to-rose-600'
  },
  {
    id: 'moss',
    title: 'Moss theme',
    description: 'Esc or backdrop to dismiss',
    mediaClassName: 'bg-gradient-to-br from-emerald-400 to-teal-700'
  }
];

const ExpandableCardPreview = () => {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
      {CARDS.map((card) => (
        <ExpandableCard
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          mediaClassName={card.mediaClassName}
        >
          <p className="text-muted-foreground text-sm">
            The card, media and title share layout ids between the collapsed and
            expanded states, so framer-motion morphs them instead of cutting.
          </p>
        </ExpandableCard>
      ))}
    </div>
  );
};

export default ExpandableCardPreview;
