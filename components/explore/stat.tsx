import React from 'react';
import { Sansita_Swashed } from 'next/font/google';
import { cn } from '@/lib/utils';

const swashed = Sansita_Swashed({ subsets: ['latin'], weight: ['900'] });

const Stat = ({
   name,
   rate,
   icon: Icon,
   color,
   className,
}: {
   name: string;
   rate: number;
   color: string;
   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} & React.HTMLAttributes<HTMLDivElement>) => {
   return (
      <div className={cn('flex flex-col items-center gap-2', className)}>
         <div
            className="relative p-1 text-card rounded-md shadow-md size-10"
            style={{ backgroundColor: color }}
         >
            <Icon className="absolute size-3 text-primary" strokeWidth={3} />
            <span className={`absolute bottom-1 right-1 ${swashed.className}`}>
               {rate}
            </span>
         </div>
         <span className="text-xs font-bold uppercase">{name}</span>
      </div>
   );
};

export default Stat;
