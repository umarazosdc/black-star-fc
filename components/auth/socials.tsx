import React from 'react';
import TwitterButton from '@/components/auth/twitter-button';
import GoogleButton from '@/components/auth/google-button';
import FacebookButton from '@/components/auth/facebook-button';

const Socials = () => {
   return (
      <div className="flex items-center justify-between w-full gap-4">
         <TwitterButton />
         <GoogleButton />
         <FacebookButton />
      </div>
   );
};

export default Socials;
