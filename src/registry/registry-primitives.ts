import React from 'react';

import type { Registry } from './schema';

export const primitives: Registry = [
  {
    name: 'radix-avatar',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-avatar'],
    description:
      'Radix UI Avatar primitive — Root, Image, and Fallback with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/radix/avatar.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/avatar.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/avatar').then((mod) => ({
        default: mod.Avatar
      }))
    )
  },
  {
    name: 'base-avatar',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@base-ui/react'],
    description:
      'Base UI Avatar primitive — Root, Image, and Fallback with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/base/avatar.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/base/avatar.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/base/avatar').then((mod) => ({
        default: mod.Avatar
      }))
    )
  },
  {
    name: 'radix-label',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-label'],
    description: 'Radix UI Label primitive with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/radix/label.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/label.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/label').then((mod) => ({
        default: mod.Label
      }))
    )
  },
  {
    name: 'base-label',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@base-ui/react'],
    description:
      'Base UI Label primitive (native <label>) with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/base/label.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/base/label.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/base/label').then((mod) => ({
        default: mod.Label
      }))
    )
  },
  {
    name: 'radix-button',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
    description:
      'Radix UI Button primitive with Slot support and Star Forge variants.',
    files: [
      {
        path: 'src/components/ui/primitives/radix/button.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/button.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/button').then((mod) => ({
        default: mod.Button
      }))
    )
  },
  {
    name: 'base-button',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['class-variance-authority'],
    description:
      'Base UI Button primitive with Slot polyfill and Star Forge variants.',
    files: [
      {
        path: 'src/components/ui/primitives/base/button.tsx',
        type: 'registry:ui'
      },
      {
        path: 'src/components/ui/_lib/slot-polyfill.tsx',
        type: 'registry:lib'
      }
    ],
    example: 'src/components/ui/primitives/base/button.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/base/button').then((mod) => ({
        default: mod.Button
      }))
    )
  },
  {
    name: 'radix-badge',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
    description:
      'Radix UI Badge primitive with Slot support and Star Forge variants.',
    files: [
      {
        path: 'src/components/ui/primitives/radix/badge.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/badge.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/badge').then((mod) => ({
        default: mod.Badge
      }))
    )
  },
  {
    name: 'base-badge',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['class-variance-authority'],
    description:
      'Base UI Badge primitive with Slot polyfill and Star Forge variants.',
    files: [
      {
        path: 'src/components/ui/primitives/base/badge.tsx',
        type: 'registry:ui'
      },
      {
        path: 'src/components/ui/_lib/slot-polyfill.tsx',
        type: 'registry:lib'
      }
    ],
    example: 'src/components/ui/primitives/base/badge.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/base/badge').then((mod) => ({
        default: mod.Badge
      }))
    )
  },
  {
    name: 'radix-collapsible',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-collapsible'],
    description: 'Radix UI Collapsible primitive with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/radix/collapsible.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/collapsible.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/collapsible').then((mod) => ({
        default: mod.Collapsible
      }))
    )
  },
  {
    name: 'base-collapsible',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@base-ui/react'],
    description: 'Base UI Collapsible primitive with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/base/collapsible.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/base/collapsible.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/base/collapsible').then((mod) => ({
        default: mod.Collapsible
      }))
    )
  },
  {
    name: 'radix-tabs',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-tabs'],
    description: 'Radix UI Tabs primitive with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/radix/tabs.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/tabs.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/tabs').then((mod) => ({
        default: mod.Tabs
      }))
    )
  },
  {
    name: 'base-tabs',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@base-ui/react'],
    description:
      'Base UI Tabs primitive with Star Forge styling (includes optional Indicator).',
    files: [
      {
        path: 'src/components/ui/primitives/base/tabs.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/base/tabs.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/base/tabs').then((mod) => ({
        default: mod.Tabs
      }))
    )
  },
  {
    name: 'radix-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-dialog'],
    description: 'Radix UI Dialog primitive with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/radix/dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/dialog.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/dialog').then((mod) => ({
        default: mod.Dialog
      }))
    )
  },
  {
    name: 'base-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@base-ui/react'],
    description: 'Base UI Dialog primitive with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/base/dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/base/dialog.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/base/dialog').then((mod) => ({
        default: mod.Dialog
      }))
    )
  },
  {
    name: 'radix-popover',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-popover'],
    description: 'Radix UI Popover primitive with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/radix/popover.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/popover.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/popover').then((mod) => ({
        default: mod.Popover
      }))
    )
  },
  {
    name: 'base-popover',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@base-ui/react'],
    description: 'Base UI Popover primitive with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/base/popover.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/base/popover.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/base/popover').then((mod) => ({
        default: mod.Popover
      }))
    )
  },
  {
    name: 'radix-select',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-select'],
    description: 'Radix UI Select primitive with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/radix/select.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/select.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/select').then((mod) => ({
        default: mod.Select
      }))
    )
  },
  {
    name: 'base-select',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@base-ui/react'],
    description: 'Base UI Select primitive with Star Forge styling.',
    files: [
      {
        path: 'src/components/ui/primitives/base/select.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/base/select.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/base/select').then((mod) => ({
        default: mod.Select
      }))
    )
  },
  {
    name: 'avatar',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-avatar'],
    description: 'Avatar primitive (Radix UI default).',
    files: [
      {
        path: 'src/components/ui/primitives/radix/avatar.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/avatar.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/avatar').then((mod) => ({
        default: mod.Avatar
      }))
    )
  },
  {
    name: 'label',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-label'],
    description: 'Label primitive (Radix UI default).',
    files: [
      {
        path: 'src/components/ui/primitives/radix/label.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/label.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/label').then((mod) => ({
        default: mod.Label
      }))
    )
  },
  {
    name: 'button',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
    description: 'Button primitive (Radix UI default).',
    files: [
      {
        path: 'src/components/ui/primitives/radix/button.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/button.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/button').then((mod) => ({
        default: mod.Button
      }))
    )
  },
  {
    name: 'badge',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
    description: 'Badge primitive (Radix UI default).',
    files: [
      {
        path: 'src/components/ui/primitives/radix/badge.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/badge.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/badge').then((mod) => ({
        default: mod.Badge
      }))
    )
  },
  {
    name: 'collapsible',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-collapsible'],
    description: 'Collapsible primitive (Radix UI default).',
    files: [
      {
        path: 'src/components/ui/primitives/radix/collapsible.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/collapsible.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/collapsible').then((mod) => ({
        default: mod.Collapsible
      }))
    )
  },
  {
    name: 'tabs',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-tabs'],
    description: 'Tabs primitive (Radix UI default).',
    files: [
      {
        path: 'src/components/ui/primitives/radix/tabs.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/tabs.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/tabs').then((mod) => ({
        default: mod.Tabs
      }))
    )
  },
  {
    name: 'dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-dialog'],
    description: 'Dialog primitive (Radix UI default).',
    files: [
      {
        path: 'src/components/ui/primitives/radix/dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/dialog.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/dialog').then((mod) => ({
        default: mod.Dialog
      }))
    )
  },
  {
    name: 'popover',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-popover'],
    description: 'Popover primitive (Radix UI default).',
    files: [
      {
        path: 'src/components/ui/primitives/radix/popover.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/popover.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/popover').then((mod) => ({
        default: mod.Popover
      }))
    )
  },
  {
    name: 'select',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-select'],
    description: 'Select primitive (Radix UI default).',
    files: [
      {
        path: 'src/components/ui/primitives/radix/select.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/primitives/radix/select.tsx',
    component: React.lazy(() =>
      import('@/components/ui/primitives/radix/select').then((mod) => ({
        default: mod.Select
      }))
    )
  },
  // UI helpers (non-dual, used by block components)
  {
    name: 'input',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: [],
    description: 'Basic styled input component.',
    files: [
      {
        path: 'src/components/ui/input.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/input.tsx',
    component: React.lazy(() =>
      import('@/components/ui/input').then((mod) => ({
        default: mod.Input
      }))
    )
  },
  {
    name: 'textarea',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: [],
    description: 'Basic styled textarea component.',
    files: [
      {
        path: 'src/components/ui/textarea.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/textarea.tsx',
    component: React.lazy(() =>
      import('@/components/ui/textarea').then((mod) => ({
        default: mod.Textarea
      }))
    )
  },
  {
    name: 'input-group',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['input', 'textarea', 'button'],
    dependencies: ['class-variance-authority'],
    description: 'Input group with addon and button slots.',
    files: [
      {
        path: 'src/components/ui/input-group.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/input-group.tsx',
    component: React.lazy(() =>
      import('@/components/ui/input-group').then((mod) => ({
        default: mod.InputGroup
      }))
    )
  },
  {
    name: 'combobox',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['input-group'],
    dependencies: ['@base-ui/react', 'lucide-react'],
    description: 'Combobox autocomplete component powered by Base UI.',
    files: [
      {
        path: 'src/components/ui/combobox.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/ui/combobox.tsx',
    component: React.lazy(() =>
      import('@/components/ui/combobox').then((mod) => ({
        default: mod.Combobox
      }))
    )
  }
];
