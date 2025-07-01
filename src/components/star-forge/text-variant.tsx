import { HTMLAttributes, forwardRef, ElementType } from 'react';

import { cx } from 'class-variance-authority';

type Variant =
  | 'header'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'a'
  | 'small'
  | 'strong'
  | 'em'
  | 'blockquote'
  | 'cite'
  | 'q'
  | 'abbr'
  | 'del'
  | 'ins';
type Element =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'a'
  | 'small'
  | 'strong'
  | 'em'
  | 'blockquote'
  | 'cite'
  | 'q'
  | 'abbr'
  | 'del'
  | 'ins';

interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'href'> {
  variant?: Variant;
  as?: ElementType;
  href?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
}

const variantConfig: Record<Variant, { element: Element; className: string }> =
  {
    header: {
      element: 'h1',
      className:
        'mb-3 flex flex-col gap-6 font-extralight text-primary lg:mb-4 lg:gap-8 text-4xl text-primary',
    },
    h1: {
      element: 'h1',
      className:
        'flex font-extralight text-primary lg:mb-2 text-3xl text-primary',
    },
    h2: {
      element: 'h2',
      className: 'flex font-extralight text-2xl text-primary lg:mb-2',
    },
    h3: {
      element: 'h3',
      className: 'flex font-extralight text-xl lg:mb-2',
    },
    p: {
      element: 'p',
      className: 'mb-2 text-sm font-extralight lg:mb-4',
    },
    a: {
      element: 'a',
      className: 'font-extralight hover:underline lg:mb-8',
    },
    h4: {
      element: 'h4',
      className: 'mb-2  text-lg font-extralight  lg:mb-3 lg:text-xl',
    },
    h5: {
      element: 'h5',
      className: 'mb-2 text-base font-extralight lg:mb-3 lg:text-lg',
    },
    h6: {
      element: 'h6',
      className: 'mb-2 text-sm font-extralight  lg:mb-3 lg:text-base',
    },
    span: {
      element: 'span',
      className: 'mb-2 lg:mb-3 text-base font-extralight text-foreground',
    },
    small: {
      element: 'small',
      className: 'mb-2 lg:mb-3 text-sm font-extralight text-muted-foreground',
    },
    strong: {
      element: 'strong',
      className: 'mb-2 lg:mb-3 text-base font-semibold text-foreground',
    },
    em: {
      element: 'em',
      className:
        'mb-2 lg:mb-3 text-base italic font-extralight text-foreground',
    },
    blockquote: {
      element: 'blockquote',
      className:
        'mb-2 lg:mb-3 border-l-4 border-primary pl-4 text-base font-extralight text-foreground italic',
    },
    cite: {
      element: 'cite',
      className: 'mb-2 lg:mb-3 text-sm font-extralight text-muted-foreground',
    },
    q: {
      element: 'q',
      className:
        'mb-2 lg:mb-3 text-base font-extralight text-foreground italic',
    },
    abbr: {
      element: 'abbr',
      className:
        'mb-2 lg:mb-3 text-base font-extralight text-foreground cursor-help underline-dotted',
    },
    del: {
      element: 'del',
      className:
        'mb-2 lg:mb-3 text-base font-extralight text-muted-foreground line-through',
    },
    ins: {
      element: 'ins',
      className:
        'mb-2 lg:mb-3 text-base font-extralight text-foreground underline',
    },
  };

const Text = forwardRef<HTMLElement, TextProps>(
  ({ variant = 'p', as, href, className, children, title, ...props }, ref) => {
    const { element, className: variantClassName } =
      variantConfig[variant] || variantConfig.p;
    const Component = as || element;

    const elementProps: Record<string, unknown> = {
      ...props,
      ...(variant === 'a' || Component === 'a' ? { href } : {}),
      ...(variant === 'abbr' || Component === 'abbr' ? { title } : {}),
    };

    return (
      <Component
        ref={ref}
        className={cx(variantClassName, className)}
        {...elementProps}
      >
        {children}
      </Component>
    );
  },
);
Text.displayName = 'Text';

export default Text;
