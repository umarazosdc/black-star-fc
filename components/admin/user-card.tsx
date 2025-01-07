import React from 'react';
import Img from '../utils/image';
import Button from '../utils/button';
import Icontext from '../utils/icontext';
import { Clock3Icon, MailIcon } from 'lucide-react';

const UserCard = ({
   src,
   name,
   email,
   date,
}: {
   src: string;
   name: string;
   email: string;
   date: string;
}) => {
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
                  <Icontext icon={MailIcon} className='w-52'>{email}</Icontext>
                  <Icontext icon={Clock3Icon}>
                     Joined <b>{date}</b>
                  </Icontext>
               </div>
            </div>
         </div>
         <div className="self-end flex items-center gap-4">
            <Button className="bg-secondary text-primary">Supense</Button>
            <Button className="bg-red-600 text-primary">Delete</Button>
         </div>
      </div>
   );
};

export default UserCard;
