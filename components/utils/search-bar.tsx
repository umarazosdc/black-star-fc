'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import { useRouter } from 'next/navigation';

const SearchBar = ({
   placeholder,
   basePath,
}: {
   placeholder: string | undefined;
   basePath: string;
}) => {
   const [text, setText] = useState<string>('');
   const [query] = useDebounce(text, 300);
   const router = useRouter();

   const handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
   };

   React.useEffect(() => {
      const url = query ? `${basePath}?search=${query}` : basePath;
      router.replace(url);
   }, [query, router, basePath]);
   return (
      <div className="relative border rounded-md w-full">
         <Input
            className="peer pr-16 text-sm"
            placeholder={placeholder}
            value={text}
            type="search"
            onChange={(event) => {
               handleInputText(event);
            }}
         />
         <span className="absolute top-1/2 -translate-y-1/2 right-3 p-2 rounded-full bg-primary opacity-50">
            <Search className="text-accent size-5" strokeWidth={3} />
         </span>
      </div>
   );
};

export default SearchBar;
