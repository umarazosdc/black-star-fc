import { PencilIcon } from 'lucide-react';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const SheetHeader = () => {
   return (
      <div className="flex justify-between items-center py-4 border-b">
         <div className="flex items-center gap-4 w-full">
            <Avatar className="border">
               <AvatarImage src="/imgs/users/scout/dc.jpg" />
               <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start gap-1 w-full overflow-hidden">
               <h2 className="font-bold text-sm">Umar Isa</h2>
               <p className="text-xs opacity-70">malamisa360@gmail.com</p>
            </div>
         </div>
         <button className="p-2 rounded-full border text-accent">
            <PencilIcon className="size-3" strokeWidth={3} />
            <div className="sr-only">Edit</div>
         </button>
      </div>
   );
};

export default SheetHeader;
