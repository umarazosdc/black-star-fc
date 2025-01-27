import React from 'react';
import Wrapper from '../utils/wrapper';
import SearchFilterBar from '../utils/search-filter-bar';
import UserCard from './user-card';
import {formatDate} from '@/lib/date';

const Users = ({ totalUsers }: { totalUsers: number }) => {
   const date = formatDate('2017-07-01');
   return (
      <Wrapper title="Users">
         <div className="flex flex-col gap-8">
            <SearchFilterBar
               placeholder="Search for users..."
               items={['A-Z', 'Newest', 'Oldest', "Suspended"]}
               basePath='/admin/dashboard/users'
            />
            <div className="flex flex-col gap-4">
               <div className="text-sm flex items-center gap-1 self-end">
                  <p>Total users:</p>
                  <span className="font-bold">{totalUsers}</span>
               </div>
               <div className="flex flex-col gap-6">
                  <UserCard
                     src="/imgs/players/mal.jpg"
                     name="Umar Isa"
                     email="malamisa360@gmail.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/players/mal.jpg"
                     name="Umar Isa"
                     email="malamisa360@gmail.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/players/mal.jpg"
                     name="Umar Isa"
                     email="malamisa360@gmail.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/players/mal.jpg"
                     name="Umar Isa"
                     email="malamisa360@gmail.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/players/mal.jpg"
                     name="Umar Isa"
                     email="malamisa360@gmail.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/players/mal.jpg"
                     name="Umar Isa"
                     email="malamisa360@gmail.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/players/mal.jpg"
                     name="Umar Isa"
                     email="malamisa360@gmail.com"
                     date={date}
                  />
               </div>
            </div>
         </div>
      </Wrapper>
   );
};

export default Users;
