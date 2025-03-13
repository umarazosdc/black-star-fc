import { cn } from '@/lib/utils';
import React from 'react';

const Wrapper = ({
   title,
   className,
   children,
}: {
   title: string;
   className?: string;
   children: React.ReactNode;
}) => {
   return (
      <div className={cn('flex flex-col space-y-3 w-full', className)}>
         <h2 className="self-start text-base font-bold">{title}</h2>
         <main className="self-start w-full">{children}</main>
      </div>
   );
};

export default Wrapper;
