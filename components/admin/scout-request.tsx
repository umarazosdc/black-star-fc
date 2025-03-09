import React from 'react';
import Wrapper from '../utils/wrapper';
import UserCard from './user-card';
import PlayerImage from '../utils/player-image';
import { requests } from '@/lib/database/queries';
import { formatDate, getAge } from '@/lib/date';

const ScoutRequest = async () => {
   const rqsts = await requests();
   return (
      <Wrapper title="Who requested for players">
         <div className="flex flex-col gap-3 overflow-auto max-h-[25rem] rounded-md shadow-md border border-secondary">
            {rqsts.map((rqst, key) => (
               <UserCard
                  key={key}
                  src={rqst.user.image as string}
                  name={rqst.user.name}
                  email={rqst.user.email}
                  date={formatDate(String(rqst.user.createdAt))}
                  playerName={
                     rqst.player.firstname + ' ' + rqst.player.lastname
                  }
                  isAdminDashboard
                  playersAge={getAge(rqst.player.dob)}
                  userId={rqst.user.id}
               >
                  <PlayerImage
                     src={rqst.player.image}
                     position={rqst.player.position}
                  />
               </UserCard>
            ))}
         </div>
      </Wrapper>
   );
};

export default ScoutRequest;
