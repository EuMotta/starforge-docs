import type { Metadata } from 'next/types';

import { siteConfig } from '@/settings';

export function createMetadata(override: Metadata): Metadata {
  const titleStr = override.title
    ? typeof override.title === 'string'
      ? override.title
      : String(override.title)
    : siteConfig.site.name;
  const descriptionStr = override.description
    ? typeof override.description === 'string'
      ? override.description
      : String(override.description)
    : siteConfig.site.description;

  return {
    ...override,
    title: titleStr,
    description: descriptionStr,
    authors: [{ name: 'Motta' }],
    keywords: siteConfig.site.keywords,
    publisher: 'Motta',
    openGraph: {
      title: titleStr,
      description: descriptionStr,
      url: siteConfig.site.url,
      images: [
        {
          url: siteConfig.site.ogImage,
          width: 1200,
          height: 630,
          alt: String(titleStr)
        }
      ],
      siteName: siteConfig.site.name,
      locale: siteConfig.site.locale,
      ...(override.openGraph || {})
    },
    creator: 'Motta',
    twitter: {
      card: 'summary_large_image',
      title: titleStr,
      description: descriptionStr,
      creator: 'Motta',
      images: [siteConfig.site.ogImage],
      ...(override.twitter || {})
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      },
      ...((override.robots as object) || {})
    }
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.SITE_URL
    ? new URL('http://localhost:3000')
    : new URL(`${process.env.SITE_URL}`);
