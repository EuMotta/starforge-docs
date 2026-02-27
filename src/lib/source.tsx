import { createElement } from 'react';

import { docs, meta } from '@/.source';
import { Badge } from '@/components/ui/badge';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { icons } from 'lucide-react';
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  pageTree: {
    attachFile(node, file) {
      if (!file) return node;
      const data = file.data as {
        new?: boolean;
        updated?: boolean;
        under_construction?: boolean;
      };

      if (data.new)
        node.name = (
          <div key="new" className="flex items-center gap-2">
            {node.name}
            <Badge className="bg-emerald-300 !text-[10px]">New</Badge>
          </div>
        );
      else if (data.updated)
        node.name = (
          <div key="updated" className="flex items-center gap-2">
            {node.name}
            <Badge className="bg-cyan-200 !text-[10px]">Updated</Badge>
          </div>
        );
      else if (data.under_construction)
        node.name = (
          <div key="soon" className="flex items-center gap-2">
            {node.name}
            <Badge className="bg-orange-300 !text-[10px]">Soon</Badge>
          </div>
        );

      return node;
    }
  },
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  baseUrl: '/docs',
  source: createMDXSource(docs, meta)
});
