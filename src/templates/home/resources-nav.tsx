'use client';

import Link from 'next/link';

import { siteConfig } from '@/settings';
import { motion } from 'framer-motion';
import { BarChart3, BookOpen, Package, Plus } from 'lucide-react';

const ResourcesNav = () => {
  const resources = [
    {
      href: '/docs',
      icon: Package,
      title: 'Components',
      description: 'Complete library',
      color: 'from-blue-500 to-blue-600'
    },
    {
      href: '/docs/instalation',
      icon: Plus,
      title: 'Installation',
      description: 'Quick guide',
      color: 'from-green-500 to-green-600'
    },
    {
      href: '/docs',
      icon: BookOpen,
      title: 'Documentation',
      description: 'Complete guides',
      color: 'from-purple-500 to-purple-600'
    },
    {
      href: siteConfig.site.links.github,
      icon: BarChart3,
      title: 'GitHub',
      description: 'Source code',
      external: true,
      color: 'from-gray-600 to-gray-700'
    }
  ];

  return (
    <section className="mx-auto mt-24 max-w-6xl px-4">
      <motion.div
        className="space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="bg-gradient-to-r from-[var(--color-fd-primary)] to-[var(--color-fd-primary)]/60 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Explore Resources
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-[var(--color-fd-muted-foreground)]">
          Everything you need to get started with StarForge
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link
              href={resource.href}
              target={resource.external ? '_blank' : undefined}
              rel={resource.external ? 'noreferrer noopener' : undefined}
              className="group block"
            >
              <motion.div
                className="relative w-auto overflow-hidden rounded-2xl border border-[var(--color-fd-border)] bg-gradient-to-br from-[var(--color-fd-background)] to-[var(--color-fd-primary)]/5 p-6 transition-all hover:border-[var(--color-fd-primary)]/20 hover:shadow-[var(--color-fd-primary)]/10 hover:shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 transition-opacity group-hover:opacity-5`}
                />
                <div className="flex justify-between gap-3">
                  <div className="relative z-10">
                    <div
                      className={`bg-gradient-to-br ${resource.color} mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110`}
                    >
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-[var(--color-fd-muted-foreground)]">
                      {resource.description}
                    </p>
                  </div>

                  <div className="right-4 bottom-4 mt-auto opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-fd-primary)]/10">
                      <svg
                        className="h-4 w-4 text-[var(--color-fd-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesNav;
