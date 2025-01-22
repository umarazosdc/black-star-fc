'use client';
import React from 'react';
import GridWrappers from '../utils/grid-wrappers';
import AddPlayerCard from '@/components/admin/add-player-card';
import PlusButton from './plus-button';

const AddingPlayers = () => {
   return (
      <GridWrappers>
         <AddPlayerCard name="Ahmed Abdullahi" age={16} position="winger" />
         <AddPlayerCard name="Ahmed Abdullahi" age={16} position="winger" />
         <PlusButton />
      </GridWrappers>
   );
};

export default AddingPlayers;
