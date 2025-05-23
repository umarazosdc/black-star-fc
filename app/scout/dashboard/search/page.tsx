import { auth } from "@/auth";
import SearchSuggestedPlayers from "@/components/admin/search-suggested-players";
import SearchProfileSkeleton from "@/components/admin/user-player-profile-skeleton";
import ScoutPlayerProfile from "@/components/auth/scout-search-player";
import SearchComponent from "@/components/utils/search-component";
import SearchContainer from "@/components/utils/search-container";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

const ScoutSearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const session = await auth();

  if (!session?.user) redirect("/login");

  if (session.user.role === "admin") redirect("dashboard");

  const params = await searchParams;
  const search = params.search || "";
  return (
    <SearchComponent basePath="/scout/dashboard/search">
      {search ? (
        <Suspense fallback={<SearchProfileSkeleton />}>
          <ScoutPlayerProfile search={search as string} />
        </Suspense>
      ) : (
        <SearchContainer path="/explore" name="Suggested players">
          <Suspense fallback={<SearchProfileSkeleton />}>
            <SearchSuggestedPlayers />
          </Suspense>
        </SearchContainer>
      )}
    </SearchComponent>
  );
};

export default ScoutSearchPage;
