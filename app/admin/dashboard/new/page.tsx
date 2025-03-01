import AddPlayerCard from '@/components/admin/add-player-card';
import DoneButton from '@/components/admin/done-button';
import PlusButton from '@/components/admin/plus-button';
import GridWrappers from '@/components/utils/grid-wrappers';
import SectionWrapper from '@/components/utils/section-wrapper';
import { getPreUploadedPlayers } from '@/lib/database/queries';
import React from 'react';

const AddNewPlayersPage = async () => {
   const players = await getPreUploadedPlayers();

   return (
      <SectionWrapper title="Add player" link="#" label="Done">
         <GridWrappers>
            {players.map((player, key) => (
               <AddPlayerCard
                  name={player.firstname + ' ' + player.lastname}
                  age={player.dob}
                  position={player.position}
                  key={key}
                  statImg={player.image}
               />
            ))}
            <PlusButton />
         </GridWrappers>
         <footer className="flex justify-end mt-8">
            <DoneButton />
         </footer>
      </SectionWrapper>
   );
};

export default AddNewPlayersPage;
