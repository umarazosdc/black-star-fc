import React from 'react';
import Img from '@/components/utils/image';
import {
   Sheet,
   SheetContent,
   SheetTrigger,
   SheetTitle,
   SheetHeader,
   SheetFooter,
} from '@/components/ui/sheet';
import LeftBar from '@/components/utils/left-bar';

const NavbarMain = () => {
   return (
      <div className="flex justify-between items-center p-4 w-full bg-primary sticky top-0 z-50 border-b">
         <Sheet>
            <SheetTrigger>
               <LeftBar />
            </SheetTrigger>
            <SheetContent>
               <SheetHeader>
                  <SheetTitle>DC</SheetTitle>
               </SheetHeader>
               Hello world
               <SheetFooter>Dream Chaser</SheetFooter>
            </SheetContent>
         </Sheet>
         <span className="uppercase font-bold text-sm tracking-wider">
            black stars fc
         </span>
         <div className="relative size-[2.5rem] select-none">
            <Img src="/imgs/users/scout/dc.jpg" alt="Profile" className='rounded-full border' />
         </div>
      </div>
   );
};

export default NavbarMain;
