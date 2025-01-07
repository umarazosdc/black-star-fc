import { cn } from '@/lib/utils';
import React from 'react';

const Icontext = ({
   icon: Icon,
   className,
   children,
}: {
   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} & React.HTMLAttributes<HTMLDivElement>) => {
   return (
      <div
         className={cn(
            'text-sm opacity-70 flex items-center gap-1.5',
            className
         )}
      >
         <Icon className="size-3.5" fill="#201315" stroke="white" />
         <span className="truncate">{children}</span>
      </div>
   );
};

export default Icontext;
