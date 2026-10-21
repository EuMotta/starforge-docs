import { createElement, type ReactNode } from 'react';

import { docs, meta } from '@/.source';
import { Badge } from '@/components/ui/badge';
import { loader, type LoaderPlugin } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { icons } from 'lucide-react';

interface PageStatusData {
  new?: boolean;
  updated?: boolean;
  under_construction?: boolean;
}

function withBadge(name: ReactNode, badge: ReactNode, key: string) {
  return (
    <span key={key} className="flex items-center gap-2">
      {name}
      {badge}
    </span>
  );
}

const statusBadgesPlugin: LoaderPlugin = {
  name: 'starforge:status-badges',
  transformPageTree: {
    file(node, filePath) {
      if (!filePath) return node;
      const file = this.storage.read(filePath);
      if (file?.format !== 'page') return node;

      const data = file.data as PageStatusData;

      if (data.new)
        node.name = withBadge(
          node.name,
          <Badge className="bg-emerald-300 !text-[10px]">New</Badge>,
          'new'
        );
      else if (data.updated)
        node.name = withBadge(
          node.name,
          <Badge className="bg-cyan-200 !text-[10px]">Updated</Badge>,
          'updated'
        );
      else if (data.under_construction)
        node.name = withBadge(
          node.name,
          <Badge className="bg-orange-300 !text-[10px]">Soon</Badge>,
          'soon'
        );

      return node;
    }
  }
};

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  plugins: [statusBadgesPlugin],
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  baseUrl: '/docs',
  source: toFumadocsSource(docs, meta)
});
