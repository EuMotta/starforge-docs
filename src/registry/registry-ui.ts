import React from 'react';

import type { Registry } from './schema';

export const ui: Registry = [
  {
    name: 'typography-1',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['class-variance-authority'],
    description:
      'Typography component set (headers, paragraphs, inline, link) with predefined styles.',
    files: [
      {
        path: 'src/components/star-forge/typography-1.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge-preview/typography-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/typography-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'typography-variant-1',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['class-variance-authority'],
    description:
      'Single typography component with `variant`/`as` props to render different tags (h1-h6, p, span, a, etc.) with styles.',
    files: [
      {
        path: 'src/components/star-forge/typography-variant-1.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge-preview/typography-variant-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/typography-variant-1').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'section-1',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['class-variance-authority', 'react-icons'],
    description:
      'Composite component for structuring sections (Root/Header/Title/SubTitle/Description/Content/Footer), with optional iconed subtitle.',
    files: [
      {
        path: 'src/components/star-forge/layout/section-1.tsx',
        type: 'registry:ui'
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
    type: 'registry:ui',
    registryDependencies: ['select', 'label'],
    dependencies: [],
    description:
      'Select with label and rich items (user with avatar, role, status, email), supporting controlled or internal state.',
    files: [
      {
        path: 'src/components/star-forge/selects/select-1.tsx',
        type: 'registry:ui'
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
    name: 'background-1',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['https://starforge-docs.com/r/typography-1.json'],
    dependencies: ['class-variance-authority', 'react-icons'],
    description:
      'Wrapper with CSS-generated grid background, keeping content highlighted (layer above).',
    files: [
      {
        path: 'src/components/star-forge/backgrounds/background-1.tsx',
        type: 'registry:ui'
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
    name: 'container-1',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['class-variance-authority'],
    description:
      'Responsive centered container with width variations (sm-3xl) and optional vertical border (border-x).',
    files: [
      {
        path: 'src/components/star-forge/layout/container-1.tsx',
        type: 'registry:ui'
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
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['class-variance-authority'],
    description:
      'Character-by-character text animation using framer-motion (fade/slide), with color variants (default/primary/secondary).',
    files: [
      {
        path: 'src/components/star-forge/animations/text-animation-1.tsx',
        type: 'registry:ui'
      }
    ],
    example:
      'src/components/star-forge-preview/animations/text-animation-1.tsx',
    component: React.lazy(() =>
      import(
        '@/components/star-forge-preview/animations/text-animation-1'
      ).then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'text-animation-3',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: [],
    description:
      'Typewriter text animation with configurable speed, delay, cursor, and loop support. Types text character by character with a blinking cursor.',
    files: [
      {
        path: 'src/components/star-forge/animations/text-animation-3.tsx',
        type: 'registry:ui'
      },
      {
        path: 'src/hooks/star-forge/use-typewriter.ts',
        type: 'registry:hook'
      }
    ],
    example:
      'src/components/star-forge-preview/animations/text-animation-3.tsx',
    component: React.lazy(() =>
      import(
        '@/components/star-forge-preview/animations/text-animation-3'
      ).then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'text-animation-2',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['class-variance-authority'],
    description:
      'Word-by-word text animation using framer-motion (sequential fade-in), with color variants (default/primary/secondary).',
    files: [
      {
        path: 'src/components/star-forge/animations/text-animation-2.tsx',
        type: 'registry:ui'
      }
    ],
    example:
      'src/components/star-forge-preview/animations/text-animation-2.tsx',
    component: React.lazy(() =>
      import(
        '@/components/star-forge-preview/animations/text-animation-2'
      ).then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-1',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Basic avatar with initials fallback generated from the name.',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-1.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-2',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['avatar'],
    dependencies: [],
    description:
      'Avatar with online status indicator (circular badge in bottom corner).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-2.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-2').then((mod) => ({
        default: mod.default
      }))
    )
  },

  {
    name: 'avatar-3',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['avatar'],
    dependencies: [],
    description:
      'Avatar with status indicator (online/away/busy/offline) based on numeric value.',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-3.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-3.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-3').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-4',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['avatar'],
    dependencies: ['lucide-react'],
    description: 'Avatar with verified badge (icon) in top corner.',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-4.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-4.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-4').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-5',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['avatar'],
    dependencies: ['lucide-react'],
    description: 'Avatar with verified badge controlled by boolean flag.',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-5.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-5.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-5').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-6',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['avatar'],
    dependencies: ['lucide-react'],
    description:
      'Avatar with status indicator and verified badge (status + verification combination).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-6.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-6.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-6').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-7',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['avatar'],
    dependencies: ['lucide-react'],
    description:
      'Avatar with verified badge and status indicator (example with fixed initials).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-7.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-7.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-7').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-8',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['avatar'],
    dependencies: ['lucide-react'],
    description: 'Avatar with dynamic status and conditional verified badge.',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-8.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-8.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-8').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-9',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Stacked avatar group to represent multiple users.',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-9.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-9.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-9').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-10',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['avatar'],
    dependencies: [],
    description: 'Stacked avatar group rendered from a user list (map).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-10.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-10.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-10').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'card-1',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['button'],
    dependencies: ['lucide-react'],
    description:
      'Promotional card with cover image, text, rating and action button.',
    files: [
      {
        path: 'src/components/star-forge/cards/card-1.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/cards/card-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/cards/card-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'card-2',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['button'],
    dependencies: ['lucide-react'],
    description:
      'Benefit/feature card with optional icon, title and description, with clipped border style (clip-path).',
    files: [
      {
        path: 'src/components/star-forge/cards/card-2.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/cards/card-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/cards/card-2').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-1',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Success alert (theme 1) with icon, title, description and close button.',
    files: [
      {
        path: 'src/components/star-forge/alerts/alert-1.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/alerts/alert-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alerts/alert-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-2',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Warning alert (theme 1) with icon, title, description and close button.',
    files: [
      {
        path: 'src/components/star-forge/alerts/alert-2.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/alerts/alert-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alerts/alert-2').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-3',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Information alert (theme 1) with icon, title, description and close button.',
    files: [
      {
        path: 'src/components/star-forge/alerts/alert-3.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/alerts/alert-3.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alerts/alert-3').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-4',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Error alert (theme 1) with icon, title, description and close button.',
    files: [
      {
        path: 'src/components/star-forge/alerts/alert-4.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/alerts/alert-4.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alerts/alert-4').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-5',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Alert (theme 1) with type variation via props (success/warning/info/error).',
    previewPresets: [
      {
        label: 'Success',
        props: {
          variant: 'success'
        }
      },
      {
        label: 'Warning',
        props: {
          variant: 'warning'
        }
      },
      {
        label: 'Info',
        props: {
          variant: 'info'
        }
      },
      {
        label: 'Error',
        props: {
          variant: 'error'
        }
      }
    ],
    files: [
      {
        path: 'src/components/star-forge/alerts/alert-5.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/alerts/alert-5.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alerts/alert-5').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-6',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Success alert (theme 2) with compact layout and color highlight (theme 2 variation).',
    files: [
      {
        path: 'src/components/star-forge/alerts/alert-6.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/alerts/alert-6.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alerts/alert-6').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-7',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Warning alert (theme 2) with compact layout and color highlight (theme 2 variation).',
    files: [
      {
        path: 'src/components/star-forge/alerts/alert-7.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/alerts/alert-7.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alerts/alert-7').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-8',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Information alert (theme 2) with compact layout and color highlight (theme 2 variation).',
    files: [
      {
        path: 'src/components/star-forge/alerts/alert-8.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/alerts/alert-8.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alerts/alert-8').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-9',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Error alert (theme 2) with compact layout and color highlight (theme 2 variation).',
    files: [
      {
        path: 'src/components/star-forge/alerts/alert-9.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/alerts/alert-9.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alerts/alert-9').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'alert-10',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Alert (theme 2) with type variation via props (success/warning/info/error).',
    previewPresets: [
      {
        label: 'Success',
        props: {
          variant: 'success'
        }
      },
      {
        label: 'Warning',
        props: {
          variant: 'warning'
        }
      },
      {
        label: 'Info',
        props: {
          variant: 'info'
        }
      },
      {
        label: 'Error',
        props: {
          variant: 'error'
        }
      }
    ],
    files: [
      {
        path: 'src/components/star-forge/alerts/alert-10.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/alerts/alert-10.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/alerts/alert-10').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'hero-1',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: [],
    description:
      'Hero with gradient title, text, CTA and preview image (light/dark variation) and decorative blobs.',
    files: [
      {
        path: 'src/components/star-forge/heros/hero-1.tsx',
        type: 'registry:ui'
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
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Hero/landing page with sticky promo bar, navigation header with CTAs, logos section and featured image.',
    files: [
      {
        path: 'src/components/star-forge/heros/hero-2.tsx',
        type: 'registry:ui'
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
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Hero in split layout with benefits list, CTA and side image with decorative glow/blur.',
    files: [
      {
        path: 'src/components/star-forge/heros/hero-3.tsx',
        type: 'registry:ui'
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
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['lucide-react'],
    description:
      'Full footer with multiple link columns, contact info and social media icons.',
    files: [
      {
        path: 'src/components/star-forge/footer/footer-1.tsx',
        type: 'registry:ui'
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
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: [],
    description:
      'Simple footer with copyright and links (privacy/terms/sitemap).',
    files: [
      {
        path: 'src/components/star-forge/footer/footer-2.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/footer/footer-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/footer/footer-2').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'search-1',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['combobox'],
    dependencies: ['lucide-react'],
    description:
      'Complete search with autocomplete, debounce, async results, recent searches and trending searches.',
    files: [
      {
        path: 'src/components/star-forge/inputs/search/search-1.tsx',
        type: 'registry:ui'
      },
      {
        path: 'src/hooks/star-forge/use-debounce.ts',
        type: 'registry:hook'
      }
    ],
    example: 'src/components/star-forge-preview/search-complete.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/search-complete').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'search-2',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['combobox'],
    dependencies: ['lucide-react'],
    description:
      'Search with autocomplete showing only trending suggestions (no recent list).',
    files: [
      {
        path: 'src/components/star-forge/inputs/search/search-1.tsx',
        type: 'registry:ui'
      },
      {
        path: 'src/hooks/star-forge/use-debounce.ts',
        type: 'registry:hook'
      }
    ],
    example: 'src/components/star-forge-preview/search-trending.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/search-trending').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'search-3',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['combobox'],
    dependencies: ['lucide-react'],
    description:
      'Minimalist search with autocomplete, without suggestion blocks (recent/trending).',
    files: [
      {
        path: 'src/components/star-forge/inputs/search/search-1.tsx',
        type: 'registry:ui'
      },
      {
        path: 'src/hooks/star-forge/use-debounce.ts',
        type: 'registry:hook'
      }
    ],
    example: 'src/components/star-forge-preview/search-minimal.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/search-minimal').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'password-1',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['input', 'button'],
    dependencies: ['lucide-react'],
    description:
      'Password input with show/hide value button (visibility toggle).',
    files: [
      {
        path: 'src/components/star-forge/inputs/password/password-1.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge-preview/inputs/password-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/inputs/password-1').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'password-2',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['input', 'button'],
    dependencies: ['lucide-react'],
    description:
      'Registration password input with visibility toggle, rule validation (optional) and strength meter (optional), with change callback.',
    files: [
      {
        path: 'src/components/star-forge/inputs/password/password-2.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge-preview/inputs/password-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/inputs/password-2').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'stars-rating-1',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['class-variance-authority', 'lucide-react'],
    description:
      'Interactive star rating component with hover effects, read-only mode, and multiple sizes. Features yellow stars with fill animations and numeric value display.',
    files: [
      {
        path: 'src/components/star-forge/others/stars-rating-1.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge-preview/others/stars-rating-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/others/stars-rating-1').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'stars-rating-2',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: ['class-variance-authority', 'lucide-react'],
    description:
      'Elegant star rating component with refined amber styling, hover effects, and optional value display. Supports read-only mode and multiple sizes with smooth transitions.',
    files: [
      {
        path: 'src/components/star-forge/others/stars-rating-2.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge-preview/others/stars-rating-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/others/stars-rating-2').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  // ─── Base UI engine variants ───
  // These mirror the blocks above but resolve to Base UI primitives via registryDependencies.
  {
    name: 'select-1-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-select', 'base-label'],
    dependencies: [],
    description: 'Select with label and rich items (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/selects/select-1.tsx',
        type: 'registry:ui'
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
    name: 'avatar-1-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-avatar'],
    dependencies: [],
    description: 'Basic avatar with initials fallback (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-1.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-2-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-avatar'],
    dependencies: [],
    description: 'Avatar with online status indicator (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-2.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-2').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-3-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-avatar'],
    dependencies: [],
    description: 'Avatar with status indicator (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-3.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-3.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-3').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-4-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-avatar'],
    dependencies: ['lucide-react'],
    description: 'Avatar with verified badge (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-4.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-4.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-4').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-5-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-avatar'],
    dependencies: ['lucide-react'],
    description:
      'Avatar with verified badge controlled by boolean (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-5.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-5.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-5').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-6-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-avatar'],
    dependencies: ['lucide-react'],
    description:
      'Avatar with status indicator and verified badge (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-6.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-6.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-6').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-7-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-avatar'],
    dependencies: ['lucide-react'],
    description:
      'Avatar with verified badge and status indicator (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-7.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-7.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-7').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-8-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-avatar'],
    dependencies: ['lucide-react'],
    description:
      'Avatar with dynamic status and conditional verified badge (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-8.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-8.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-8').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-9-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-avatar'],
    dependencies: [],
    description: 'Stacked avatar group (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-9.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-9.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-9').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'avatar-10-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-avatar'],
    dependencies: [],
    description: 'Stacked avatar group from user list (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/avatar/avatar-10.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/avatar/avatar-10.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/avatar/avatar-10').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'card-1-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-button'],
    dependencies: ['lucide-react'],
    description: 'Promotional card with action button (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/cards/card-1.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/cards/card-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/cards/card-1').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'card-2-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-button'],
    dependencies: ['lucide-react'],
    description: 'Benefit/feature card with button (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/cards/card-2.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/cards/card-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/cards/card-2').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'terms-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['dialog', 'button', 'scroll-area'],
    dependencies: ['lucide-react'],
    description:
      'Terms of Service dialog with scrollable content and accept action.',
    files: [
      {
        path: 'src/components/star-forge/dialogs/terms-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/terms-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/terms-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'terms-dialog-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-dialog', 'base-button', 'base-scroll-area'],
    dependencies: ['lucide-react'],
    description:
      'Terms of Service dialog with scrollable content and accept action (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/dialogs/terms-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/terms-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/terms-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'login-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['dialog', 'button', 'input', 'label'],
    dependencies: ['lucide-react'],
    description: 'Login dialog with email and password form.',
    files: [
      {
        path: 'src/components/star-forge/dialogs/login-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/login-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/login-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'login-dialog-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [
      'base-dialog',
      'base-button',
      'base-input',
      'base-label'
    ],
    dependencies: ['lucide-react'],
    description: 'Login dialog with email and password form (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/dialogs/login-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/login-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/login-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'confirmation-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['dialog', 'button'],
    dependencies: ['lucide-react'],
    description:
      'Generic confirmation dialog with cancel and continue actions.',
    files: [
      {
        path: 'src/components/star-forge/dialogs/confirmation-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/confirmation-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/confirmation-dialog').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'confirmation-dialog-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-dialog', 'base-button'],
    dependencies: ['lucide-react'],
    description:
      'Generic confirmation dialog with cancel and continue actions (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/dialogs/confirmation-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/confirmation-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/confirmation-dialog').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'delete-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['alert-dialog', 'button'],
    dependencies: ['lucide-react'],
    description: 'Destructive alert dialog for irreversible delete actions.',
    files: [
      {
        path: 'src/components/star-forge/dialogs/delete-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/delete-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/delete-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'delete-dialog-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-alert-dialog', 'base-button'],
    dependencies: ['lucide-react'],
    description:
      'Destructive alert dialog for irreversible delete actions (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/dialogs/delete-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/delete-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/delete-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'subscribe-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['dialog', 'button', 'input', 'label'],
    dependencies: ['lucide-react'],
    description: 'Newsletter subscription dialog with email capture.',
    files: [
      {
        path: 'src/components/star-forge/dialogs/subscribe-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/subscribe-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/subscribe-dialog').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'subscribe-dialog-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [
      'base-dialog',
      'base-button',
      'base-input',
      'base-label'
    ],
    dependencies: ['lucide-react'],
    description:
      'Newsletter subscription dialog with email capture (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/dialogs/subscribe-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/subscribe-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/subscribe-dialog').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'share-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['dialog', 'button', 'input', 'label'],
    dependencies: ['lucide-react'],
    description: 'Share dialog with read-only project link and copy button.',
    files: [
      {
        path: 'src/components/star-forge/dialogs/share-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/share-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/share-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'share-dialog-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [
      'base-dialog',
      'base-button',
      'base-input',
      'base-label'
    ],
    dependencies: ['lucide-react'],
    description:
      'Share dialog with read-only project link and copy button (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/dialogs/share-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/share-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/share-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'feedback-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['dialog', 'button', 'label', 'textarea'],
    dependencies: ['lucide-react'],
    description: 'Feedback dialog with textarea for user comments.',
    files: [
      {
        path: 'src/components/star-forge/dialogs/feedback-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/feedback-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/feedback-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'feedback-dialog-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [
      'base-dialog',
      'base-button',
      'base-label',
      'base-textarea'
    ],
    dependencies: ['lucide-react'],
    description:
      'Feedback dialog with textarea for user comments (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/dialogs/feedback-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/feedback-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/feedback-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'settings-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['dialog', 'button', 'label', 'switch'],
    dependencies: ['lucide-react'],
    description:
      'Settings dialog with toggles for notifications and public profile.',
    files: [
      {
        path: 'src/components/star-forge/dialogs/settings-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/settings-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/settings-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'settings-dialog-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [
      'base-dialog',
      'base-button',
      'base-label',
      'base-switch'
    ],
    dependencies: ['lucide-react'],
    description:
      'Settings dialog with toggles for notifications and public profile (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/dialogs/settings-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/settings-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/settings-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'payment-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['dialog', 'button', 'input', 'label'],
    dependencies: ['lucide-react'],
    description: 'Payment method dialog with credit card form.',
    files: [
      {
        path: 'src/components/star-forge/dialogs/payment-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/payment-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/payment-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'payment-dialog-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: [
      'base-dialog',
      'base-button',
      'base-input',
      'base-label'
    ],
    dependencies: ['lucide-react'],
    description:
      'Payment method dialog with credit card form (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/dialogs/payment-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/payment-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/payment-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'welcome-dialog',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['dialog', 'button'],
    dependencies: ['lucide-react'],
    description: 'Welcome onboarding dialog with step overview.',
    files: [
      {
        path: 'src/components/star-forge/dialogs/welcome-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/welcome-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/welcome-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'welcome-dialog-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['base-dialog', 'base-button'],
    dependencies: ['lucide-react'],
    description:
      'Welcome onboarding dialog with step overview (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/dialogs/welcome-dialog.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge/dialogs/welcome-dialog.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge/dialogs/welcome-dialog').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'password-1-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['input', 'base-button'],
    dependencies: ['lucide-react'],
    description: 'Password input with show/hide button (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/inputs/password/password-1.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge-preview/inputs/password-1.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/inputs/password-1').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'password-2-base',
    author: 'EuMotta',
    type: 'registry:ui',
    registryDependencies: ['input', 'base-button'],
    dependencies: ['lucide-react'],
    description:
      'Registration password input with strength meter (Base UI variant).',
    files: [
      {
        path: 'src/components/star-forge/inputs/password/password-2.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge-preview/inputs/password-2.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/inputs/password-2').then(
        (mod) => ({
          default: mod.default
        })
      )
    )
  },
  {
    name: 'scifi-button',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: [],
    description:
      'Sci-fi styled button with clip-path shapes (octagon, slash), glow effects, scanner, shine sweep, accent bars and corner decorations.',
    files: [
      {
        path: 'src/components/star-forge/sci-fi/scifi-button.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge-preview/sci-fi-button.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/sci-fi-button').then((mod) => ({
        default: mod.default
      }))
    )
  },
  {
    name: 'scifi-card',
    author: 'EuMotta',
    type: 'registry:ui',
    dependencies: [],
    description:
      'Sci-fi styled card with clip-path shapes, accent corner lines, ghost and nested variants. Fully editable copy-paste component.',
    files: [
      {
        path: 'src/components/star-forge/sci-fi/scifi-card.tsx',
        type: 'registry:ui'
      }
    ],
    example: 'src/components/star-forge-preview/sci-fi-card.tsx',
    component: React.lazy(() =>
      import('@/components/star-forge-preview/sci-fi-card').then((mod) => ({
        default: mod.default
      }))
    )
  }
];
