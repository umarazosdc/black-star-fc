import React from 'react';
import SearchBar from './search-bar';

const SearchComponent = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="flex flex-col gap-4">
         <SearchBar placeholder="Search..." />
         <main className="flex flex-col gap-4">{children}</main>
      </div>
   );
};

export default SearchComponent;
