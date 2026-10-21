import { createMetadata } from '@/lib/create-metadata';
import { Features, ResourcesNav, Cta } from '@/templates/home';
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
      <Cta />
      <ResourcesNav />
    </main>
  );
}
