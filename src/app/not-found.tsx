import Logo from '@/components/common/logo';
import { SearchTriggerButton } from '@/components/common/search';
import { Typography } from '@/components/star-forge/typography';
import { Button } from '@/components/ui/button';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { baseOptions } from './layout.config';

const Error = () => {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl text-center">
          <div className="bg-primary/10 mx-auto mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl">
            <Logo />
          </div>

          <Typography.H1 className="mb-3 text-3xl font-semibold">
            Page not found
          </Typography.H1>

          <Typography.P className="text-muted-foreground mx-auto mb-10 max-w-md">
            {`No worries — maybe the link is incorrect or the page has been moved. You can go back to a safe place or search the documentation.`}
          </Typography.P>

          <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
            <Button asChild className="w-full">
              <a href="/">Go to Home</a>
            </Button>
            <SearchTriggerButton />
            <Button asChild variant="ghost" className="w-full">
              <a href="/docs">Explore documentation</a>
            </Button>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Error;
