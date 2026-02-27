'use client';

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Users, Zap } from 'lucide-react';

import { cn } from '@/lib/utils';

const CTA = () => {
  const benefits = [
    {
      icon: Rocket,
      title: 'Ship Faster',
      description: 'Reduce development time with pre-built, tested components'
    },
    {
      icon: Users,
      title: 'Join Community',
      description: 'Connect with thousands of developers using StarForge'
    },
    {
      icon: Zap,
      title: 'Stay Updated',
      description: 'Get regular updates with new components and features'
    }
  ];

  return (
    <section className="mx-auto mt-24 max-w-6xl px-4">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-[var(--color-fd-border)] bg-gradient-to-br from-[var(--color-fd-background)] via-[var(--color-fd-primary)]/5 to-[var(--color-fd-background)] p-8 sm:p-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-[var(--color-fd-primary)]/20 to-transparent blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-[var(--color-fd-primary)]/20 to-transparent blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.8, 0.5, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>

        <div className="relative z-10">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="bg-gradient-to-r from-[var(--color-fd-primary)] to-[var(--color-fd-primary)]/60 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-fd-muted-foreground)] sm:text-xl">
              Join thousands of developers who are already building beautiful,
              accessible interfaces with StarForge. Start your journey today and
              transform the way you build web applications.
            </p>
          </motion.div>

          <motion.div
            className="mb-12 grid gap-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-fd-primary)]/10">
                  <benefit.icon className="h-6 w-6 text-[var(--color-fd-primary)]" />
                </div>
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm text-[var(--color-fd-muted-foreground)]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/docs/instalation"
              className={cn(
                buttonVariants({
                  size: 'lg',
                  className:
                    'group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--color-fd-primary)] to-[var(--color-fd-primary)]/80 text-[var(--color-fd-primary-foreground)] transition-all hover:scale-105 hover:shadow-[var(--color-fd-primary)]/25 hover:shadow-lg'
                })
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/docs"
              className={cn(
                buttonVariants({
                  size: 'lg',
                  variant: 'outline',
                  className:
                    'rounded-full border-[var(--color-fd-border)] bg-[var(--color-fd-card)]/50 backdrop-blur-sm transition-all hover:scale-105 hover:border-[var(--color-fd-primary)]/40 hover:bg-[var(--color-fd-accent)]'
                })
              )}
            >
              Browse Components
            </Link>
          </motion.div>

          <motion.p
            className="mt-8 text-center text-sm text-[var(--color-fd-muted-foreground)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            No credit card required • Free forever • Open source
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
