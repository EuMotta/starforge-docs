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
  },
  {
    name: 'container',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: ['class-variance-authority'],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/container.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge-preview/container.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/container').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'text-animation-1',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: ['class-variance-authority'],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/text-animation-1.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge-preview/texts/text-animation-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/texts/text-animation-1').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'text-animation-2',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: ['class-variance-authority'],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/text-animation-2.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge-preview/texts/text-animation-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/texts/text-animation-2').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'avatar-1',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/avatar-1.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/avatar-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-2',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['http://localhost:3000/r/avatar.json'],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/avatar-2.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/avatar-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar-2').then((mod) => ({
        default: mod.default
      }))
    )
  },

  {
    name: 'avatar-3',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/avatar-3.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/avatar-3.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar-3').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-4',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/avatar-4.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/avatar-4.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar-4').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-5',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/avatar-5.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/avatar-5.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar-5').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-6',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/avatar-6.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/avatar-6.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar-6').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-7',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/avatar-7.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/avatar-7.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar-7').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-8',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/avatar-8.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/avatar-8.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar-8').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-9',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/avatar-9.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/avatar-9.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar-9').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-10',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/avatar-10.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/avatar-10.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar-10').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'card-1',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: ['button'],
    dependencies: ['lucide-react'],
    description: 'Custom card component',
    files: [
      {
        path: 'src/components/star-forge/card-1.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/card-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/card-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-1',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/alert-1.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/alert-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alert-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-2',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/alert-2.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/alert-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alert-2').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-3',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/alert-3.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/alert-3.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alert-3').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'hero-1',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/heros/hero-1.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/heros/hero-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/heros/hero-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'hero-2',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/heros/hero-2.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/heros/hero-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/heros/hero-2').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'hero-3',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/heros/hero-3.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/heros/hero-3.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/heros/hero-3').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'footer-1',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/footer/footer-1.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/footer/footer-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/footer/footer-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'footer-2',
    author: 'EuMotta',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: [],
    description: 'Custom background component',
    files: [
      {
        path: 'src/components/star-forge/footer/footer-2.tsx',
        type: 'registry:component'
      }
    ],
    example: 'src/components/star-forge/footer/footer-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/footer/footer-2').then((mod) => ({
        default: mod.default
      }))
    )
  }
];
