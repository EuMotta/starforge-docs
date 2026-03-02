'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface Password1InputProps
  extends React.ComponentPropsWithoutRef<'input'> {}

const Password1 = React.forwardRef<HTMLInputElement, Password1InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const disabled = props.disabled;

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            'pr-10 [&::-ms-clear]:hidden [&::-ms-reveal]:hidden',
            className
          )}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute top-0 right-0 h-full cursor-pointer px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <EyeIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? 'Hide password' : 'Show password'}
          </span>
        </Button>
      </div>
    );
  }
);
Password1.displayName = 'Password1';

export { Password1 };
