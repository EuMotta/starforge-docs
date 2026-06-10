'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FileX } from 'lucide-react';

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

const NotFound = () => {
  return (
    <div className="flex w-full items-center justify-center px-4 py-20">
      <motion.div
        className="border-fd-border bg-fd-card/50 flex w-full max-w-2xl flex-col items-center justify-center rounded-xl border p-12 shadow-lg backdrop-blur-sm"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-fd-primary flex transform items-center justify-center transition-all duration-300"
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
          <FileX size={64} strokeWidth={1.5} />
        </motion.div>

        <motion.h3
          className="text-fd-foreground mb-4 text-center text-2xl font-semibold sm:text-3xl"
          variants={item}
        >
          Page not found
        </motion.h3>

        <motion.p
          className="text-fd-muted-foreground mb-8 max-w-xl text-center leading-relaxed"
          variants={item}
        >
          {`This documentation page doesn't exist. It may have been moved or the URL might be incorrect.`}
        </motion.p>

        <motion.div className="flex flex-col gap-3 sm:flex-row" variants={item}>
          <Button
            asChild
            className="bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90"
          >
            <Link href="/docs">Back to Documentation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-fd-border bg-fd-card/50 text-fd-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <Link href="/">Go to Home</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
