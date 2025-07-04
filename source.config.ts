import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from 'fumadocs-mdx/config';
import { z } from 'zod';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const { docs, meta } = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema.extend({
      new: z.boolean().default(false),
      pro: z.boolean().default(false),
      under_construction: z.boolean().default(false)
    })
  },
  meta: { schema: metaSchema }
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  }
});
