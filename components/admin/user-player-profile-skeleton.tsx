import React from 'react';
import AdminSearchDisplay from './admin-search-display';

const UserPlayerProfileSkeleton = () => {
   return (
      <AdminSearchDisplay className="animate-pulse">
         {Array.from({ length: 8 }, (_, key) => (
            <div
               className="w-full rounded-md shadow-md bg-gray-300 h-36"
               key={key}
            />
         ))}
      </AdminSearchDisplay>
   );
};

export default UserPlayerProfileSkeleton;
