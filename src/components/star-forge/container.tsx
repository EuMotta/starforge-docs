import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const containerVariants = cva('container mx-auto', {
  variants: {
    variant: {
      default: '',
      border: 'border-x'
    },
    size: {
      sm: 'max-w-[40rem]', // 640px
      md: 'max-w-[48rem]', // 768px
      lg: 'max-w-[64rem]', // 1024px
      xl: 'max-w-[80rem]', // 1280px
      '2xl': 'max-w-[87.5rem]', // 1400px
      '3xl': 'max-w-[90rem]' // 1440px
    }
  },
  defaultVariants: {
    variant: 'default',
    size: '2xl'
  }
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children?: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
