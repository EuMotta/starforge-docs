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
    <div className="flex -space-x-4">
      <Avatar className="border-background size-14 border">
        <AvatarImage src="https://i.pravatar.cc/150?img=10" alt={name} />
        <AvatarFallback>{getInitialsCharacters(name)}</AvatarFallback>
      </Avatar>
      <Avatar className="border-background size-14 border">
        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt={name} />
        <AvatarFallback>{getInitialsCharacters(name)}</AvatarFallback>
      </Avatar>
      <Avatar className="border-background size-14 border">
        <AvatarImage src="https://i.pravatar.cc/150?img=12" alt={name} />
        <AvatarFallback>{getInitialsCharacters(name)}</AvatarFallback>
      </Avatar>
      <Avatar className="border-background size-14 border">
        <AvatarImage src="https://i.pravatar.cc/150?img=18" alt={name} />
        <AvatarFallback>{getInitialsCharacters(name)}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Component;
