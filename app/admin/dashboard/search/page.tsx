import AdminPlayers from '@/components/admin/admin-players';
import AdminUsers from '@/components/admin/admin-users';
import UserPlayerProfile from '@/components/admin/user-player-profile';
import UserPlayerProfileSkeleton from '@/components/admin/user-player-profile-skeleton';
import SearchComponent from '@/components/utils/search-component';
import React, { Suspense } from 'react';

const AdminSearchPage = async ({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
   const params = await searchParams;
   const search = params.search || '';
   return (
      <SearchComponent basePath="/admin/dashboard/search">
         {search ? (
            <Suspense fallback={<UserPlayerProfileSkeleton />}>
               <UserPlayerProfile search={search as string} />
            </Suspense>
         ) : (
            <Suspense fallback={<UserPlayerProfileSkeleton />}>
               <AdminPlayers />
               <AdminUsers />
            </Suspense>
         )}
      </SearchComponent>
   );
};

export default AdminSearchPage;
