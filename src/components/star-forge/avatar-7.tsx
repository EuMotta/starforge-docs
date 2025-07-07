import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShieldCheck } from 'lucide-react';

const Component = () => {
  return (
    <div className="relative">
      <Avatar className="size-14">
        <AvatarImage src="https://i.pravatar.cc/150?img=52" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <span className="border-background absolute -end-0.5 -bottom-0.5 size-4 rounded-full border-3 bg-yellow-400">
        <span className="sr-only">Online</span>
      </span>

      <span className="absolute -end-1.5 -top-1.5 text-emerald-300">
        <span className="sr-only">Verified</span>
        <ShieldCheck className="size-5" />
      </span>
    </div>
  );
};

export default Component;
