import React from 'react';
import Img from '../utils/image';
import Age from '../utils/age';
import Button from '../utils/button';

const Player = ({
   src,
   name,
   position,
   age,
}: {
   src: string;
   name: string;
   position: string;
   age: number;
}) => {
   return (
      <div className="flex flex-col gap-4 shadow-md p-4 bg-card rounded-md">
         <div className="self-start flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
               <div className="relative size-[4.5rem]">
                  <Img src={src} alt="Player" className="rounded-full border" />
               </div>
               <div className="flex flex-col gap-2">
                  <div className="text-base font-bold tracking-wide">
                     {name}
                  </div>
                  <div className="text-sm font-bold opacity-70">{position}</div>
               </div>
            </div>
            <Age age={age} />
         </div>
         <div className="self-end flex items-center gap-4">
            <Button className="bg-secondary text-primary">Edit</Button>
            <Button className="bg-red-600 text-primary">Remove</Button>
         </div>
      </div>
   );
};

export default Player;
