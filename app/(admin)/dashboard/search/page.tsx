import { auth } from "@/auth";
import SearchSuggestedPlayers from "@/components/admin/search-suggested-players";
import AdminUsers from "@/components/admin/admin-users";
import AdminUserPlayerProfile from "@/components/admin/user-player-profile";
import SearchProfileSkeleton from "@/components/admin/user-player-profile-skeleton";
import SearchComponent from "@/components/utils/search-component";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

const AdminSearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const session = await auth();
  const user = session?.user;

  // Check if the user is authenticated
  if (!user) redirect("/login");

  if (user?.role !== "admin") redirect("/unauthorized");

  const params = await searchParams;
  const search = params.search || "";


  return (
    <SearchComponent basePath="/dashboard/search">
      {search ? (
        <Suspense fallback={<SearchProfileSkeleton />}>
          <AdminUserPlayerProfile search={search as string} />
        </Suspense>
      ) : (
        <div className="flex flex-col gap-4">
          <Suspense fallback={<SearchProfileSkeleton />}>
            <SearchSuggestedPlayers />
            <AdminUsers />
          </Suspense>
        </div>
      )}
    </SearchComponent>
  );
};

export default AdminSearchPage;
