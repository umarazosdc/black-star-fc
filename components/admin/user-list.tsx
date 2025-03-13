import React from 'react';
import UserCard from './user-card';
import { getUsersBySearchAndOrder } from '@/lib/database/queries';
import { formatDate } from '@/lib/date';
import { Prisma } from '@prisma/client';

const UserList = async ({
   search,
   orderBy,
}: {
   search: string | string[];
   orderBy: Prisma.UserOrderByWithRelationInput;
}) => {
   const users = await getUsersBySearchAndOrder(search as string, orderBy);
   return (
      <div className="flex flex-col gap-4">
         {users?.map((user) => (
            <UserCard
               id={user.id}
               key={user.id}
               name={user.name}
               src={user.image ?? ''}
               email={user.email}
               date={formatDate(String(user.createdAt))}
               userId={user.id}
            />
         ))}
      </div>
   );
};

export default UserList;
