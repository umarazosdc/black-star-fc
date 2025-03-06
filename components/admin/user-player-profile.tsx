import React from 'react';
import AdminSearchDisplay from './admin-search-display';
import { getPlayersBySearch, getUsersBySearch } from '@/lib/database/queries';
import ImageDisplayCard from './image-display-card';

const UserPlayerProfile = async ({ search }: { search: string }) => {
   const users = await getUsersBySearch(search);
   const players = await getPlayersBySearch(search);
   return (
      <AdminSearchDisplay>
         {players.length > 0 &&
            players.map((player, key) =>
               player.image ? (
                  <ImageDisplayCard
                     key={key}
                     src={
                        player.image
                           ? player.image
                           : 'uploads/images/defaultjpg'
                     }
                     alt="Player image"
                  />
               ) : null
            )}
         {users.length > 0 &&
            users.map((user, key) =>
               user.image ? (
                  <ImageDisplayCard
                     key={key}
                     src={user.image ? user.image : 'uploads/images/defaultjpg'}
                     alt="User image"
                  />
               ) : null
            )}
         {!(users.length > 0) && !(players.length > 0) && (
            <p className="text-sm">Search is not available</p>
         )}
      </AdminSearchDisplay>
   );
};

export default UserPlayerProfile;
