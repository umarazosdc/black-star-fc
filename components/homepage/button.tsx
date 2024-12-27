// 'use client';
import { cn } from '@/lib/utils';
import React from 'react';

const Button = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string | undefined;
}) => {
   return (
      <button
         className={cn(
            'w-[10rem] py-2 rounded-sm shadow-md text-sm',
            className
         )}
      >
         {children}
      </button>
   );
};

export default Button;
