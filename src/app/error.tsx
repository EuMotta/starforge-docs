'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[app] Unhandled runtime error', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl text-center">
        <div className="bg-destructive/10 mx-auto mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl">
          <AlertCircle className="text-destructive size-7" />
        </div>

        <h1 className="mb-3 text-3xl font-semibold">Something went wrong</h1>

        <p className="text-muted-foreground mx-auto mb-10 max-w-md">
          An unexpected error occurred while rendering this page. You can try
          again or navigate to a safe location.
        </p>

        <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
          <Button onClick={reset} className="w-full">
            <RotateCcw className="size-4" />
            Try again
          </Button>
          <Button asChild variant="ghost" className="w-full">
            <Link href="/">Go to Home</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full">
            <Link href="/docs">Explore documentation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary;
