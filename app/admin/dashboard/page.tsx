import Link from 'next/link';
import React from 'react';

const AdminDashboardPage = () => {
   return (
      <div className='flex flex-col items-center gap-12'>
         <p>Under construction 🚧👷🏿‍♀️</p>
         <Link href="/admin/dashboard/players" className='text-xs text-accent font-bold'>Leave page</Link>
      </div>
   );
};

export default AdminDashboardPage;
