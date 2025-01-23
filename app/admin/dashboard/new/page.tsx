import AddPlayerCard from '@/components/admin/add-player-card';
import PlusButton from '@/components/admin/plus-button';
import Button from '@/components/utils/button';
import GridWrappers from '@/components/utils/grid-wrappers';
import SectionWrapper from '@/components/utils/section-wrapper';
import React from 'react';

const AddNewPlayersPage = () => {
   return (
      <SectionWrapper title="Add player" link="#" label="Done">
         <GridWrappers>
            <AddPlayerCard name="Ahmed Abdullahi" age={16} position="winger" />
            <AddPlayerCard name="Ahmed Abdullahi" age={16} position="winger" />
            <PlusButton />
         </GridWrappers>
         <footer className="flex justify-end mt-16">
            <Button className="bg-accent text-primary py-2.5 px-6">Done</Button>
         </footer>
      </SectionWrapper>
   );
};

export default AddNewPlayersPage;
