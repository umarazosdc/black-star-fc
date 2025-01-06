import AddingPlayers from '@/components/admin/adding-players';
import Button from '@/components/utils/button';
import SectionWrapper from '@/components/utils/section-wrapper';
import React from 'react';

const AddNewPlayersPage = () => {
   return (
      <SectionWrapper title="Add player" link="#" label="Done">
         <AddingPlayers />
         <footer className="flex justify-end mt-16">
            <Button className="bg-accent text-primary py-2.5 px-6">Done</Button>
         </footer>
      </SectionWrapper>
   );
};

export default AddNewPlayersPage;
