import { createMetadata } from '@/lib/create-metadata';
import { Features, ResourcesNav, SocialShare, CTA } from '@/templates/home';
import StarForgeHero from '@/templates/home/hero';

export const metadata = createMetadata(
  {
    openGraph: {
      type: 'website'
    }
  },
  '/'
);

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
