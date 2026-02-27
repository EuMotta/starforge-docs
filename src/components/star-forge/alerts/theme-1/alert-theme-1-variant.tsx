import React from 'react';

import { Check, TriangleAlert, CircleAlert, XCircle, X } from 'lucide-react';

type Props = {
  variant?: 'success' | 'warning' | 'info' | 'error';
};

const alertVariants = {
  success: {
    wrapper:
      'flex w-full items-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-4',
    iconWrapper:
      'flex size-10 items-center justify-center rounded-full bg-green-500',
    close: 'text-green-400 transition-colors duration-200 hover:text-green-600',
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    Icon: Check,
    titleClassName: 'text-green-800',
    descriptionClassName: 'text-green-700'
  },
  warning: {
    wrapper:
      'flex w-full items-center space-x-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4',
    iconWrapper:
      'flex size-10 items-center justify-center rounded-full bg-yellow-500',
    close:
      'text-yellow-400 transition-colors duration-200 hover:text-yellow-600',
    title: 'Warning!',
    description: 'Please review your information.',
    Icon: TriangleAlert,
    titleClassName: 'text-yellow-800',
    descriptionClassName: 'text-yellow-700'
  },
  info: {
    wrapper:
      'flex w-full items-center space-x-3 rounded-lg border border-blue-200 bg-blue-50 p-4',
    iconWrapper:
      'flex size-10 items-center justify-center rounded-full bg-blue-500',
    close: 'text-blue-400 transition-colors duration-200 hover:text-blue-600',
    title: 'Information',
    description: 'New features are now available in your dashboard.',
    Icon: CircleAlert,
    titleClassName: 'text-blue-800',
    descriptionClassName: 'text-blue-700'
  },
  error: {
    wrapper:
      'flex w-full items-center space-x-3 rounded-lg border border-red-200 bg-red-50 p-4',
    iconWrapper:
      'flex size-10 items-center justify-center rounded-full bg-red-500',
    close: 'text-red-400 transition-colors duration-200 hover:text-red-600',
    title: 'Error!',
    description: 'Something went wrong. Please try again.',
    Icon: XCircle,
    titleClassName: 'text-red-800',
    descriptionClassName: 'text-red-700'
  }
};
const Component = ({ variant = 'success' }: Props) => {
  const alertConfig = alertVariants[variant];

  return (
    <div className={alertConfig.wrapper}>
      <div className="flex-shrink-0">
        <div className={alertConfig.iconWrapper}>
          <alertConfig.Icon />
        </div>
      </div>
      <div className="flex-1">
        <h3 className={`text-sm font-semibold ${alertConfig.titleClassName}`}>
          {alertConfig.title}
        </h3>
        <p className={`mt-1 text-sm ${alertConfig.descriptionClassName}`}>
          {alertConfig.description}
        </p>
      </div>
      <button className={alertConfig.close}>
        <X />
      </button>
    </div>
  );
};

export default Component;
