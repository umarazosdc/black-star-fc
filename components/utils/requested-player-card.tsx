import React from 'react';
import PlayerImage from './player-image';
import Link from 'next/link';
import Age from './age';
import { cn } from '@/lib/utils';
import Tag from './tag';

const RequestedPlayerCard = ({
   src,
   position,
   name,
   age,
   className,
   id,
   ...props
}: {
   src: string;
   position: string;
   name: string;
   age: number;
   id: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
   return (
      <Link href={`/explore/player?id=${id}`}>
         <div
            className={cn(
               'shadow-md rounded-md bg-card border-t border-r flex flex-col gap-2 p-3 text-secondary select-none cursor-pointer w-full',
               className
            )}
            {...props}
         >
            <PlayerImage src={src} position={position} />
            <div className="flex flex-col gap-2">
               <h2 className="font-bold text-sm">{name}</h2>
               <Age age={age} className="self-end" />
            </div>
            <Tag tag="Pending" className="bg-orange-500 text-primary" />
         </div>
      </Link>
   );
};

export default RequestedPlayerCard;
