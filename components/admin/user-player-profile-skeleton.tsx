import React from "react";
import SearchDisplayer from "./admin-search-display";

const SearchProfileSkeleton = () => {
  return (
    <SearchDisplayer className="animate-pulse">
      {Array.from({ length: 8 }, (_, key) => (
        <div
          className="w-full rounded-md shadow-md bg-gray-300 h-36"
          key={key}
        />
      ))}
    </SearchDisplayer>
  );
};

export default SearchProfileSkeleton;
