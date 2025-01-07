'use client';
import React from 'react';
import PlayerImage from './player-image';
import { BookmarkIcon } from 'lucide-react';
import Link from 'next/link';
import Age from './age';
import { cn } from '@/lib/utils';

const BookmarkedPlayerCard = ({
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
   const [bookmarked, setBookmark] = React.useState<boolean>(false);
   const handleBookmark = (e: React.MouseEvent<SVGElement>) => {
      /**
       * Let Bookmark icon status ONLY reflect
       * after getting it from the database
       */
      e.preventDefault();
      setBookmark(!bookmarked);
   };
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
                  {bookmarked ? (
                     <BookmarkIcon
                        className="text-accent cursor-pointer size-9"
                        onClick={(e) => {
                           handleBookmark(e);
                        }}
                        fill="#E76D57"
                     />
                  ) : (
                     <BookmarkIcon
                        className="text-accent cursor-pointer size-9"
                        onClick={(e) => {
                           handleBookmark(e);
                        }}
                     />
                  )}
               </div>
            </div>
         </div>
      </Link>
   );
};

export default BookmarkedPlayerCard;
