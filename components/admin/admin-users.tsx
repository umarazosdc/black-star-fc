import React from 'react';
import SearchContainer from '@/components/utils/search-container';
import { getUsers } from '@/lib/database/queries';
import CldImg from '@/components/utils/cldimg';

const AdminUsers = async () => {
   const users = await getUsers();
   const userSubset = users.slice(0, 4);
   return (
      <SearchContainer path="/admin/dashboard/users" name="Users">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userSubset.map((user) => (
               <CldImg
                  key={user.id}
                  src={user.image as string}
                  alt={'User image'}
                  className="h-36"
               />
            ))}
         </div>
      </SearchContainer>
   );
};

export default AdminUsers;
