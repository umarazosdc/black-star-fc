import React from "react";
import {
  getTotalUsers,
  getUsersBySearchAndOrder,
} from "@/lib/database/queries";
import Wrapper from "@/components/utils/wrapper";
import SearchFilterBar from "@/components/utils/search-filter-bar";
import UserList from "@/components/admin/user-list";
import AdminUsersSkeleton from "@/components/skeleton/admin-users-skeleton";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { searchAndSort } from "@/lib/data";

const UsersPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const session = await auth();
  const user = session?.user;

  // Check if user is authenticated
  if (!user) redirect("/login");

  if (user?.role !== "admin") redirect("/unauthorized");

  const params = await searchParams;
  const search = params.search || "";
  const sort = params.sort;

  const orderBy = searchAndSort(sort as string, "user");
  const users = await getUsersBySearchAndOrder(search as string, orderBy);
  const totalUsers = await getTotalUsers();
  return (
    <Wrapper title="Users">
      <div className="flex flex-col gap-8">
        <SearchFilterBar
          placeholder="Search for users..."
          items={["A-Z", "Newest", "Oldest", "Suspended"]}
          basePath="/dashboard/users"
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
