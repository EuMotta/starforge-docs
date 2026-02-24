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

interface Component {
  name: string;
}

const Component = ({ name = 'John Doe' }: Component) => {
  return (
    <div className="relative">
      <Avatar className="size-14">
        <AvatarImage src="https://i.pravatar.cc/150?img=33" alt={name} />
        <AvatarFallback>{getInitialsCharacters(name)}</AvatarFallback>
      </Avatar>
      <span className="absolute -end-1.5 -top-1.5 text-emerald-300">
        <span className="sr-only">Verified</span>
        <ShieldCheck className="size-5" />
      </span>
    </div>
  );
};

export default Component;
