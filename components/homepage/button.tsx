import { cn } from '@/lib/utils';
import React, { ButtonHTMLAttributes } from 'react';

const Button = ({
   children,
   className,
   ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
   return (
      <button
         className={cn(
            'w-[14rem] py-3 rounded-md shadow-md text-sm font-bold',
            className
         )}
         {...props}
      >
         {children}
      </button>
   );
};

export default Button;
