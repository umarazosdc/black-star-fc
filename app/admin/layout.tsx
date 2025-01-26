import AdminBottomNavigationBar from '@/components/admin/admin-bottom-navigation-bar';
import React from 'react';

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="min-h-screen flex flex-col">
         <main className="flex-grow mt-6 px-4 overflow-y-auto pb-4">
            {children}
         </main>
         <AdminBottomNavigationBar />
      </div>
   );
};

export default AdminDashboardLayout;
