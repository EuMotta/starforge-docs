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

interface Data {
  id: string;
  name: string;
  imgUrl: string;
}

const Component = () => {
  const data: Data[] = [
    {
      id: '1',
      name: 'John Doe',
      imgUrl: 'https://i.pravatar.cc/150?img=10'
    },
    {
      id: '2',
      name: 'Jane Doe',
      imgUrl: 'https://i.pravatar.cc/150?img=20'
    },
    {
      id: '3',
      name: 'Moa Tec',
      imgUrl: 'https://i.pravatar.cc/150?img=30'
    },
    {
      id: '4',
      name: 'Denis Jeff',
      imgUrl: 'https://i.pravatar.cc/150?img=40'
    }
  ];
  return (
    <div className="flex -space-x-4">
      {data.map((user) => (
        <Avatar key={user.id} className="border-background size-14 border">
          <AvatarImage src={user.imgUrl} alt={user.name} />
          <AvatarFallback>{getInitialsCharacters(user.name)}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};

export default Component;
