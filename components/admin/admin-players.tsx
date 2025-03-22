import React from 'react';
import SearchContainer from '@/components/utils/search-container';
import { getPlayers } from '@/lib/database/queries';
import CldImg from '@/components/utils/cldimg';
import { auth } from '@/auth';

const AdminPlayers = async () => {
   const session = await auth();
   const players = await getPlayers(session?.user.id as string);
   const playerSubset = players.slice(0, 4);
   return (
      <SearchContainer path="/ad/dashboard/players" name="Players">
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
