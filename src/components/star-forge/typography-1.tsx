import { HTMLAttributes, forwardRef } from 'react';

import { cx } from 'class-variance-authority';

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Typography1 = {
  Header: forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }, ref) => (
      <h1
        ref={ref}
        className={cx(
          'mb-3 gap-6 text-4xl font-extralight lg:mb-4 lg:gap-8',
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
        className={cx('text-3xl font-extralight lg:mb-2', className)}
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
        className={cx('text-xl font-extralight lg:mb-2', className)}
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

Typography1.Header.displayName = 'Typography1.Header';
Typography1.H1.displayName = 'Typography1.H1';
Typography1.H2.displayName = 'Typography1.H2';
Typography1.H4.displayName = 'Typography1.H4';
Typography1.H5.displayName = 'Typography1.H5';
Typography1.H6.displayName = 'Typography1.H6';
Typography1.H3.displayName = 'Typography1.H3';
Typography1.Span.displayName = 'Typography1.Span';
Typography1.Small.displayName = 'Typography1.Small';
Typography1.Strong.displayName = 'Typography1.Strong';
Typography1.Blockquote.displayName = 'Typography1.Blockquote';
Typography1.Cite.displayName = 'Typography1.Cite';
Typography1.Q.displayName = 'Typography1.Q';
Typography1.P.displayName = 'Typography1.P';
Typography1.Em.displayName = 'Typography1.Em';
Typography1.Abbr.displayName = 'Typography1.Abbr';
Typography1.Del.displayName = 'Typography1.Del';
Typography1.Link.displayName = 'Typography1.Link';
Typography1.Ins.displayName = 'Typography1.Ins';

export default Typography1;
