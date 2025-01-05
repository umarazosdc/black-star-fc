import NavbarMain from '@/components/utils/navbar-main';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="min-h-screen flex flex-col">
         <NavbarMain />
         <main className="flex-grow mt-8 px-4">{children}</main>
      </div>
   );
};

export default DashboardLayout;
