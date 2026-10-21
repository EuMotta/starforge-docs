'use client';

import { motion } from 'framer-motion';
import { Code, Layers, ShieldCheck, Terminal } from 'lucide-react';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FEATURES_DATA: FeatureItem[] = [
  {
    icon: Code,
    title: 'Own every line',
    description:
      'Components are copied into your codebase, not hidden behind a dependency. Read them, rename them, break them — they are yours.'
  },
  {
    icon: Layers,
    title: 'Two engines, one API',
    description:
      'Every interactive block ships for Radix UI and Base UI with identical props. The choice happens at install time, never at runtime.'
  },
  {
    icon: ShieldCheck,
    title: 'Accessible by default',
    description:
      'Headless primitives handle focus, keyboard navigation and screen readers. Semantics are part of the component, not an afterthought.'
  },
  {
    icon: Terminal,
    title: 'Installs like shadcn',
    description:
      'A standard registry serves every item. One npx command pulls the component, its primitives and its dependencies into your project.'
  }
];

const Features = () => (
  <section className="mx-auto mt-24 max-w-6xl px-4">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="text-fd-foreground text-3xl font-bold tracking-[-0.02em] text-balance sm:text-4xl">
        Built for developers who read the source
      </h2>
      <p className="text-fd-muted-foreground mt-3 max-w-xl text-lg">
        No wrappers to fight, no abstraction to learn. What you install is what
        ships.
      </p>
    </motion.div>

    <div className="border-fd-border bg-fd-border mt-14 grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-4">
      {FEATURES_DATA.map((feature, index) => (
        <motion.div
          key={feature.title}
          className="bg-fd-background p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
        >
          <feature.icon className="text-fd-primary size-5" aria-hidden />
          <h3 className="mt-4 font-semibold tracking-tight">{feature.title}</h3>
          <p className="text-fd-muted-foreground mt-2 text-sm leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features;
