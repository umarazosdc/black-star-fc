import BottomNavigationBar from '@/components/utils/bottom-navigation-bar';
import React from 'react';

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="min-h-screen flex flex-col">
         <main className="flex-grow mt-6 px-4 overflow-y-auto">{children}</main>
         <BottomNavigationBar />
      </div>
   );
};

export default AdminDashboardLayout;
