'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import { siteConfig } from '@/settings';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

const Cta = () => (
  <section className="mx-auto mt-24 max-w-6xl px-4">
    <motion.div
      className="border-fd-border bg-fd-card rounded-2xl border px-6 py-16 text-center sm:px-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="text-fd-foreground text-3xl font-bold tracking-[-0.02em] text-balance sm:text-4xl">
        Pick an engine. Install your first component.
      </h2>
      <p className="text-fd-muted-foreground mx-auto mt-4 max-w-xl text-lg">
        The installation guide takes you from a fresh Next.js project to a
        working component in a few commands.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/docs/installation"
          className="bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90 inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors"
        >
          Installation guide
          <ArrowRight className="size-4" />
        </Link>
        <a
          href={siteConfig.site.links.github}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            'border-fd-border bg-fd-background hover:bg-fd-accent inline-flex h-10 items-center gap-2 rounded-lg border px-5 text-sm font-medium transition-colors'
          )}
        >
          <FaGithub className="size-4" />
          Star on GitHub
        </a>
      </div>
      <p className="text-fd-muted-foreground mt-8 font-mono text-xs">
        MIT licensed · open source
      </p>
    </motion.div>
  </section>
);

export default Cta;
