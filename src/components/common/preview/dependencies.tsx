import Link from 'next/link';
import type React from 'react';

import { badgeVariants } from '@/components/ui/badge';
import { MoveUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

interface LinkItem {
  link: string;
  label: string;
}

/**
 * A container component that displays a list of library references used in a component.
 *
 * @param {React.ReactNode} children - The Reference components to display as library links.
 * @returns {JSX.Element} A container with a "Libraries used:" label and reference links.
 * @remarks
 * - Displays a horizontal layout with spacing between elements.
 * - Uses consistent margin spacing for proper document flow.
 * - Designed to work with Reference components for individual library links.
 * - Has a "not-prose" class to avoid conflicts with documentation styling.
 * @example
 *
 * <References>
 *   <Reference label="React" link="https://reactjs.org" />
 *   <Reference label="Lucide" link="https://lucide.dev" />
 * </References>
 *
 */
export function References({ children }: React.PropsWithChildren) {
  return (
    <div className="not-prose mt-2 mb-6 flex items-center space-x-2">
      <p className="font text-sm">Libraries used:</p>
      {children}
    </div>
  );
}

/**
 * An individual reference link component for external libraries and dependencies.
 *
 * @param {string} label - The display text for the library name.
 * @param {string} link - The URL to navigate to when clicked.
 * @returns {JSX.Element} A styled badge link with external icon.
 * @remarks
 * - Opens links in a new tab with proper security attributes.
 * - Uses badge styling with outline variant for consistent appearance.
 * - Includes an external link icon (MoveUpRight) to indicate external navigation.
 * - Has hover effects and no underline for clean appearance.
 * - Responsive design with proper spacing and icon alignment.
 * @example
 * <Reference
 *   label="React"
 *   link="https://reactjs.org"
 * />
 * <Reference
 *   label="Tailwind CSS"
 *   link="https://tailwindcss.com"
 * />
 */
export function Reference({ label, link }: LinkItem) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className={cn(
        badgeVariants({ variant: 'outline' }),
        'gap-1 px-2 font-medium no-underline'
      )}
    >
      {label}
      <MoveUpRight className="ml-0.5" />
    </Link>
  );
}
