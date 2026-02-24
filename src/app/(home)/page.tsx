import { Metadata } from 'next';

import { Features, ResourcesNav, SocialShare } from '@/templates/home';
import StarForgeHero from '@/templates/home/hero';

export const metadata: Metadata = {
  title: 'StarForge — Componentes UI para React e Next.js',
  description:
    'Biblioteca de componentes reutilizáveis para React e Next.js. Inspirada no shadcn/ui, construída com Tailwind CSS e Radix UI. Copy-paste ready, totalmente customizável.',
  keywords: [
    'UI Components',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Component Library',
    'shadcn/ui',
    'Radix UI',
    'TypeScript',
    'Accessibility',
    'Frontend',
    'Design System',
    'Components Reutilizáveis',
    'Desenvolvimento Web'
  ],
  openGraph: {
    title: 'StarForge — Componentes UI para React e Next.js',
    description:
      'Biblioteca de componentes reutilizáveis para React e Next.js. Inspirada no shadcn/ui, construída com Tailwind CSS e Radix UI.',
    type: 'website',
    images: [
      {
        url: '/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'StarForge — Componentes UI para React e Next.js'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StarForge — Componentes UI para React e Next.js',
    description:
      'Biblioteca de componentes reutilizáveis para React e Next.js. Inspirada no shadcn/ui, construída com Tailwind CSS e Radix UI.',
    images: ['/ogimage.png']
  }
};

export default function HomePage() {
  return (
    <main className="mb-20 flex flex-1 flex-col">
      <StarForgeHero />
      <Features />
      <ResourcesNav />
      <SocialShare />
    </main>
  );
}
