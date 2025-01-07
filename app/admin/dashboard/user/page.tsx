import UserAboutContent from '@/components/admin/about-user-content';
import Img from '@/components/utils/image';
import React from 'react';

const UserAboutPage = () => {
   return (
      <div className="absolute inset-0 w-full h-full overflow-auto">
         {/* Use a wrapper to reset padding and ensure proper layout */}
         <div className="-mx-4 relative w-full h-full">
            <UserAboutContent className="relative top-40 p-8 pt-12 border-t" />
            <div className="size-20 absolute top-28 left-8">
               <Img src="/imgs/users/scout/dc2.jpg" alt="Scout" className='rounded-full border'/>
            </div>
         </div>
      </div>
   );
};

export default UserAboutPage;
