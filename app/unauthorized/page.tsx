import { LockIcon } from 'lucide-react';
import React from 'react';

const UnauthorizedPage = () => {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 border p-4">
         <div className="flex flex-col gap-3">
            <span className="text-4xl font-bold text-center">403</span>
            <div className="flex flex-col gap-2">
               <h1 className="text-base font-bold text-center">
                  Access Denied/Forbidden
               </h1>
               <p className="text-center text-sm text-muted-foreground">
                  The page you were trying to reach is absolutely forbidden for
                  some reason
               </p>
            </div>
         </div>
         <LockIcon className="size-[8rem] opacity-80" />
      </div>
   );
};

export default UnauthorizedPage;
