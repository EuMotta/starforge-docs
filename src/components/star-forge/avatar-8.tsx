import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShieldCheck } from 'lucide-react';

function getInitialsCharacters(name: string) {
  const splitName = name.split(' ');
  const initials = splitName
    .map((namePart) => namePart.charAt(0))
    .join('')
    .replace(/[^A-Z]/g, '')
    .slice(0, 2)
    .toUpperCase();
  return initials;
}

interface User {
  name: string;
  avatar: string;
  verified: boolean;
  status: 0 | 1 | 2 | 3;
}

const Component = () => {
  const user: User = {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=52',
    verified: true,
    status: 2
  };
  const status: Record<User['status'], { label: string; color: string }> = {
    0: { label: 'Offline', color: 'bg-gray-400' },
    1: { label: 'Online', color: 'bg-emerald-400' },
    2: { label: 'Away', color: 'bg-yellow-400' },
    3: { label: 'Busy', color: 'bg-red-500' }
  };
  return (
    <div className="relative">
      <Avatar className="size-14">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback>{getInitialsCharacters(user.name)}</AvatarFallback>
      </Avatar>
      <span
        className={`border-background absolute -end-0.5 -bottom-0.5 size-4 rounded-full border-3 ${status[user.status].color}`}
      >
        <span className="sr-only">{status[user.status].label}</span>
      </span>
      {user.verified && (
        <span className="absolute -end-1.5 -top-1.5 text-emerald-300">
          <span className="sr-only">Verified</span>
          <ShieldCheck className="size-5" />
        </span>
      )}
    </div>
  );
};

export default Component;
