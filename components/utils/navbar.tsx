import Link from 'next/link';
import React from 'react';
import Img from '@/components/utils/image';
import RightBar from '@/components/utils/right-bar';
import {
   Sheet,
   SheetContent,
   SheetTrigger,
   SheetTitle,
   SheetHeader,
   SheetFooter,
} from '@/components/ui/sheet';

const Navbar = () => {
   return (
      <div className="flex justify-between items-center p-4 w-full bg-primary sticky top-0 z-50 border-b px-4">
         <Link href="/">
            <div className="relative size-[3.2rem] select-none">
               <Img src="/imgs/logo/logo.jpg" alt="Logo" />
            </div>
         </Link>
         <Sheet>
            <SheetTrigger>
               <RightBar />
            </SheetTrigger>
            <SheetContent>
               <SheetHeader>
                  <SheetTitle>DC</SheetTitle>
               </SheetHeader>
               Hello world
               <SheetFooter>Dream Chaser</SheetFooter>
            </SheetContent>
         </Sheet>
      </div>
   );
};

export default Navbar;
