import React from 'react';
import PlayerImage from '../utils/player-image';
import Button from '../utils/button';
import Age from '../utils/age';
import { getAge } from '@/lib/date';

const AddPlayerCard = ({
   name,
   age,
   position,
   statImg,
}: {
   name: string;
   age: number | string | null;
   position: string | null;
   statImg: string | null;
}) => {
   const setAge = getAge(age as string);
   return (
      <div className="shadow-md rounded-md bg-card border-t border-r flex flex-col gap-4 p-3 text-secondary select-none cursor-pointer w-full">
         <PlayerImage src={statImg} position={position} />
         <div className="flex flex-col gap-4">
            <h2 className="font-bold text-sm">{name}</h2>
            <Age age={setAge} className="self-end" />
            <div className="flex flex-col gap-2">
               <Button className="bg-secondary w-full">Edit</Button>
               <Button className="bg-red-600 w-full">Remove</Button>
            </div>
         </div>
      </div>
   );
};

export default AddPlayerCard;
