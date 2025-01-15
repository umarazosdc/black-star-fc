import React from 'react';
import {
   AlertDialog,
   AlertDialogContent,
   AlertDialogHeader,
   AlertDialogTrigger,
   AlertDialogTitle,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogAction,
   AlertDialogCancel,
} from '../ui/alert-dialog';

const PromptsDialog = ({
   title,
   description,
   children,
}: {
   title?: string;
   description?: string;
   children: React.ReactNode;
}) => {
   return (
      <AlertDialog>
         <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>{title}</AlertDialogTitle>
               <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel className='bg-secondary text-primary hover:bg-secondary hover:text-primary'>No</AlertDialogCancel>
               <AlertDialogAction className='bg-red-600 text-primary hover:bg-red-500 hover:text-primary'>Yes</AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
};

export default PromptsDialog;
