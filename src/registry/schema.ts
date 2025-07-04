import * as z from 'zod';

export const registryItemTypeSchema = z.enum(['registry:component']);

export const registryItemFileSchema = z.object({
  path: z.string(),
  content: z.string().optional(),
  type: registryItemTypeSchema,
  target: z.string().optional()
});

export const registryItemTailwindSchema = z.object({
  config: z.object({
    content: z.array(z.string()).optional(),
    theme: z.record(z.string(), z.any()).optional(),
    plugins: z.array(z.string()).optional()
  })
});

export const registryItemCssVarsSchema = z.object({
  light: z.record(z.string(), z.string()).optional(),
  dark: z.record(z.string(), z.string()).optional()
});

export const registryItemSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  author: z.string().optional(),
  example: z.string(),
  type: registryItemTypeSchema,
  dependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryItemFileSchema).optional(),
  component: z.function().args(z.any()).returns(z.any()).optional(),
  tailwind: registryItemTailwindSchema.optional(),
  cssVars: registryItemCssVarsSchema.optional(),
  categories: z.array(z.string()).optional()
});

export const registrySchema = z.array(registryItemSchema);

export type Registry = z.infer<typeof registrySchema>;
