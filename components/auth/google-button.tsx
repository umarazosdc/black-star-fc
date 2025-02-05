import { providerSignIn } from '@/lib/actions';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleButton = () => {
   return (
      <form
         className="w-full"
         action={async () => {
            await providerSignIn('google');
         }}
      >
         <button className="flex justify-center items-center w-full bg-card h-14 rounded-md shadow-md">
            <FcGoogle size={23} />
         </button>
      </form>
   );
};

export default GoogleButton;
