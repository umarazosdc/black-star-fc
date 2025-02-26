import React from 'react';
import AdminUsersSkeleton from '../skeleton/admin-users-skeleton';
import SuspendedUser from './suspended-user';
import UserCard from './user-card';
import Wrapper from '../utils/wrapper';
import { formatDate } from '@/lib/date';

const SuspendedUserOverview = () => {
   const date = formatDate('2024-01-03');
   return (
      <Wrapper title="Users on suspension">
         <div className="flex flex-col gap-6 overflow-auto max-h-80 pb-1">
            {/* Add on click to the take admin to user's page */}
            <SuspendedUser
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
            />
            <SuspendedUser
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
            />
            <SuspendedUser
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
            />
            <UserCard
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
            />
            <SuspendedUser
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
            />
            <SuspendedUser
               src="/imgs/users/scout/dc2.jpg"
               name="Michael Jordan"
               email="j3@air.com"
               date={date}
            />
            <AdminUsersSkeleton />
         </div>
      </Wrapper>
   );
};

export default SuspendedUserOverview;
