import { PlusIcon } from 'lucide-react';
import React from 'react';
import {
   AlertDialog,
   AlertDialogContent,
   AlertDialogTrigger,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import NewPlayersForm from '../explore/new-players-form';

const PlusButton = () => {
   return (
      <AlertDialog>
         <AlertDialogTrigger asChild>
            <button className="shadow-md rounded-md bg-card flex justify-center items-center min-h-72">
               <PlusIcon className="text-accent size-40" />
            </button>
         </AlertDialogTrigger>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>Add new player</AlertDialogTitle>
               <AlertDialogDescription>
                  Enter all the neccesary player&#39;s details
               </AlertDialogDescription>
            </AlertDialogHeader>
            <NewPlayersForm />
            <AlertDialogFooter>
               <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
};

export default PlusButton;
