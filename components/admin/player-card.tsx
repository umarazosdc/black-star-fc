'use client';
import React from 'react';
import Age from '../utils/age';
import Button from '../utils/button';
import { CldImage } from 'next-cloudinary';
import { removePlayerById } from '@/lib/database/queries';
import { toast } from 'sonner';

const PlayerCard = ({
   src,
   name,
   position,
   age,
   id,
   videos,
}: {
   src: string[];
   name: string;
   position: string;
   age: number;
   id: string;
   videos?: string[];
}) => {
   const handleRemovePlayer = async () => {
      const data = {
         images: Array.isArray(src) ? src : [src],
         videos: Array.isArray(videos) ? videos : [],
      };

      try {
         const response = await fetch('/api/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
         });

         if (!response.ok) {
            throw new Error('Failed to delete media from Cloudinary');
         }

         // Only remove player from the database if the deletion succeeded
         await removePlayerById(id);
         toast.success(`${name} was successfully removed.`);
      } catch (error) {
         console.error('Error trying to delete player: ', error);
         toast.error('Error trying to delete player.');
      }
   };

   return (
      <div className="flex flex-col gap-4 shadow-md p-4 bg-card rounded-md">
         <div className="self-start flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
               <CldImage
                  src={src[0] ?? '/default-image.jpg'}
                  alt="Player"
                  className="rounded-full size-[5.5rem]"
                  width={400}
                  height={400}
               />
               <div className="flex flex-col gap-2">
                  <div className="text-base font-bold tracking-wide">
                     {name}
                  </div>
                  <div className="text-sm font-bold opacity-70 capitalize">
                     {position}
                  </div>
               </div>
            </div>
            <Age age={age} />
         </div>
         <div className="self-end flex items-center gap-4">
            <Button className="bg-secondary text-primary">Edit</Button>
            <Button
               className="bg-red-600 text-primary"
               onClick={handleRemovePlayer}
            >
               Remove
            </Button>
         </div>
      </div>
   );
};

export default PlayerCard;
