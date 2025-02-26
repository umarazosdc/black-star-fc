import React from 'react';
import { getTotalUsers, getUserBySearch } from '@/lib/database/queries';
import Wrapper from '@/components/utils/wrapper';
import SearchFilterBar from '@/components/utils/search-filter-bar';
import UserList from '@/components/admin/user-list';
import AdminUsersSkeleton from '@/components/skeleton/admin-users-skeleton';
import { Prisma } from '@prisma/client';

const UsersPage = async ({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
   const params = await searchParams;
   const search = params.search || '';
   const sort = params.sort

  const searchAndSort = (sortBy: string) => {
     const sortOptions: Record<string, Prisma.UserOrderByWithRelationInput> = {
        'a-z': { name: 'asc' },
        newest: { createdAt: 'desc' },
        oldest: { createdAt: 'asc' },
        suspended: { status: 'desc' },
     };

     return sortOptions[sortBy] || { name: 'asc' };
  };


   const orderBy = searchAndSort(sort as string);
   const users = await getUserBySearch(search as string, orderBy);
   const totalUsers = await getTotalUsers();
   return (
      <Wrapper title="Users">
         <div className="flex flex-col gap-8">
            <SearchFilterBar
               placeholder="Search for users..."
               items={['A-Z', 'Newest', 'Oldest', 'Suspended']}
               basePath="/admin/dashboard/users"
            />
            <div className="flex flex-col gap-4">
               <div className="text-sm flex items-center gap-1 self-end">
                  <p>Total users:</p>
                  <span className="font-bold">{totalUsers}</span>
               </div>
               <>
                  {!users?.length ? (
                     <span className="self-center text-sm">No users found</span>
                  ) : (
                     <React.Suspense fallback={<AdminUsersSkeleton />}>
                        <UserList search={search} orderBy={orderBy} />
                     </React.Suspense>
                  )}
               </>
            </div>
         </div>
      </Wrapper>
   );
};

export default UsersPage;
