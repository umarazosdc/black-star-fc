import React from 'react';
import PlayerDetailCard from './player-detail-card';

const PlayerDetails = ({
   nationality,
   height,
   weight,
   dob,
   position,
   side,
}: {
   nationality: string;
   height: number;
   weight: number;
   dob: string;
   position: string;
   side: string;
}) => {
   return (
      <div className="grid grid-cols-2 gap-4">
         <PlayerDetailCard label="Nationality" value={nationality} />
         <PlayerDetailCard label="Position" value={position} />
         <PlayerDetailCard label="Height" value={height} ft />
         <PlayerDetailCard label="Side" value={side} />
         <PlayerDetailCard label="D O B" value={dob} />
         <PlayerDetailCard label="Weight" value={weight} kg />
      </div>
   );
};

export default PlayerDetails;
