import { PencilIcon } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import CldImg from './cldimg';
import useSessionHook from '@/lib/hook/use-session';

const SheetHeader = () => {
   const user = useSessionHook();
   return (
      <div className="flex justify-between items-center py-4 border-b">
         <div className="flex items-center gap-4 w-full">
            <CldImg
               src={user?.image ? user.image : 'uploads/images/defaultjpg'}
               alt="User image"
               className="rounded-full size-10 border"
            />
            <div className="flex flex-col items-start gap-1 w-full overflow-hidden">
               <h2 className="font-bold text-sm">{user?.name}</h2>
               <p className="text-xs opacity-70">{user?.email}</p>
            </div>
         </div>
         <Link
            href="/profile/edit"
            className="p-2 rounded-full border text-accent"
         >
            <PencilIcon className="size-3" strokeWidth={3} />
            <div className="sr-only">Edit</div>
         </Link>
      </div>
   );
};

export default SheetHeader;
