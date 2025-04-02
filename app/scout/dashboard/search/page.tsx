import SearchPlayers from "@/components/admin/admin-players";
import SearchProfileSkeleton from "@/components/admin/user-player-profile-skeleton";
import ScoutPlayerProfile from "@/components/auth/scout-search-player";
import SearchComponent from "@/components/utils/search-component";
import SearchContainer from "@/components/utils/search-container";
import React, { Suspense } from "react";

const ScoutSearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const search = params.search || "";
  return (
    <SearchComponent basePath="/scout/dashboard/search">
      {search ? (
        <Suspense fallback={<SearchProfileSkeleton />}>
          <ScoutPlayerProfile search={search as string} />
        </Suspense>
      ) : (
        <SearchContainer path="/explore" name="Players">
          <Suspense fallback={<SearchProfileSkeleton />}>
            <SearchPlayers />
          </Suspense>
        </SearchContainer>
      )}
    </SearchComponent>
  );
};

export default ScoutSearchPage;
