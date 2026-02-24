import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
        <AvatarImage src="https://i.pravatar.cc/150?img=52" alt={name} />
        <AvatarFallback>{getInitialsCharacters(name)}</AvatarFallback>
      </Avatar>
      <span className="border-background absolute -end-0.5 -bottom-0.5 size-4 rounded-full border-3 bg-emerald-300">
        <span className="sr-only">Online</span>
      </span>
    </div>
  );
};

export default Component;
