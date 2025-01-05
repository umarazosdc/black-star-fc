import React from 'react';
import SearchBar from './search-bar';
import { Settings2Icon } from 'lucide-react';

const SearchFilterBar = ({ placeholder }: { placeholder: string }) => {
   return (
      <div className="flex items-center gap-4">
         <SearchBar placeholder={placeholder} />
         <button className="size-10 rounded-full p-2 bg-card flex items-center justify-center">
            <Settings2Icon className='text-accent'/>
         </button>
      </div>
   );
};

export default SearchFilterBar;
