import React from 'react';

import type { Registry } from './schema';

export const ui: Registry = [
  {
    name: 'text',
    author: 'EuMotta',
    type: 'registry:component',
    dependencies: ['class-variance-authority'],
    description: 'Custom text component',
    files: [
      {
        path: 'src/components/star-forge/text.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge-preview/text-component.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/text-component').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'text-variant',
    author: 'EuMotta',
    type: 'registry:component',
    dependencies: ['class-variance-authority'],
    description: 'Custom text variant component',
    files: [
      {
        path: 'src/components/star-forge/text-variant.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge-preview/text-variant.tsx',
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
    example: 'src/components/star-forge-preview/section.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/section').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'select-1',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['select'],
    dependencies: [],
    description: 'Custom select-1 component',
    files: [
      {
        path: 'src/components/star-forge/select-1.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge-preview/selects/select-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/selects/select-1').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'select-1-form',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['form', 'select'],
    dependencies: ['react-hook-form'],
    description: 'Custom select-1-form component',
    files: [
      {
        path: 'src/components/star-forge/select-1-form.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge-preview/selects/select-1-form.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/selects/select-1-form').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'background-1',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['http://localhost:3000/r/text.json'],
    dependencies: ['class-variance-authority', 'react-icons'],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/background-1.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge-preview/background-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/background-1').then((mod) => ({
        default: mod.default
      }))
    )
  }
];
