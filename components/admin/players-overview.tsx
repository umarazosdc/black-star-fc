import React from 'react';
import AdminPlayersSkeleton from '../skeleton/admin-players-skeleton';
import PlayerCard from './player-card';
import SectionWrapper from '../utils/section-wrapper';

const PlayersOverview = () => {
   return (
      <SectionWrapper
         title="Players"
         label="Add player"
         link="/admin/dashboard/new"
      >
         <div className="flex flex-col gap-6 overflow-auto max-h-80 pb-1">
            {/* Add on click to the take admin to user's page */}
            <PlayerCard
               src="/imgs/players/player.jpg"
               name="Ahmed Abdullahi"
               position="Striker"
               age={16}
            />
            <PlayerCard
               src="/imgs/players/player.jpg"
               name="Ahmed Abdullahi"
               position="Striker"
               age={16}
            />
            <PlayerCard
               src="/imgs/players/player.jpg"
               name="Ahmed Abdullahi"
               position="Striker"
               age={16}
            />
            <PlayerCard
               src="/imgs/players/player.jpg"
               name="Ahmed Abdullahi"
               position="Striker"
               age={16}
            />
            <PlayerCard
               src="/imgs/players/player.jpg"
               name="Ahmed Abdullahi"
               position="Striker"
               age={16}
            />
            <PlayerCard
               src="/imgs/players/player.jpg"
               name="Ahmed Abdullahi"
               position="Striker"
               age={16}
            />
            <AdminPlayersSkeleton />
         </div>
      </SectionWrapper>
   );
};

export default PlayersOverview;
