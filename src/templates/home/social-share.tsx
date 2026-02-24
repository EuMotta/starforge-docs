'use client';

import { BsWhatsapp } from 'react-icons/bs';

import { siteConfig } from '@/settings';
import { motion } from 'framer-motion';
import { Linkedin, Share2, Heart } from 'lucide-react';

const SocialShare = () => {
  const shareText = encodeURIComponent(
    'StarForge — Reusable UI components for React and Next.js'
  );
  const shareUrl = encodeURIComponent(siteConfig.site.url || '');

  const socialLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      icon: Share2,
      label: 'Twitter',
      color: 'from-sky-500 to-sky-600'
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&summary=${shareText}`,
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-700'
    },
    {
      href: `https://wa.me/?text=${shareText}%20${shareUrl}`,
      icon: BsWhatsapp,
      label: 'WhatsApp',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="mx-auto mt-24 max-w-4xl px-4">
      <motion.div
        className="space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-fd-primary)] to-[var(--color-fd-primary)]/60">
          <Heart className="h-8 w-8 text-[var(--color-fd-primary-foreground)]" />
        </div>

        <div className="space-y-2">
          <h3 className="bg-gradient-to-r from-[var(--color-fd-primary)] to-[var(--color-fd-primary)]/60 bg-clip-text text-2xl font-bold text-transparent">
            Share StarForge
          </h3>
          <p className="mx-auto max-w-lg text-[var(--color-fd-muted-foreground)]">
            Help other developers discover this component library and contribute
            to the community growth
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <motion.div
                  className="relative overflow-hidden rounded-full border border-[var(--color-fd-border)] bg-gradient-to-br from-[var(--color-fd-background)] to-[var(--color-fd-primary)]/5 px-6 py-3 transition-all hover:border-[var(--color-fd-primary)]/20 hover:shadow-[var(--color-fd-primary)]/10 hover:shadow-lg"
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 transition-opacity group-hover:opacity-10`}
                  />

                  <div className="relative flex items-center gap-2">
                    <div
                      className={`bg-gradient-to-br ${social.color} flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform group-hover:scale-110`}
                    >
                      <social.icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </div>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-sm text-[var(--color-fd-muted-foreground)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Each share helps the community grow 🚀
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SocialShare;
