import AdminPlayers from '@/components/admin/admin-players';
import AdminUsers from '@/components/admin/admin-users';
import SearchComponent from '@/components/utils/search-component';
import React from 'react';

const AdminSearchPage = async ({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
   const params = await searchParams;
   const search = params.search || undefined;
   console.log(search);
   return (
      <SearchComponent basePath="/admin/dashboard/search">
         <AdminPlayers />
         <AdminUsers />
      </SearchComponent>
   );
};

export default AdminSearchPage;
