'use client'
import React from 'react';
import Img from '../utils/image';
import Button from '../utils/button';
import Icontext from '../utils/icontext';
import { Clock3Icon, MailIcon, MailsIcon } from 'lucide-react';
import {
   Dialog,
   DialogTrigger,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogFooter,
   DialogDescription,
} from '../ui/dialog';
import Age from '../utils/age';

const UserCard = ({
   src,
   name,
   email,
   date,
   isAdminDashboard,
   playerName,
   playersAge,
   children,
}: {
   src: string;
   name: string;
   email: string;
   date: string;
   isAdminDashboard?: boolean;
   children?: React.ReactNode;
   playerName?: string;
   playersAge?: number;
}) => {
   const [accept, setAccept] = React.useState<boolean>(false);
   const handleRequest = () => {
      setAccept(!accept);
   };
   return (
      <div className="flex flex-col gap-4 shadow-md p-4 bg-card rounded-md">
         <div className="self-start flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
               <div className="relative size-[5rem]">
                  <Img src={src} alt="Player" className="rounded-full border" />
               </div>
               <div className="flex flex-col gap-2">
                  <div className="text-base font-bold tracking-wide truncate w-48">
                     {name}
                  </div>
                  {!isAdminDashboard && (
                     <Icontext icon={MailIcon} className="w-52">
                        {email}
                     </Icontext>
                  )}
                  {isAdminDashboard ? (
                     // Add dialog to display player
                     <Dialog>
                        <DialogTrigger>
                           <Icontext
                              icon={MailsIcon}
                              className="cursor-pointer"
                           >
                              Requesting <b>{playerName}</b>
                           </Icontext>
                           <DialogContent>
                              <DialogHeader>
                                 <DialogTitle>{playerName}</DialogTitle>
                                 <DialogDescription></DialogDescription>
                              </DialogHeader>
                              {children}
                              <DialogFooter>
                                 <Age age={playersAge} className="self-end" />
                              </DialogFooter>
                           </DialogContent>
                        </DialogTrigger>
                     </Dialog>
                  ) : (
                     <Icontext icon={Clock3Icon}>
                        Joined <b>{date}</b>
                     </Icontext>
                  )}
               </div>
            </div>
         </div>
         {isAdminDashboard ? (
            accept ? (
               <Button
                  className="self-end bg-red-600 text-primary"
                  onClick={handleRequest}
               >
                  Cancel
               </Button>
            ) : (
               <div className="self-end flex items-center gap-4">
                  <Button
                     className="bg-emerald-500 text-primary"
                     onClick={handleRequest}
                  >
                     Accept
                  </Button>
                  <Button className="bg-red-600 text-primary">Reject</Button>
               </div>
            )
         ) : (
            <div className="self-end flex items-center gap-4">
               <Button className="bg-secondary text-primary">Supense</Button>
               <Button className="bg-red-600 text-primary">Delete</Button>
            </div>
         )}
      </div>
   );
};

export default UserCard;
