import React from 'react';
import Wrapper from '../utils/wrapper';
import UserCard from './user-card';
import PlayerImage from '../utils/player-image';
import ScoutRequestsSkeleton from '../skeleton/scout-requests-skeleton';

interface Scout {
   id: string;
   src: string;
   name: string;
   email: string;
   date: string;
   playerName: string;
   playerAge: number;
   playerImage: string;
   playerPosition: string;
   userId:string
}

const ScoutRequest = ({
   src,
   name,
   email,
   date,
   playerAge,
   playerName,
   playerImage,
   playerPosition,
   userId
}: Scout) => {
   return (
      <Wrapper title="Who requested for players">
         <div className="flex flex-col gap-3 overflow-auto max-h-[25rem] pb-1 rounded-md shadow-md border border-secondary">
            <UserCard
               src={src}
               name={name}
               email={email}
               date={date}
               playerName={playerName}
               isAdminDashboard
               playersAge={playerAge}
               userId={userId}
            >
               <PlayerImage src={playerImage} position={playerPosition} />
            </UserCard>
            <ScoutRequestsSkeleton />
         </div>
      </Wrapper>
   );
};

export default ScoutRequest;
