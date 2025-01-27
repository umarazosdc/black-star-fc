import React from 'react';
import SearchBar from './search-bar';

const SearchComponent = ({ children, basePath }: { children: React.ReactNode, basePath:string }) => {
   return (
      <div className="flex flex-col gap-4">
         <SearchBar placeholder="Search..." basePath={basePath} />
         <main className="flex flex-col gap-4">{children}</main>
      </div>
   );
};

export default SearchComponent;
