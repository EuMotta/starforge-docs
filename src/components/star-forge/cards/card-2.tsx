'use client';

import React from 'react';

import { cn } from '@/lib/utils';

interface BenefitsCardProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}

export const Component = ({
  icon,
  title,
  text,
  className
}: BenefitsCardProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center p-8 text-center md:w-[calc(50%-1rem)] md:p-[2.8125rem_2rem] lg:w-[calc(33%-20px)] lg:p-[2.8125rem_3rem]',
        'before:absolute before:-top-px before:-left-px before:-z-10 before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:bg-cyan-900 before:content-[""] before:[clip-path:polygon(0_25px,25px_0,calc(100%-25px)_0,100%_25px,100%_calc(100%-25px),calc(100%-25px)_100%,25px_100%,0_calc(100%-25px))]',
        'after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-full after:bg-gray-950 after:content-[""] after:[clip-path:polygon(0_25px,25px_0,calc(100%-25px)_0,100%_25px,100%_calc(100%-25px),calc(100%-25px)_100%,25px_100%,0_calc(100%-25px))]',
        className
      )}
    >
      {icon && <div className="flex items-center justify-center">{icon}</div>}
      <h3 className="mt-6 max-w-[185px] text-center text-2xl leading-[150%] font-bold text-[#2BDEFD] uppercase">
        {title}
      </h3>
      <p className="mt-6 text-center text-base leading-[150%] text-[#D7F9FF]">
        {text}
      </p>
    </div>
  );
};

export default Component;
