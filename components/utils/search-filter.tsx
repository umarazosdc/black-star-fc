'use client';
import React, { useEffect, useState } from 'react';
import Tag from '@/components/utils/tag';
import { useSearchParams } from 'next/navigation';

const SearchFilter = () => {
   const searchparam = useSearchParams();
   const sort = searchparam.get('sort');
   const [tag, setTag] = useState<string>(sort || 'A-Z');

   useEffect(() => {
      setTag(sort || 'A-Z');
   }, [sort]);
   return (
      <div className="flex items-center gap-3">
         <h2 className="text-sm text-secondary opacity-50 font-bold">
            Search filter:
         </h2>
         <Tag tag={tag} style={{ background: 'blue' }} />
      </div>
   );
};

export default SearchFilter;
