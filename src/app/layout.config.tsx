import Logo from '@/components/common/logo';
import { siteConfig } from '@/settings';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Home } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Logo />
        {siteConfig.site.name}
      </>
    )
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: 'Home',
      url: '/',
      active: 'nested-url',
      icon: <Home />
    }
  ]
};
