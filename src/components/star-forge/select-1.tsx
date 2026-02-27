'use client';

import React from 'react';

import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from '@/components/ui/select';

import { cn } from '@/lib/utils';

interface CustomSelectProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof Select>,
    'value' | 'onValueChange' | 'children' | 'className'
  > {
  formName: string;
  label?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  existingValues?: string;
  className?: string;
}

interface CustomSelectContentProps {
  image: string;
  name: string;
  role: string;
  status: string;
  email: string;
}

const localUsers = [
  {
    id: '1',
    name: 'John Anderson',
    role: 'Senior Developer',
    email: 'john@company.com',
    status: 'online',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    role: 'UX Designer',
    email: 'sarah@company.com',
    status: 'away',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Product Manager',
    email: 'michael@company.com',
    status: 'busy',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    role: 'Marketing Lead',
    email: 'emily@company.com',
    status: 'online',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format'
  }
];

const statusColors = {
  online: {
    text: 'text-green-800',
    bg: 'bg-green-100',
    dot: 'bg-green-400'
  },
  away: {
    text: 'text-yellow-800',
    bg: 'bg-yellow-100',
    dot: 'bg-yellow-400'
  },
  busy: {
    text: 'text-red-800',
    bg: 'bg-red-100',
    dot: 'bg-red-400'
  },
  offline: {
    text: 'text-gray-800',
    bg: 'bg-gray-100',
    dot: 'bg-gray-400'
  }
} as const;

const CustomSelectContent = ({
  image,
  name,
  role,
  status,
  email
}: CustomSelectContentProps) => {
  const colors = statusColors[status as keyof typeof statusColors];
  return (
    <div className="hover:bg-primary-50 group/item flex items-center space-x-3 rounded-lg p-2 transition-colors duration-150">
      <img
        src={image}
        alt={name}
        className="group-hover/item:border-primary-300 border-muted-foreground h-10 w-10 rounded-full border-2 object-cover"
      />
      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-muted-foreground text-sm">{role}</p>
        <div className="mt-1 flex items-center">
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${colors.bg} ${colors.text}`}
          >
            <span className={`mr-1 h-2 w-2 rounded-full ${colors.dot}`}></span>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <span className="ml-2 text-xs text-gray-400">{email}</span>
        </div>
      </div>
    </div>
  );
};

const CustomSelect = ({
  formName,
  label = 'Users',
  existingValues = '',
  value,
  onValueChange,
  className,
  ...props
}: CustomSelectProps) => {
  const [internalValue, setInternalValue] = React.useState(
    value || existingValues
  );
  const selectedValue = value !== undefined ? value : internalValue;

  const handleValueChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const selectedUser = localUsers.find((user) => user.id === selectedValue);

  return (
    <div className="space-y-1.5">
      {label && (
        <Label
          htmlFor={formName}
          className="text-muted-foreground text-sm font-medium"
        >
          {label}
        </Label>
      )}
      <Select
        value={selectedValue}
        onValueChange={handleValueChange}
        {...props}
      >
        <SelectTrigger
          id={formName}
          className={cn('w-full py-5', className)}
          aria-describedby={`${formName}-error`}
        >
          {selectedUser ? (
            <div className="flex items-center space-x-3 py-1.5">
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="border-primary-200 h-8 w-8 rounded-full border-2 object-cover"
              />
              <div className="text-left">
                <p className="text-sm font-medium">{selectedUser.name}</p>
                <p className="text-muted-foreground text-xs">
                  {selectedUser.role}
                </p>
              </div>
            </div>
          ) : (
            <SelectValue placeholder="Select a user" />
          )}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {localUsers.map((user) => (
              <SelectItem
                key={user.id}
                value={user.id}
                className="cursor-pointer py-2"
              >
                <CustomSelectContent {...user} />
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
