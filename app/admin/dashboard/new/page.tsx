import AddPlayerCard from '@/components/admin/add-player-card';
import PlusButton from '@/components/admin/plus-button';
import Button from '@/components/utils/button';
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
            <Button className="bg-accent text-primary py-2.5 px-6">Done</Button>
         </footer>
      </SectionWrapper>
   );
};

export default AddNewPlayersPage;
