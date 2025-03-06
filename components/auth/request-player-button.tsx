'use client';
import React from 'react';
import Button from '../homepage/button';
import { toast } from 'sonner';
import { requestPlayer } from '@/lib/database/queries';

const RequestPlayerButton = ({
   userId,
   playerId,
}: {
   userId: string;
   playerId: string;
}) => {
   const handleRequestPlayer = async () => {
      try {
         await requestPlayer(userId, playerId);
         toast.success('Successfully sent a request');
      } catch {
         toast.error('Failed to request player');
      }
   };
   return (
      <Button
         className="bg-accent text-primary w-full"
         onClick={handleRequestPlayer}
      >
         Request for Player
      </Button>
   );
};

export default RequestPlayerButton;
