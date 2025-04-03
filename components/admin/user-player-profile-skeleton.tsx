import React from "react";
import SearchDisplayer from "./admin-search-display";

const SearchProfileSkeleton = () => {
  return (
    <SearchDisplayer className="animate-pulse">
      {Array.from({ length: 8 }, (_, key) => (
        <div
          className="w-full rounded-md shadow-md bg-secondary opacity-25 h-48"
          key={key}
        />
      ))}
    </SearchDisplayer>
  );
};

export default SearchProfileSkeleton;
