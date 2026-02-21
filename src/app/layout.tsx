/* eslint-disable import-helpers/order-imports */
import { siteConfig } from '@/settings';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: siteConfig.site.name,
  description: siteConfig.site.description,
  keywords: [
    'ShadCNUI',
    'UI components',
    'UI',
    'Tailwind CSS',
    'React.js',
    'Components',
    'Next.js',
    'Open Source'
  ],
  authors: [{ name: siteConfig.personalInfo.name }],
  creator: siteConfig.personalInfo.name,
  publisher: siteConfig.personalInfo.name,
  metadataBase: new URL(process.env.SITE_URL || ''),
  alternates: {
    canonical: siteConfig.site.url
  },
  openGraph: {
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    url: siteConfig.site.url,
    siteName: siteConfig.site.name,
    images: [
      {
        url: '/ogimage.png',
        width: 600,
        height: 600,
        alt: ''
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    creator: '',
    images: ['']
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider theme={{ defaultTheme: 'dark' }}>
          <NextTopLoader
            color="var(--color-fd-info)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px var(--color-fd-info),0 0 5px var(--color-fd-info)"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
