'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { TfiAlert } from 'react-icons/tfi';

import { Button } from '@/components/star-forge/button';
import { motion } from 'framer-motion';

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
  title = 'ERROR',
  subtitle = 'System malfunction detected. Critical failure in module C-137.',
  label = 'RETRY CONNECTION',
  showReset = false,
  reset
}) => {
  const router = useRouter();

  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <motion.div
        className="border-muted-foreground bg-card/20 flex w-full max-w-3xl flex-col items-center justify-center border-y p-10 shadow-xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-4 flex transform items-center justify-center text-amber-500 transition-all duration-300 hover:scale-110"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <TfiAlert size={70} />
        </motion.div>

        <motion.h3
          className="mb-6 text-2xl font-bold tracking-wider"
          variants={item}
        >
          {title}
        </motion.h3>

        <motion.p
          className="mb-8 max-w-2xl text-center text-sm leading-relaxed tracking-wide"
          variants={item}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-4 flex flex-col gap-6 md:flex-row"
          variants={item}
        >
          {showReset && <Button onClick={reset}>{label}</Button>}

          <Button onClick={() => router.back()}>VOLTAR</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmptyState;
