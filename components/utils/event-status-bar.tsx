'use client';
import React from 'react';
import Icontext from '@/components/utils/icontext';
import { CalendarRangeIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import PromptsDialog from './prompts-dialog';
import {
   AlertDialog,
   AlertDialogContent,
   AlertDialogHeader,
   AlertDialogTrigger,
   AlertDialogTitle,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import dynamic from 'next/dynamic';

const EventContentForm = dynamic(
   () => import('@/components/admin/event-content-form'),
   { ssr: false }
);

const EventStatusBar = ({ isAdmin }: { isAdmin?: boolean }) => {
   return (
      <div className="relative flex flex-col gap-6 p-4 shadow-md rounded-md w-full bg-gradient-to-tr from-card from-65% to-primary border-r border-t overflow-hidden">
         <h2 className="font-bold text-base">Black Stars FC Football match</h2>
         <Icontext icon={MapPinIcon} className="w-4/5">
            <p className="text-sm opacity-70 text-wrap">
               Central Pilot Primary School, Akwanga
            </p>
         </Icontext>
         <div
            className={cn(
               isAdmin
                  ? 'flex justify-between items-end text-sm w-full'
                  : 'text-sm self-end'
            )}
         >
            <div className="flex flex-col gap-1">
               <span className="font-bold">16th July, 2025</span>
               <Icontext icon={ClockIcon}>
                  <span>3:30pm</span>
               </Icontext>
            </div>
            {isAdmin && (
               <div className="flex items-center gap-4 font-bold">
                  <AlertDialog>
                     <AlertDialogTrigger>Edit</AlertDialogTrigger>
                     <AlertDialogContent>
                        <AlertDialogHeader>
                           <AlertDialogTitle>Manage Event</AlertDialogTitle>
                           <AlertDialogDescription>
                              All users are seeing this.
                           </AlertDialogDescription>
                        </AlertDialogHeader>
                        <EventContentForm />
                        <AlertDialogFooter className="flex flex-col">
                           <AlertDialogCancel className="hover:bg-secondary mt-0">
                              Cancel
                           </AlertDialogCancel>
                        </AlertDialogFooter>
                     </AlertDialogContent>
                  </AlertDialog>
                  <PromptsDialog
                     title="Are you sure you want to cancel this event?"
                     description="There is no going back after you made this action"
                  >
                     <button className="text-red-600">Cancel</button>
                  </PromptsDialog>
               </div>
            )}
         </div>
         <CalendarRangeIcon className="size-20 scale-150 -rotate-[20deg] absolute top-1/2 -translate-y-1/2 left-4 z-0 opacity-5 text-accent" />
         <CalendarRangeIcon className="size-20 scale-75 -rotate-[20deg] absolute top-1/2 -translate-y-1/2 left-1/2 z-0 opacity-5 text-accent" />
         <CalendarRangeIcon className="size-20 -rotate-[20deg] absolute top-3/4 left-1/2 -translate-x-1/2 z-0 opacity-5 text-accent" />
      </div>
   );
};

export default EventStatusBar;
