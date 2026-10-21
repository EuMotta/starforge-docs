'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import { siteConfig } from '@/settings';
import { motion } from 'framer-motion';
import { ArrowUpRight, Blocks, Rocket, ToggleLeft } from 'lucide-react';

interface ResourceItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  external?: boolean;
}

const RESOURCES: ResourceItem[] = [
  {
    href: '/docs',
    icon: Blocks,
    title: 'Components',
    description: 'The full catalog, with live previews'
  },
  {
    href: '/docs/installation',
    icon: Rocket,
    title: 'Installation',
    description: 'From zero to first component'
  },
  {
    href: '/docs/engine-choice',
    icon: ToggleLeft,
    title: 'Engine Choice',
    description: 'Radix UI or Base UI — how to pick'
  },
  {
    href: siteConfig.site.links.github,
    icon: FaGithub,
    title: 'GitHub',
    description: 'Source, issues and contributions',
    external: true
  }
];

const ResourcesNav = () => (
  <section className="mx-auto mt-24 max-w-6xl px-4">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="text-fd-foreground text-3xl font-bold tracking-[-0.02em]">
        Start here
      </h2>
    </motion.div>

    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {RESOURCES.map((resource, index) => (
        <motion.div
          key={resource.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
        >
          <Link
            href={resource.href}
            target={resource.external ? '_blank' : undefined}
            rel={resource.external ? 'noreferrer noopener' : undefined}
            className="group border-fd-border bg-fd-card hover:border-fd-primary/40 hover:bg-fd-accent/50 flex h-full flex-col rounded-xl border p-5 transition-colors"
          >
            <div className="flex items-center justify-between">
              <resource.icon
                className="text-fd-foreground size-5"
                aria-hidden
              />
              <ArrowUpRight className="text-fd-muted-foreground group-hover:text-fd-primary size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <h3 className="mt-6 font-semibold tracking-tight">
              {resource.title}
            </h3>
            <p className="text-fd-muted-foreground mt-1 text-sm">
              {resource.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ResourcesNav;
