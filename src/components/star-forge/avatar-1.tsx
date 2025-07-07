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
    <Avatar className="size-14">
      <AvatarImage src="https://i.pravatar.cc/150?img=1" alt={name} />
      <AvatarFallback>{getInitialsCharacters(name)}</AvatarFallback>
    </Avatar>
  );
};

export default Component;
