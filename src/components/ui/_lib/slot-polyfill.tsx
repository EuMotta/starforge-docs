import * as React from 'react';

import { cn } from '@/lib/utils';

function mergeProps(
  slotProps: Record<string, unknown>,
  childProps: Record<string, unknown>
) {
  const merged: Record<string, unknown> = { ...slotProps };

  for (const propName of Object.keys(childProps)) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    if (propName === 'className') {
      merged[propName] = cn(
        slotPropValue as string | undefined,
        childPropValue as string | undefined
      );
    } else if (
      typeof slotPropValue === 'function' &&
      typeof childPropValue === 'function'
    ) {
      merged[propName] = (...args: unknown[]) => {
        (slotPropValue as (...args: unknown[]) => void)(...args);
        (childPropValue as (...args: unknown[]) => void)(...args);
      };
    } else {
      merged[propName] = childPropValue;
    }
  }

  return merged;
}

function SlotClone({
  children,
  ...props
}: React.PropsWithChildren<Record<string, unknown>>) {
  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      mergeProps(props, children.props as Record<string, unknown>)
    );
  }

  return <>{children}</>;
}

const Slot = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }
>(({ children, ...props }, ref) => {
  return (
    <SlotClone {...props} ref={ref}>
      {children}
    </SlotClone>
  );
});
Slot.displayName = 'Slot';

export { Slot };
