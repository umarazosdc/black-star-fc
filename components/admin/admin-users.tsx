import React from 'react';
import SearchContainer from '@/components/utils/search-container';
import { getUsers } from '@/lib/database/queries';
import CldImg from '@/components/utils/cldimg';

const AdminUsers = async () => {
   const users = await getUsers();
   const userSubset = users.slice(0, 4);
   return (
      <SearchContainer path="/admin/dashboard/users" name="Users">
         <div className="columns-2 gap-2 space-y-2">
            {userSubset.map((user) => (
               <CldImg
                  key={user.id}
                  src={user.image ? user.image : 'uploads/images/defaultjpg'}
                  alt={'User image'}
                  className="shadow-md rounded-md"
               />
            ))}
         </div>
      </SearchContainer>
   );
};

export default AdminUsers;
