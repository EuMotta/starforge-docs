import Link from 'next/link';
import { HTMLAttributes, forwardRef } from 'react';

import { cx } from 'class-variance-authority';

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Text = {
  Header: forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }, ref) => (
      <h1
        ref={ref}
        className={cx(
          'mb-3 flex flex-col gap-6 text-4xl font-extralight lg:mb-4 lg:gap-8',
          className
        )}
        {...props}
      >
        {children}
      </h1>
    )
  ),
  H1: forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }, ref) => (
      <h1
        ref={ref}
        className={cx('flex text-3xl font-extralight lg:mb-2', className)}
        {...props}
      >
        {children}
      </h1>
    )
  ),
  H2: forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }, ref) => (
      <h2
        ref={ref}
        className={cx('text-2xl font-extralight lg:mb-2', className)}
        {...props}
      >
        {children}
      </h2>
    )
  ),
  H3: forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }, ref) => (
      <h3
        ref={ref}
        className={cx('flex text-xl font-extralight lg:mb-2', className)}
        {...props}
      >
        {children}
      </h3>
    )
  ),
  H4: forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }, ref) => (
      <h4
        ref={ref}
        className={cx(
          'mb-2 text-lg font-extralight lg:mb-3 lg:text-xl',
          className
        )}
        {...props}
      >
        {children}
      </h4>
    )
  ),
  H5: forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }, ref) => (
      <h5
        ref={ref}
        className={cx(
          'mb-2 text-base font-extralight lg:mb-3 lg:text-lg',
          className
        )}
        {...props}
      >
        {children}
      </h5>
    )
  ),
  H6: forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }, ref) => (
      <h6
        ref={ref}
        className={cx(
          'mb-2 text-sm font-extralight lg:mb-3 lg:text-base',
          className
        )}
        {...props}
      >
        {children}
      </h6>
    )
  ),
  P: forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ children, className, ...props }, ref) => (
      <p
        ref={ref}
        className={cx('mb-2 text-sm font-extralight lg:mb-4', className)}
        {...props}
      >
        {children}
      </p>
    )
  ),
  Span: forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
    ({ children, className, ...props }, ref) => (
      <span
        ref={ref}
        className={cx(
          'text-foreground mb-2 text-base font-extralight lg:mb-3',
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  ),
  Small: forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    ({ children, className, ...props }, ref) => (
      <small
        ref={ref}
        className={cx(
          'text-muted-foreground mb-2 text-sm font-extralight lg:mb-3',
          className
        )}
        {...props}
      >
        {children}
      </small>
    )
  ),
  Strong: forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    ({ children, className, ...props }, ref) => (
      <strong
        ref={ref}
        className={cx(
          'text-foreground mb-2 text-base font-semibold lg:mb-3',
          className
        )}
        {...props}
      >
        {children}
      </strong>
    )
  ),
  Em: forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    ({ children, className, ...props }, ref) => (
      <em
        ref={ref}
        className={cx(
          'text-foreground mb-2 text-base font-extralight italic lg:mb-3',
          className
        )}
        {...props}
      >
        {children}
      </em>
    )
  ),
  Blockquote: forwardRef<HTMLQuoteElement, HTMLAttributes<HTMLQuoteElement>>(
    ({ children, className, ...props }, ref) => (
      <blockquote
        ref={ref}
        className={cx(
          'border-primary text-foreground mb-2 border-l-4 pl-4 text-base font-extralight italic lg:mb-3',
          className
        )}
        {...props}
      >
        {children}
      </blockquote>
    )
  ),
  Cite: forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    ({ children, className, ...props }, ref) => (
      <cite
        ref={ref}
        className={cx(
          'text-muted-foreground mb-2 text-sm font-extralight lg:mb-3',
          className
        )}
        {...props}
      >
        {children}
      </cite>
    )
  ),
  Q: forwardRef<HTMLQuoteElement, HTMLAttributes<HTMLQuoteElement>>(
    ({ children, className, ...props }, ref) => (
      <q
        ref={ref}
        className={cx(
          'text-foreground mb-2 text-base font-extralight italic lg:mb-3',
          className
        )}
        {...props}
      >
        {children}
      </q>
    )
  ),
  Abbr: forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    ({ children, className, ...props }, ref) => (
      <abbr
        ref={ref}
        className={cx(
          'underline-dotted text-foreground mb-2 cursor-help text-base font-extralight lg:mb-3',
          className
        )}
        {...props}
      >
        {children}
      </abbr>
    )
  ),
  Del: forwardRef<HTMLModElement, HTMLAttributes<HTMLModElement>>(
    ({ children, className, ...props }, ref) => (
      <del
        ref={ref}
        className={cx(
          'text-muted-foreground mb-2 text-base font-extralight line-through lg:mb-3',
          className
        )}
        {...props}
      >
        {children}
      </del>
    )
  ),
  Ins: forwardRef<HTMLModElement, HTMLAttributes<HTMLModElement>>(
    ({ children, className, ...props }, ref) => (
      <ins
        ref={ref}
        className={cx(
          'text-foreground mb-2 text-base font-extralight underline lg:mb-3',
          className
        )}
        {...props}
      >
        {children}
      </ins>
    )
  ),
  Link: forwardRef<HTMLAnchorElement, LinkProps>(
    ({ children, className, href, ...props }, ref) => (
      <a
        ref={ref}
        href={href}
        className={cx(
          'text-primary font-extralight hover:underline lg:mb-8',
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  )
};

Text.Header.displayName = 'Text.Header';
Text.H1.displayName = 'Text.H1';
Text.H2.displayName = 'Text.H2';
Text.H4.displayName = 'Text.H4';
Text.H5.displayName = 'Text.H5';
Text.H6.displayName = 'Text.H6';
Text.H3.displayName = 'Text.H3';
Text.Span.displayName = 'Text.Span';
Text.Small.displayName = 'Text.Small';
Text.Strong.displayName = 'Text.Strong';
Text.Blockquote.displayName = 'Text.Blockquote';
Text.Cite.displayName = 'Text.Cite';
Text.Q.displayName = 'Text.Q';
Text.P.displayName = 'Text.P';
Text.Em.displayName = 'Text.Em';
Text.Abbr.displayName = 'Text.Abbr';
Text.Del.displayName = 'Text.Del';
Text.Link.displayName = 'Text.Link';
Text.Ins.displayName = 'Text.Ins';
