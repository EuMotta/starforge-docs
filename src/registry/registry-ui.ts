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
    registryDependencies: ['select'],
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
    registryDependencies: [
      'https://www.starforge-docs.com/r/typography-1.json'
    ],
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
  }
];
