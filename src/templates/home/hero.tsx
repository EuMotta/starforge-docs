'use client';

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/settings';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Sparkles } from 'lucide-react';

import { cn } from '@/lib/utils';

import TechStackList from './tech-stack-list';

export default function StarForgeHero() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-fd-background)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-fd-primary)]/5 via-[var(--color-fd-background)] to-[var(--color-fd-primary)]/10" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[var(--color-fd-primary)]/20 to-transparent blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-[var(--color-fd-primary)]/20 to-transparent blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="relative py-5 sm:py-24">
        <main className="container mx-auto max-w-5xl px-4">
          <motion.div
            className="space-y-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-fd-border)] bg-[var(--color-fd-accent)] px-4 py-2 text-sm text-[var(--color-fd-accent-foreground)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              <span>Powered by Modern Web Technologies</span>
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Build{' '}
              <span className="bg-gradient-to-r from-[var(--color-fd-primary)] to-[var(--color-fd-primary)]/60 bg-clip-text text-transparent">
                Modern UI
              </span>
              <br />
              with{' '}
              <span className="bg-gradient-to-r from-[var(--color-fd-primary)]/60 to-[var(--color-fd-primary)] bg-clip-text text-transparent">
                StarForge
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-10 max-w-2xl text-lg text-[var(--color-fd-muted-foreground)] sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Reusable UI components for React and Next.js. Inspired by
              shadcn/ui, copy-paste ready, fully customizable. Built with
              Tailwind CSS and Radix UI for accessibility.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/docs"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    className:
                      'group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--color-fd-primary)] to-[var(--color-fd-primary)]/80 text-[var(--color-fd-primary-foreground)] transition-all hover:scale-105 hover:shadow-[var(--color-fd-primary)]/25 hover:shadow-lg'
                  })
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Getting Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <a
                href={siteConfig.site.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    variant: 'outline',
                    className:
                      'rounded-full border-[var(--color-fd-border)] bg-[var(--color-fd-card)]/50 backdrop-blur-sm transition-all hover:scale-105 hover:border-[var(--color-fd-primary)]/40 hover:bg-[var(--color-fd-accent)]'
                  })
                )}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-3 gap-8 sm:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-fd-primary)] sm:text-4xl">
                  40+
                </div>
                <div className="text-sm text-[var(--color-fd-muted-foreground)]">
                  Components
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-fd-primary)] sm:text-4xl">
                  100%
                </div>
                <div className="text-sm text-[var(--color-fd-muted-foreground)]">
                  Accessible
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-fd-primary)] sm:text-4xl">
                  TS
                </div>
                <div className="text-sm text-[var(--color-fd-muted-foreground)]">
                  TypeScript
                </div>
              </div>
            </motion.div>
            <div className="flex justify-center">
              <TechStackList />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
