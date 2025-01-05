import { cn } from '@/lib/utils';
import React from 'react';

const Button = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   return (
      <button
         className={cn(
            'py-1.5 px-3 rounded-md text-primary text-xs font-bold tracking-wide',
            className
         )}
      >
         {children}
      </button>
   );
};

export default Button;
