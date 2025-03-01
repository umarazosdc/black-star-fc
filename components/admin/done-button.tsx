'use client';
import { addNewPlayers } from '@/lib/validations';
import React from 'react';
import { toast } from 'sonner';

const DoneButton = () => {
   const handleAddNewPlayers = async () => {
      await addNewPlayers().then((data) => {
         if (data.error) {
            toast.error(data.error);
         } else {
            toast.success(data.success);
         }
      });
   };
   return (
      <button
         className="bg-accent text-primary py-2.5 px-6 text-sm rounded-md cursor-pointer"
         onClick={handleAddNewPlayers}
      >
         Done
      </button>
   );
};

export default DoneButton;
