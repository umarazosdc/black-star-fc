import React from 'react';
import Img from '../utils/image';
import UserAboutContent from './about-user-content';

const UserAbout = () => {
   return (
      <div>
         <div className="relative size-28 z-10">
            <Img
               src="/imgs/users/scout/dc2.jpg"
               alt="Scout"
               className="rounded-full border"
            />
         </div>
         <div className="bg-card absolute top-[12rem] inset-0 z-0 border-t p-4 pt-10 overflow-auto box-border">
            <UserAboutContent />
         </div>
      </div>
   );
};

export default UserAbout;
