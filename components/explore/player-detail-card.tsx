import React from 'react';

const PlayerDetailCard = ({
   ft,
   kg,
   label,
   value,
}: {
   ft?: boolean;
   kg?: boolean;
   label: string;
   value: string | number;
}) => {
   return (
      <div className="flex flex-col items-start justify-center rounded-md shadow-md gap-0.5 text-secondary bg-card w-28 h-14 px-2">
         <h2 className="text-xs opacity-70">{label}</h2>
         <div className="flex items-center gap-1">
            <p className="text-base font-bold">{value}</p>
            {kg && <span className="text-xs font-normal">kg</span>}
            {ft && <span className="text-xs font-normal">ft</span>}
         </div>
      </div>
   );
};

export default PlayerDetailCard;
