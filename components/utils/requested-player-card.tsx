import React from 'react';
import PlayerImage from './player-image';
import Link from 'next/link';
import Age from './age';
import { cn } from '@/lib/utils';
import Tag from './tag';
import { Button } from '../ui/button';

const RequestedPlayerCard = ({
   src,
   position,
   name,
   age,
   className,
   ...props
}: {
   src: string;
   position: string;
   name: string;
   age: number;
} & React.HTMLAttributes<HTMLDivElement>) => {
   return (
      <Link href="/explore/player">
         <div
            className={cn(
               'shadow-md rounded-md bg-card border-t border-r flex flex-col gap-4 p-3 text-secondary select-none cursor-pointer w-full',
               className
            )}
            {...props}
         >
            <PlayerImage src={src} position={position} />
            <div className="flex flex-col gap-4">
               <h2 className="font-bold text-sm">{name}</h2>
               <div className="flex justify-between items-center">
                  <Age age={age} />
                  <Tag tag="Approved" className="bg-emerald-500 text-primary" />
               </div>
               </div>
               <Button className='bg-red-500 text-primary w-full'>Cancel</Button>
         </div>
      </Link>
   );
};

export default RequestedPlayerCard;
