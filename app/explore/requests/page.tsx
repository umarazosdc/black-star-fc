import { auth } from '@/auth';
import GridWrappers from '@/components/utils/grid-wrappers';
import RequestedPlayerCard from '@/components/utils/requested-player-card';
import Wrapper from '@/components/utils/wrapper';
import { getRequestedPlayersById } from '@/lib/database/queries';
import React from 'react';

const RequestsPage = async() => {
   const session = await auth();
   const id = session?.user.id;
   const requests = await getRequestedPlayersById(id as string);
   return (
     <Wrapper title="Requests">
       <GridWrappers>
         {requests.map((req, key) => (
           <RequestedPlayerCard
             key={key}
             src={req.player.image}
             position={req.player.position}
             age={req.player.age}
             id={req.player.id}
             name={req.player.firstname + " " + req.player.lastname}
           />
         ))}
       </GridWrappers>
     </Wrapper>
   );
};

export default RequestsPage;
