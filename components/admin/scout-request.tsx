import React from 'react';
import Wrapper from '../utils/wrapper';
import UserCard from './user-card';
import { formatDate } from '@/lib/date';
import PlayerImage from '../utils/player-image';
import ScoutRequestsSkeleton from '../skeleton/scout-requests-skeleton';

const ScoutRequest = () => {
   const date = formatDate('2024-01-03');
   return (
      <Wrapper title="Scout requests">
         <div className="flex flex-col gap-6 overflow-auto max-h-80 pb-1">
            {/* Add on click to the take admin to user's page */}
            <UserCard
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
               playerName="Lamine Yamal"
               isAdminDashboard
               playersAge={16}
            >
               <PlayerImage src="/imgs/players/mal.jpg" position="Winger" />
            </UserCard>
            <UserCard
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
               playerName="Lamine Yamal"
               isAdminDashboard
               playersAge={16}
            >
               <PlayerImage src="/imgs/players/mal.jpg" position="Winger" />
            </UserCard>
            <UserCard
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
               playerName="Lamine Yamal"
               isAdminDashboard
               playersAge={16}
            >
               <PlayerImage src="/imgs/players/mal.jpg" position="Winger" />
            </UserCard>
            <UserCard
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
               playerName="Lamine Yamal"
               isAdminDashboard
               playersAge={16}
            >
               <PlayerImage src="/imgs/players/mal.jpg" position="Winger" />
            </UserCard>
            <UserCard
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
               playerName="Lamine Yamal"
               isAdminDashboard
               playersAge={16}
            >
               <PlayerImage src="/imgs/players/mal.jpg" position="Winger" />
            </UserCard>
            <UserCard
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
               playerName="Lamine Yamal"
               isAdminDashboard
               playersAge={16}
            >
               <PlayerImage src="/imgs/players/mal.jpg" position="Winger" />
            </UserCard>
            <ScoutRequestsSkeleton />
         </div>
      </Wrapper>
   );
};

export default ScoutRequest;
