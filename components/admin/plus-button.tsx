'use client';
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
         <AlertDialogContent className="max-h-[35rem] overflow-auto">
            <AlertDialogHeader>
               <AlertDialogTitle>Add new player</AlertDialogTitle>
               <AlertDialogDescription>
                  Enter all the neccesary player&#39;s details
               </AlertDialogDescription>
            </AlertDialogHeader>
            <NewPlayersForm />
            <AlertDialogFooter>
               <AlertDialogCancel className="hover:bg-secondary transition-colors duration-300">
                  Cancel
               </AlertDialogCancel>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
};

export default PlusButton;
