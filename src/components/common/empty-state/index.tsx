'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/settings';
import { motion } from 'framer-motion';
import { Construction, Github } from 'lucide-react';

export interface ErrorProps {
  title?: string;
  subtitle?: string;
  label?: string;
  showReset?: boolean;
  reset?: () => void;
}

const container = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const EmptyState: React.FC<ErrorProps> = ({
  title = 'Under Construction',
  subtitle = 'This section is currently being developed. Check back soon for updates!',
  label = 'Retry',
  showReset = false,
  reset
}) => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-center px-4 py-20">
      <motion.div
        className="border-fd-border bg-fd-card/50 flex w-full max-w-2xl flex-col items-center justify-center rounded-xl border p-12 shadow-lg backdrop-blur-sm"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-fd-primaryflex transform items-center justify-center transition-all duration-300"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <Construction size={64} strokeWidth={1.5} />
        </motion.div>

        <motion.h3
          className="text-fd-foreground mb-4 text-center text-2xl font-semibold sm:text-3xl"
          variants={item}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-fd-muted-foreground mb-8 max-w-xl text-center leading-relaxed"
          variants={item}
        >
          {subtitle}
        </motion.p>
        <p className="text-fd-muted-foreground mb-4 text-sm">
          Want to help build this component library?
        </p>
        <motion.div className="flex flex-col gap-3 sm:flex-row" variants={item}>
          {showReset && (
            <Button
              onClick={reset}
              className="bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90"
            >
              {label}
            </Button>
          )}
        </motion.div>

        <motion.div
          className="flex items-center gap-5 text-center"
          variants={item}
        >
          <Button
            asChild
            variant="outline"
            className="group relative overflow-hidden bg-gradient-to-r from-[var(--color-fd-primary)] to-[var(--color-fd-primary)]/80 text-[var(--color-fd-primary-foreground)] transition-all hover:scale-105"
          >
            <a
              href={siteConfig.site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 no-underline"
            >
              <Github className="h-4 w-4" />
              Contribute on GitHub
            </a>
          </Button>
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="border-fd-border bg-fd-card/50 text-fd-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            Go Back
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmptyState;
