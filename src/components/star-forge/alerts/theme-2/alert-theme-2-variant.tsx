import React from 'react';

import {
  CircleCheck,
  TriangleAlert,
  CircleAlert,
  XCircle,
  X
} from 'lucide-react';

type AlertType = 'success' | 'warning' | 'info' | 'error';

type Props = {
  success?: boolean;
  warning?: boolean;
  info?: boolean;
  error?: boolean;
};

function getAlertType({ success, warning, info, error }: Props): AlertType {
  if (error) return 'error';
  if (warning) return 'warning';
  if (info) return 'info';
  if (success) return 'success';
  return 'success';
}

const config: Record<
  AlertType,
  {
    wrapper: string;
    icon: string;
    close: string;
    title: string;
    description: string;
    Icon: React.ComponentType;
  }
> = {
  success: {
    wrapper:
      'flex w-full items-start space-x-3 rounded-lg border border-green-500 bg-green-500/10 p-4',
    icon: 'flex size-4 rounded-full text-green-500',
    close: 'text-green-400 transition-colors duration-200 hover:text-green-600',
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    Icon: CircleCheck
  },
  warning: {
    wrapper:
      'flex w-full items-start space-x-3 rounded-lg border border-yellow-500 bg-yellow-500/10 p-4',
    icon: 'flex size-4 rounded-full text-yellow-500',
    close:
      'text-yellow-400 transition-colors duration-200 hover:text-yellow-600',
    title: 'Warning!',
    description: 'Please review your information.',
    Icon: TriangleAlert
  },
  info: {
    wrapper:
      'flex w-full items-start space-x-3 rounded-lg border border-blue-500 bg-blue-500/10 p-4',
    icon: 'flex size-4 rounded-full text-blue-500',
    close: 'text-blue-400 transition-colors duration-200 hover:text-blue-600',
    title: 'Information',
    description: 'New features are now available in your dashboard.',
    Icon: CircleAlert
  },
  error: {
    wrapper:
      'flex w-full items-start space-x-3 rounded-lg border border-red-500 bg-red-500/10 p-4',
    icon: 'flex size-4 rounded-full text-red-500',
    close: 'text-red-400 transition-colors duration-200 hover:text-red-600',
    title: 'Error!',
    description: 'Something went wrong. Please try again.',
    Icon: XCircle
  }
};

const Component = (props: Props) => {
  const type = getAlertType(props);
  const { wrapper, icon, close, title, description, Icon } = config[type];

  return (
    <div className={wrapper}>
      <div className="flex flex-col items-center">
        <div className={icon}>
          <Icon />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h5 className="text-foreground text-sm font-semibold">{title}</h5>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      </div>
      <div className="flex items-center self-center">
        <button className={close}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default Component;
