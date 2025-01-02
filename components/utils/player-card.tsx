'use client';
import React from 'react';
import PlayerImage from './player-image';
import { BookmarkIcon } from 'lucide-react';

const PlayerCard = ({
   src,
   alt,
   position,
   name,
   age,
   ...props
}: {
   src: string;
   alt: string;
   position: string;
   name: string;
   age: number;
} & React.HTMLAttributes<HTMLDivElement>) => {
   const [bookmarked, setBookmark] = React.useState<boolean>(false);
   const handleBookmark = () => {
      /**
       * Let Bookmark icon status ONLY reflect
       * after getting it from the database
       */
      setBookmark(!bookmarked);
   };
   console.log(bookmarked);
   return (
      <div
         className="shadow-md rounded-md bg-card border-t border-r flex flex-col gap-4 p-3 w-[164px] text-secondary"
         {...props}
      >
         <PlayerImage src={src} alt={alt} position={position} />
         <div className="flex flex-col gap-4">
            <h2 className="font-bold text-base">{name}</h2>
            <div className="flex justify-between items-center">
               <div className="flex items-end">
                  <span className="font-bold text-xl">{age}</span>
                  <span className="flex-end">yrs</span>
               </div>
               {bookmarked ? (
                  <BookmarkIcon
                     className="text-accent cursor-pointer"
                     onClick={handleBookmark}
                     fill="#E76D57"
                  />
               ) : (
                  <BookmarkIcon
                     className="text-accent cursor-pointer"
                     onClick={handleBookmark}
                  />
               )}
            </div>
         </div>
      </div>
   );
};

export default PlayerCard;
