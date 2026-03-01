'use client';
import Link from 'next/link';
import React from 'react';
import { MdError, MdArrowBack, MdRefresh } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { cn } from '@/lib/utils';

interface ComponentErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  componentName?: string;
}

/**
 * Error component displayed when a requested component cannot be found in the registry.
 *
 * @param {string} [componentName='ComponentName'] - The name of the component that was not found.
 * @param {string} [className] - Additional CSS classes to apply to the container.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes to spread on the container.
 * @param {React.Ref<HTMLDivElement>} ref - React ref for the container element.
 * @returns {JSX.Element} A comprehensive error page with troubleshooting steps and support options.
 * @remarks
 * - Displays a full-screen error message with icon and title.
 * - Provides troubleshooting steps for developers and users.
 * - Includes navigation buttons to go back or retry the page.
 * - Offers a contact support dialog for further assistance.
 * - Uses forwardRef for ref forwarding support.
 * - Responsive design with mobile-friendly layout.
 * @example
 *
 * <ComponentError
 *   componentName="CustomButton"
 *   className="custom-error-class"
 * />
 *
 */
const ComponentError = React.forwardRef<HTMLDivElement, ComponentErrorProps>(
  ({ componentName = 'ComponentName', className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'bg-background flex min-h-screen items-center justify-center p-4',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="w-full max-w-md">
          <div className="border-border bg-card rounded-lg border p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="bg-destructive/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <MdError
                  className="text-destructive text-2xl"
                  aria-hidden="true"
                />
              </div>

              <h1 className="text-foreground mb-2 text-xl font-semibold">
                Component not found
              </h1>

              <p className="text-muted-foreground mb-6">
                The component{' '}
                <span className="bg-muted rounded px-1 py-0.5 font-mono text-sm">
                  {componentName}
                </span>{' '}
                was not found.
              </p>

              <div className="mb-6 w-full text-left">
                <h3 className="text-foreground mb-3 text-sm font-medium">
                  Troubleshooting steps:
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-muted-foreground mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                    If you are a developer, make sure the component is properly
                    registered in your component registry.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-muted-foreground mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                    Check for typos in the component name or import statement.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-muted-foreground mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                    If you are a user, contact the developer to fix this issue.
                  </li>
                </ul>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.history.back()}
                >
                  <MdArrowBack className="mr-2 h-4 w-4" aria-hidden="true" />
                  Back
                </Button>
                <Button
                  variant="default"
                  className="flex-1"
                  onClick={() => window.location.reload()}
                >
                  <MdRefresh className="mr-2 h-4 w-4" aria-hidden="true" />
                  Try again
                </Button>
              </div>
            </div>
          </div>

          <div className="text-muted-foreground mt-6 text-center text-sm">
            Need help?
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="inline p-0">
                  Contact support
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact support</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Contact us for assistance with the component{' '}
                    <span className="font-mono">{componentName}</span>.
                  </p>
                  <Button asChild variant="default">
                    <Link href="/contact">Go to support page</Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    );
  }
);

ComponentError.displayName = 'ComponentError';

export default ComponentError;
