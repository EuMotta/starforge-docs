import type { ReactNode } from 'react';

import { baseOptions } from '@/app/layout.config';
import Background from '@/components/common/background';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Background />
      <DocsLayout tree={source.pageTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </div>
  );
}
