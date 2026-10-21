'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { siteConfig } from '@/settings';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Copy } from 'lucide-react';

import { cn } from '@/lib/utils';

const INSTALL_COMMAND = `npx shadcn@latest add ${siteConfig.site.url.replace(/\/$/, '')}/r/button.json`;

const SPEC_ITEMS = [
  '56 components',
  'Radix UI or Base UI',
  'TypeScript strict',
  'MIT licensed'
];

function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('[hero] clipboard write failed:', error);
    }
  };

  return (
    <div className="border-fd-border bg-fd-card inline-flex max-w-full items-center gap-2 rounded-lg border py-2 pr-2 pl-4">
      <code className="text-fd-muted-foreground truncate font-mono text-sm">
        {INSTALL_COMMAND}
      </code>
      <button
        type="button"
        onClick={copyCommand}
        aria-label={copied ? 'Copied' : 'Copy install command'}
        className="text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground flex size-8 shrink-0 items-center justify-center rounded-md transition-colors"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}

function PreviewPanel() {
  return (
    <div className="border-fd-border bg-fd-card overflow-hidden rounded-xl border text-left shadow-sm">
      <div className="border-fd-border flex items-center justify-between border-b px-4 py-2.5">
        <span className="text-fd-muted-foreground font-mono text-xs">
          ~/components/ui
        </span>
        <span className="text-fd-muted-foreground flex items-center gap-1.5 font-mono text-xs">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          live
        </span>
      </div>
      <div className="sm:divide-fd-border grid sm:grid-cols-3 sm:divide-x">
        <div className="space-y-3 p-6">
          <p className="text-fd-muted-foreground font-mono text-xs">
            button.tsx
          </p>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Default</Button>
            <Button size="sm" variant="secondary">
              Secondary
            </Button>
            <Button size="sm" variant="outline">
              Outline
            </Button>
            <Button size="sm" variant="ghost">
              Ghost
            </Button>
          </div>
        </div>
        <div className="space-y-3 p-6">
          <p className="text-fd-muted-foreground font-mono text-xs">
            input.tsx + switch.tsx
          </p>
          <div className="space-y-3">
            <Input placeholder="you@company.com" className="h-8" />
            <div className="flex items-center gap-2">
              <Switch id="hero-switch" defaultChecked />
              <Label htmlFor="hero-switch" className="text-sm font-normal">
                Ship it
              </Label>
            </div>
          </div>
        </div>
        <div className="p-6">
          <Card className="shadow-none">
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Deploy preview</span>
                <Badge variant="secondary">ready</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-fd-muted-foreground px-4 pb-3 text-sm">
              Compose it your way.
            </CardContent>
            <CardFooter className="px-4 pb-4">
              <Button size="sm" variant="outline" className="w-full">
                Open
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function StarForgeHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(var(--color-fd-border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] bg-size-[22px_22px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:pt-32">
        <motion.h1
          className="text-fd-foreground text-4xl font-bold tracking-[-0.03em] text-balance sm:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Components that become your code
        </motion.h1>

        <motion.p
          className="text-fd-muted-foreground mx-auto mt-6 max-w-2xl text-lg text-balance"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          56 copy-paste components for React and Next.js. Installed into your
          project — not imported from a package — on the primitive engine you
          choose: Radix UI or Base UI.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <Link
            href="/docs"
            className={cn(
              'bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90 inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors'
            )}
          >
            Browse the docs
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={siteConfig.site.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="border-fd-border bg-fd-card hover:bg-fd-accent inline-flex h-10 items-center gap-2 rounded-lg border px-5 text-sm font-medium transition-colors"
          >
            <FaGithub className="size-4" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          className="mt-4 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: 'easeOut' }}
        >
          <InstallCommand />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <PreviewPanel />
        </motion.div>

        <motion.p
          className="text-fd-muted-foreground mt-6 text-center font-mono text-xs tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          {SPEC_ITEMS.join('  ·  ')}
        </motion.p>
      </div>
    </section>
  );
}
