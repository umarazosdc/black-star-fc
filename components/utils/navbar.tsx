import Link from 'next/link';
import React from 'react';
import Img from '@/components/utils/image';
import RightBar from '@/components/utils/right-bar';

const Navbar = () => {
   return (
      <div className="flex justify-between items-center py-4 w-full bg-primary sticky top-0">
         <Link href="#">
            <div className="relative size-10">
               <Img src="/imgs/logo/logo.jpg" alt="Logo" />
            </div>
         </Link>
         <RightBar />
      </div>
   );
};

export default Navbar;
