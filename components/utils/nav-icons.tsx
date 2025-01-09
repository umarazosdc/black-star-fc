import { cn } from '@/lib/utils';
import React from 'react';

const NavIcons = ({
   icon: Icon,
   name,
   className,
}: {
   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
   name: string;
   className?: string;
}) => {
   return (
      <button
         className={cn(
            'flex flex-col items-center gap-0.5 px-3 py-1.5',
            className
         )}
      >
         <Icon />
         <span className="text-[10px] font-semibold">{name}</span>
      </button>
   );
};

export default NavIcons;
