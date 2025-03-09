import React from 'react';
import PlayerCard from './player-card';
import SectionWrapper from '../utils/section-wrapper';
import { getPlayers } from '@/lib/database/queries';
import { auth } from '@/auth';
import { getAge } from '@/lib/date';

const PlayersOverview = async () => {
   const session = await auth();
   const user = session?.user;
   const players = await getPlayers(user?.id as string);
   return (
      <SectionWrapper
         title="Players"
         label="Add player"
         link="/admin/dashboard/new"
      >
         <div className="flex flex-col gap-3 overflow-auto max-h-[25rem] rounded-md shadow-md border border-secondary">
            {players.map((player, key) => (
               <PlayerCard
                  key={key}
                  src={[player.image]}
                  name={player.firstname + ' ' + player.lastname}
                  position={player.position}
                  age={getAge(player.dob)}
                  videos={player.videos}
                  id={player.id}
               />
            ))}
         </div>
      </SectionWrapper>
   );
};

export default PlayersOverview;
