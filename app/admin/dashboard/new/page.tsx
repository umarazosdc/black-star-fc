import AddingPlayers from '@/components/admin/adding-players';
import Button from '@/components/homepage/button';
import SectionWrapper from '@/components/utils/section-wrapper';
import React from 'react';

const AddNewPlayersPage = () => {
   return (
      <SectionWrapper title="Add player" link="#" label="Done">
         <AddingPlayers />
         <footer className="flex justify-center mt-16">
            <Button className="bg-accent text-primary">Done</Button>
         </footer>
      </SectionWrapper>
   );
};

export default AddNewPlayersPage;
