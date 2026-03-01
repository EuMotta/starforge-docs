/* eslint-disable no-useless-escape */
'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOffIcon, Check, X } from 'lucide-react';

import { cn } from '@/lib/utils';

interface PasswordRule {
  id: string;
  label: string;
  validator: (password: string) => boolean;
}

export interface Password2InputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
  minLength?: number;
  maxLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumbers?: boolean;
  requireSpecialChars?: boolean;
  showRules?: boolean;
  showStrength?: boolean;
  customRules?: PasswordRule[];
  onPasswordChange?: (
    password: string,
    isValid: boolean,
    rules: PasswordRule[]
  ) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Password2 = React.forwardRef<HTMLInputElement, Password2InputProps>(
  (
    {
      className,
      minLength,
      maxLength,
      requireUppercase = false,
      requireLowercase = false,
      requireNumbers = false,
      requireSpecialChars = false,
      showRules = false,
      showStrength = false,
      customRules = [],
      onPasswordChange,
      onChange,
      value,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState(value || '');
    const [rules, setRules] = React.useState<PasswordRule[]>([]);

    React.useEffect(() => {
      const passwordRules: PasswordRule[] = [];

      if (minLength) {
        passwordRules.push({
          id: 'minLength',
          label: `Minimum ${minLength} characters`,
          validator: (pwd) => pwd.length >= minLength
        });
      }

      if (maxLength) {
        passwordRules.push({
          id: 'maxLength',
          label: `Maximum ${maxLength} characters`,
          validator: (pwd) => pwd.length <= maxLength
        });
      }

      if (requireUppercase) {
        passwordRules.push({
          id: 'uppercase',
          label: 'At least one uppercase letter',
          validator: (pwd) => /[A-Z]/.test(pwd)
        });
      }

      if (requireLowercase) {
        passwordRules.push({
          id: 'lowercase',
          label: 'At least one lowercase letter',
          validator: (pwd) => /[a-z]/.test(pwd)
        });
      }

      if (requireNumbers) {
        passwordRules.push({
          id: 'numbers',
          label: 'At least one number',
          validator: (pwd) => /\d/.test(pwd)
        });
      }

      if (requireSpecialChars) {
        passwordRules.push({
          id: 'specialChars',
          label: 'At least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)',
          validator: (pwd) => /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(pwd)
        });
      }

      if (customRules && customRules.length > 0) {
        customRules.forEach((rule, index) => {
          passwordRules.push({
            id: rule.id || `custom-${index}`,
            label: rule.label,
            validator: rule.validator
          });
        });
      }

      setRules(passwordRules);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      minLength,
      maxLength,
      requireUppercase,
      requireLowercase,
      requireNumbers,
      requireSpecialChars,
      customRules?.length
    ]);

    React.useEffect(() => {
      if (value !== undefined) {
        setPassword(String(value));
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = e.target.value;
      setPassword(newPassword);

      if (onChange) {
        onChange(e);
      }

      if (onPasswordChange && rules.length > 0) {
        const isValid = rules.every((rule) => rule.validator(newPassword));
        onPasswordChange(newPassword, isValid, rules);
      }
    };

    const isPasswordValid = rules.every((rule) =>
      rule.validator(String(password))
    );
    const disabled = props.disabled;

    const calculatePasswordStrength = (pwd: string) => {
      if (!pwd) return { score: 0, label: '', color: '' };

      let score = 0;

      if (pwd.length >= 8) score += 1;
      if (pwd.length >= 12) score += 1;

      if (/[a-z]/.test(pwd)) score += 1;
      if (/[A-Z]/.test(pwd)) score += 1;
      if (/\d/.test(pwd)) score += 1;
      if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(pwd)) score += 1;

      const normalizedScore = Math.min(Math.floor(score / 1.5), 4);

      const strengthLevels = [
        { score: 0, label: 'Very Weak', color: 'bg-red-500' },
        { score: 1, label: 'Weak', color: 'bg-orange-500' },
        { score: 2, label: 'Fair', color: 'bg-yellow-500' },
        { score: 3, label: 'Good', color: 'bg-blue-500' },
        { score: 4, label: 'Excellent', color: 'bg-green-500' }
      ];

      return strengthLevels[normalizedScore];
    };

    const passwordStrength = calculatePasswordStrength(String(password));

    return (
      <div className="space-y-2">
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            className={cn(
              'pr-10 [&::-ms-clear]:hidden [&::-ms-reveal]:hidden',
              isPasswordValid && String(password).length > 0
                ? 'border-green-500'
                : '',
              className
            )}
            ref={ref}
            value={String(password)}
            onChange={handleChange}
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

        {showStrength && String(password).length > 0 && (
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Password strength</span>
              <span
                className={`text-xs font-medium ${
                  passwordStrength.score === 0
                    ? 'text-red-500'
                    : passwordStrength.score === 1
                      ? 'text-orange-500'
                      : passwordStrength.score === 2
                        ? 'text-yellow-500'
                        : passwordStrength.score === 3
                          ? 'text-blue-500'
                          : 'text-green-500'
                }`}
              >
                {passwordStrength.label}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                style={{ width: `${(passwordStrength.score / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {showRules && rules.length > 0 && (
          <div className="space-y-1 text-sm">
            {rules.map((rule) => {
              const isValid = rule.validator(String(password));
              return (
                <div
                  key={rule.id}
                  className={cn(
                    'flex items-center gap-2',
                    isValid ? 'text-green-600' : 'text-gray-500'
                  )}
                >
                  {isValid ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <X className="h-4 w-4" />
                  )}
                  <span>{rule.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);
Password2.displayName = 'Password2';

export { Password2 };
