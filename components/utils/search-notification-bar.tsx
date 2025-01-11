import React from 'react';
import SearchBar from './search-bar';
import { BellIcon } from 'lucide-react';

const SearchNotificationBar = ({ placeholder }: { placeholder: string }) => {
   return (
      <div className="flex items-center gap-4">
         <SearchBar placeholder={placeholder} />


         <button className="relative size-10 rounded-full p-2 bg-card flex items-center justify-center">
            <BellIcon className="text-accent" />
            {/* ONLY render this span if there's any notification */}
            <span
               className="absolute top-0 right-0.5 size-2.5 rounded-full"
               style={{ background: 'red' }}
            ></span>
         </button>
      </div>
   );
};

export default SearchNotificationBar;
