import React from 'react';
import SearchContainer from '@/components/utils/search-container';
import { getPlayers } from '@/lib/database/queries';
import CldImg from '@/components/utils/cldimg';

const AdminPlayers = async () => {
   const players = await getPlayers();
   const playerSubset = players.slice(0, 4);
   return (
      <SearchContainer path="/admin/dashboard/players" name="Players">
         <div className="columns-2 gap-2 space-y-2">
            {playerSubset.map((player) => (
               <CldImg
                  key={player.id}
                  src={player.thumbnail}
                  alt={'Player image'}
                  className="shadow-md rounded-md"
               />
            ))}
         </div>
      </SearchContainer>
   );
};

export default AdminPlayers;
