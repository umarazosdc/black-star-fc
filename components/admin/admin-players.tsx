import React from 'react';
import SearchContainer from '@/components/utils/search-container';
import { getPlayers } from '@/lib/database/queries';
import CldImg from '@/components/utils/cldimg';

const AdminPlayers = async () => {
   const players = await getPlayers();
   const playerSubset = players.slice(0, 4);
   return (
      <SearchContainer path="/admin/dashboard/players" name="Players">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {playerSubset.map((player) => (
               <CldImg
                  key={player.id}
                  src={player.image}
                  alt={'Player image'}
                  className="h-36"
               />
            ))}
         </div>
      </SearchContainer>
   );
};

export default AdminPlayers;
