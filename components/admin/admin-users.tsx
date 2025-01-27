import React from 'react';
import Img from '../utils/image';
import SearchContainer from '../utils/search-container';

const AdminUsers = () => {
   return (
      <SearchContainer path="/admin/dashboard/users" name="Users">
         <div className="relative h-36">
            <Img src="/imgs/users/scout/dc2.jpg" alt="Player picture" />
         </div>
         <div className="relative h-36">
            <Img src="/imgs/users/scout/dc.jpg" alt="Player picture" />
         </div>
         <div className="relative h-36">
            <Img src="/imgs/users/scout/dc2.jpg" alt="Player picture" />
         </div>
         <div className="relative h-36">
            <Img src="/imgs/users/scout/dc.jpg" alt="Player picture" />
         </div>
      </SearchContainer>
   );
};

export default AdminUsers;
