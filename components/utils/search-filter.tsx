import React from 'react';
import Tag from '@/components/utils/tag';

const SearchFilter = () => {
   return (
      <div className="flex items-center gap-3">
         <h2 className="text-sm text-secondary opacity-50 font-bold">
            Search filter:
         </h2>
         <Tag tag="Under 16" style={{background: 'blue'}}/>
      </div>
   );
};

export default SearchFilter;
