import * as React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';

import { Text } from '@/components/star-forge/text';

import { cn } from '@/lib/utils';

const Section = {
  Root: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div ref={ref} className={cn('m-6', className)} {...props} />
    )
  ),

  Header: React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'border-primary/50 mb-5 flex flex-col space-y-1.5 border-b',
        className
      )}
      {...props}
    />
  )),

  Title: React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
  >(({ className, ...props }, ref) => (
    <Text.Header
      ref={ref}
      className={cn(
        'text-2xl leading-none font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  )),

  SubTitle: React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
  >(({ className, children, ...props }, ref) => (
    <Text.H1
      ref={ref}
      className={cn(
        'mb-4 flex items-center gap-1 text-2xl leading-none font-semibold tracking-tight lg:mb-6 lg:gap-6',
        className
      )}
      {...props}
    >
      <BsChevronDoubleRight />
      {children}
    </Text.H1>
  )),

  Description: React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
  >(({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )),

  Content: React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-5', className)} {...props} />
  )),

  Footer: React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)} {...props} />
  ))
};

Section.Root.displayName = 'Section.Root';
Section.Header.displayName = 'Section.Header';
Section.Title.displayName = 'Section.Title';
Section.SubTitle.displayName = 'Section.SubTitle';
Section.Description.displayName = 'Section.Description';
Section.Content.displayName = 'Section.Content';
Section.Footer.displayName = 'Section.Footer';

export { Section };
