import React from 'react';
import PlayerDetailCard from './player-detail-card';

const PlayerDetails = () => {
   return (
      <div className="grid grid-cols-2 gap-8">
         <PlayerDetailCard label="Nationality" value={'Nigerian'} />
         <PlayerDetailCard label="Position" value={'Forward'} />
         <PlayerDetailCard label="Height" value={6} ft />
         <PlayerDetailCard label="D O B" value={'12-12-09'} />
         <PlayerDetailCard label="Weight" value={'84'} kg />
      </div>
   );
};

export default PlayerDetails;
