import { Separator } from '@/components/ui/separator';
import React from 'react';

const NotFound = () => {
   return (
      <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2">
         <div className="flex items-center gap-2">
            <h1 className="font-bold text-4xl">404</h1>
            <Separator orientation="vertical" />
            <p className="text-sm text-muted-foreground">
               Page could not be found.
            </p>
         </div>
      </div>
   );
};

export default NotFound;
