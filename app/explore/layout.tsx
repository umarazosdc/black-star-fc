import Sidebar from '@/components/utils/sidebar';
import React from 'react';

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="min-h-screen flex flex-col">
         <Sidebar />
         <main className="flex-grow mt-12 px-4">{children}</main>
      </div>
   );
};

export default ExploreLayout;
