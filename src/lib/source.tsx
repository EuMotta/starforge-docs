import { docs, meta } from '@/.source';
import { Badge } from '@/components/ui/badge';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

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
          <>
            {node.name}
            <Badge className="bg-emerald-300 !text-[10px]">New</Badge>
          </>
        );
      else if (data.updated)
        node.name = (
          <>
            {node.name}
            <Badge className="bg-cyan-200 !text-[10px]">Updated</Badge>
          </>
        );
      else if (data.under_construction)
        node.name = (
          <>
            {node.name}
            <Badge className="bg-orange-300 !text-[10px]">Soon</Badge>
          </>
        );

      return node;
    }
  },
  baseUrl: '/docs',
  source: createMDXSource(docs, meta)
});
