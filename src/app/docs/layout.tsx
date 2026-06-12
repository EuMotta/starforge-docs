import { headers } from 'next/headers';
import type { ReactNode } from 'react';

import { baseOptions } from '@/app/layout.config';
import Background from '@/components/common/background';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { ExternalLink, Home } from 'lucide-react';

export default async function Layout({ children }: { children: ReactNode }) {
  const host = (await headers()).get('host') || '';
  const isDev = host.includes('dev.starforge-docs.com');

  const links = [
    {
      text: 'Home',
      url: '/',
      active: 'nested-url' as const,
      icon: <Home />
    },
    {
      text: isDev ? 'Production' : 'Dev Environment',
      url: isDev
        ? 'https://starforge-docs.com'
        : 'https://dev.starforge-docs.com',
      external: true,
      icon: <ExternalLink />
    }
  ];

  return (
    <div className="min-h-screen">
      <Background />
      <DocsLayout tree={source.pageTree} {...baseOptions} links={links}>
        {children}
      </DocsLayout>
    </div>
  );
}
