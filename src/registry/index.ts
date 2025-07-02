import { ui } from './registry-ui.ts';
import * as schema from './schema.ts';

type Registry = typeof schema.registrySchema._type;

const ensureArray = <T>(items: T | T[]): T[] =>
  Array.isArray(items) ? items : Object.values(items as object);

export const registry: Registry = [...ensureArray(ui)];

export const getComponentByName = (name: string) =>
  registry.find((item) => item.name === name);

export const getComponentsByCategory = (category: string) => {
  return ensureArray(registry)
    .filter((item) => item.categories?.includes(category))
    .map((item) => item.name);
};
