import React from 'react';
import SearchBar from './search-bar';
import { Settings2Icon } from 'lucide-react';
import {
   Select,
   SelectContent,
   SelectTrigger,
   SelectItem,
   SelectLabel,
   SelectGroup,
} from '@/components/ui/select';

const SearchFilterBar = ({
   placeholder,
   items,
   basePath,
}: {
   placeholder: string;
   items: string[];
   basePath: string;
}) => {
   return (
      <div className="flex items-center gap-4">
         <SearchBar placeholder={placeholder} basePath={basePath} />
         <Select>
            <SelectTrigger className="size-10 rounded-full p-2 bg-card flex items-center justify-center border-">
               <Settings2Icon className="text-accent" />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  <SelectLabel>Sort By</SelectLabel>
                  {items.map((item, key) => (
                     <SelectItem key={key} value={item.toLowerCase()}>
                        {item}
                     </SelectItem>
                  ))}
               </SelectGroup>
            </SelectContent>
         </Select>
      </div>
   );
};

export default SearchFilterBar;
