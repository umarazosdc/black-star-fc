import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar = ({ placeholder }: { placeholder: string | undefined }) => {
   return (
      <div className="relative border rounded-md w-full">
         <Input className="peer pr-16 text-sm" placeholder={placeholder} type='search'/>
         <span className="absolute top-1/2 -translate-y-1/2 right-3 p-2 rounded-full bg-primary opacity-50">
            <Search className="text-accent size-5" strokeWidth={3} />
         </span>
      </div>
   );
};

export default SearchBar;
