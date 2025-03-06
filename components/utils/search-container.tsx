import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SearchContainer = ({
   name,
   path,
   children,
}: {
   name: string;
   path: string;
   children: React.ReactNode;
}) => {
   return (
      <div className="flex flex-col gap-2">
         <div className="flex items-center justify-between">
            <h1 className='text-sm font-bold'>{name}</h1>
            <Link href={path}>
               <ChevronRightIcon />
            </Link>
         </div>
         <main className='rounded-md overflow-hidden w-full'>{children}</main>
      </div>
   );
};

export default SearchContainer;
