import { cn } from '@/lib/utils';
import React from 'react';

const Button = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string | undefined;
}) => {
   return (
      <button
         className={cn(
            'w-[14rem] py-3 rounded-md shadow-md text-sm font-bold',
            className
         )}
      >
         {children}
      </button>
   );
};

export default Button;
