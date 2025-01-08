import React from 'react';

const StatusCard = ({ value, label }: { value: number; label: string }) => {
   return (
      <div className="w-full aspect-square rounded-md shadow-md flex flex-col gap-2 justify-center items-center bg-accent text-primary">
         <span className="text-5xl font-bold">{value}</span>
         <span className="text-sm opacity-70 font-bold">{label}</span>
      </div>
   );
};

export default StatusCard;
