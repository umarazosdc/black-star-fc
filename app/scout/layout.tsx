import AuthBottomNavigationBar from '@/components/auth/auth-bottom-navigation';
import React from 'react';

const UserDashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="min-h-screen flex flex-col">
         <main className="flex-grow mt-6 px-4 overflow-y-auto">{children}</main>
         <AuthBottomNavigationBar />
      </div>
   );
};

export default UserDashboardLayout;
