'use client';

import { motion } from 'framer-motion';
import { Code, Settings, Shield, Zap } from 'lucide-react';

type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const FEATURES_DATA: FeatureItem[] = [
  {
    icon: Zap,
    title: 'Ready-to-Use Components',
    description:
      'StarForge offers copy-paste UI components for React and Next.js. ' +
      'Inspired by shadcn/ui, gives you total control—no locked libraries, ' +
      'just clean code that you can adapt to your design system.'
  },
  {
    icon: Settings,
    title: 'Fully Customizable',
    description:
      'Each component is built with Tailwind CSS and Radix UI for ' +
      'accessibility. Use as-is or adjust styles and behaviors ' +
      'to match your brand. Perfect for startups, agencies and ' +
      'developers who value flexibility.'
  },
  {
    icon: Code,
    title: 'Accelerated Development',
    description:
      'Build faster without sacrificing control. Browse the ' +
      'documentation to explore components, copy what you need ' +
      'and make it yours. Join the community on GitHub to share ' +
      'ideas and contribute.'
  },
  {
    icon: Shield,
    title: 'Accessibility First',
    description:
      'Built on Radix UI, ensuring all components follow ' +
      'accessibility best practices. Full support for screen readers, ' +
      'keyboard navigation and proper contrast.'
  }
];

const FeatureCard = ({ icon: Icon, title, description }: FeatureItem) => (
  <motion.div
    className="group relative h-full overflow-hidden rounded-2xl border border-[var(--color-fd-border)] bg-gradient-to-br from-[var(--color-fd-background)] to-[var(--color-fd-primary)]/5 p-8 transition-all hover:border-[var(--color-fd-primary)]/20 hover:shadow-[var(--color-fd-primary)]/10 hover:shadow-lg"
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-fd-primary)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

    <div className="flex h-full flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-fd-primary)]/10 transition-colors group-hover:bg-[var(--color-fd-primary)]/20">
        <Icon className="h-6 w-6 text-[var(--color-fd-primary)]" />
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="leading-relaxed text-[var(--color-fd-muted-foreground)]">
        {description}
      </p>
    </div>
  </motion.div>
);

const SectionHeader = () => (
  <motion.div
    className="space-y-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="bg-gradient-to-r from-[var(--color-fd-primary)] to-[var(--color-fd-primary)]/60 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
      Why Choose StarForge?
    </h2>
    <p className="mx-auto max-w-2xl text-lg text-[var(--color-fd-muted-foreground)]">
      Discover why developers choose StarForge for their next project
    </p>
    <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-fd-primary)] to-[var(--color-fd-primary)]/50" />
  </motion.div>
);

const Features = () => {
  const leftColumnFeatures = FEATURES_DATA.slice(0, 2);
  const rightColumnFeatures = FEATURES_DATA.slice(2, 4);

  return (
    <section className="mx-auto mt-24 max-w-6xl px-4">
      <SectionHeader />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          {leftColumnFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {rightColumnFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
