import React from 'react';
import type { Registry } from './schema';

export const ui: Registry = [
  {
    name: 'text',
    author: 'motta',
    type: 'registry:component',
    dependencies: ['class-variance-authority'],
    description: 'Custom text component',
    files: [
      {
        path: 'src/components/star-forge/text.tsx',
        type: 'registry:component'
      }
    ],
    component: React.lazy(() =>
      import('@/components/star-forge-preview/text-component').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'text-variant',
    type: 'registry:component',
    dependencies: ['class-variance-authority'],
    description: 'Custom text variant component',
    files: [
      {
        path: 'src/components/star-forge/text-variant.tsx',
        type: 'registry:component'
      }
    ],
    component: React.lazy(() =>
      import('@/components/star-forge-preview/text-variant').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'section',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['http://localhost:3000/r/text.json'],
    dependencies: ['class-variance-authority', 'react-icons'],
    description: 'Custom section component',
    files: [
      {
        path: 'src/components/star-forge/section.tsx',
        type: 'registry:component'
      }
    ],
    component: React.lazy(() =>
      import('@/components/star-forge-preview/section').then((mod) => ({
        default: mod.default
      }))
    )
  }
];
