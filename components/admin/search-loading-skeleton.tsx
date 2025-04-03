import React from "react";
import SearchProfileSkeleton from "./user-player-profile-skeleton";

const SearchLoadingSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-10 w-full bg-secondary opacity-25 rounded-md" />
      <SearchProfileSkeleton />
    </div>
  );
};

export default SearchLoadingSkeleton;
