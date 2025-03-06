import React from 'react';
import AdminSearchDisplay from './admin-search-display';

const UserPlayerProfileSkeleton = () => {
   return (
      <AdminSearchDisplay className='animate-pulse'>
         <div className="w-full rounded-md shadow-md bg-gray-300 h-36" />
         <div className="w-full rounded-md shadow-md bg-gray-300 h-48" />
         <div className="w-full rounded-md shadow-md bg-gray-300 h-60" />
         <div className="w-full rounded-md shadow-md bg-gray-300 h-36" />
         <div className="w-full rounded-md shadow-md bg-gray-300 h-72" />
      </AdminSearchDisplay>
   );
};

export default UserPlayerProfileSkeleton;
