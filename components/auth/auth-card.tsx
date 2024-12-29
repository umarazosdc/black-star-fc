import React from 'react';
import Socials from './socials';
import Link from 'next/link';
import { DotIcon } from 'lucide-react';

const AuthCard = ({
   isLogin,
   children,
}: {
   isLogin?: boolean;
   children: React.ReactNode;
}) => {
   return (
      <div className="flex flex-col justify-center gap-12 bg-primary rounded-tl-[3rem] p-4">
         {isLogin && (
            <header className="flex justify-center mt-8">
               <h1 className="font-bold text-secondary text-base">Login</h1>
            </header>
         )}

         <main>{children}</main>
         <footer className="flex flex-col justify-center items-center gap-8 w-full">
            <div className="flex gap-2 items-center">
               <DotIcon className='text-muted-foreground'/>
               <p className="text-sm text-muted-foreground">Or sign in with</p>
               <DotIcon className='text-muted-foreground'/>
            </div>

            <Socials />
            {isLogin ? (
               <p className="text-sm text-secondary mt-8">
                  Don&apos;t have an account?{' '}
                  <Link href="/auth/register">
                     <b>Sign up</b>
                  </Link>
               </p>
            ) : (
               <p className="text-sm text-secondary mt-8">
                  Already have an account?{' '}
                  <Link href="/auth/login">
                     <b>Sign in</b>
                  </Link>
               </p>
            )}
         </footer>
      </div>
   );
};

export default AuthCard;
