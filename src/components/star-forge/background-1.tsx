import React from 'react';

import { cn } from '@/lib/utils';

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Component = ({ children, className, ...props }: ComponentProps) => (
  <div
    className={cn(
      'relative flex w-full items-center justify-center',
      className
    )}
    {...props}
  >
    <div
      className={cn(
        'absolute inset-0 z-0',
        '[background-size:50px_50px]',
        '[background-image:linear-gradient(to_right,#90909042_1px,transparent_1px),linear-gradient(to_bottom,#90909042_1px,transparent_1px)]',
        'dark:[background-image:linear-gradient(to_right,#4545458f_1px,transparent_1px),linear-gradient(to_bottom,#4545458f_1px,transparent_1px)]'
      )}
    />
    <div className="z-10">{children}</div>
  </div>
);

export default Component;
