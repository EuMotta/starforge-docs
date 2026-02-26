import { Metadata } from 'next';

import { siteConfig } from '@/settings';
import { Features, ResourcesNav, SocialShare, CTA } from '@/templates/home';
import StarForgeHero from '@/templates/home/hero';

export const metadata: Metadata = {
  title: siteConfig.site.name,
  description: siteConfig.site.description,
  keywords: siteConfig.site.keywords,
  openGraph: {
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    type: 'website',
    images: [
      {
        url: '/ogimage.png',
        width: 1200,
        height: 630,
        alt: siteConfig.site.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    images: ['/ogimage.png']
  }
};

export default function HomePage() {
  return (
    <main className="mb-20 flex flex-1 flex-col">
      <StarForgeHero />
      <Features />
      <CTA />
      <ResourcesNav />
      <SocialShare />
    </main>
  );
}
