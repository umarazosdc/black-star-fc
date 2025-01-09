import React from 'react';

const StatusCard = ({ value, name }: { value: number; name: string }) => {
   return (
      <div className="w-full aspect-square rounded-md shadow-md flex flex-col gap-2 justify-center items-center bg-accent text-primary">
         <span className="text-5xl font-bold">
            {value.toString().length >= 4 ? value.toString().slice(0, 1) + "K" : value}
         </span>
         <span className="text-sm opacity-70 font-bold">{name}</span>
      </div>
   );
};

export default StatusCard;
