import { primitives } from './registry-primitives.ts';
import { ui } from './registry-ui.ts';
import type { Registry } from './schema.ts';

const ensureArray = <T>(items: T | T[]): T[] =>
  Array.isArray(items) ? items : Object.values(items as object);

export const registry: Registry = [
  ...ensureArray(ui),
  ...ensureArray(primitives)
];

export const getComponentByName = (name: string) =>
  registry.find((item) => item.name === name);
