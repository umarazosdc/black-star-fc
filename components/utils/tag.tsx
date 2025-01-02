import React from 'react';

const Tag = ({
   tag,
   ...props
}: {
   tag: string;
} & React.HTMLAttributes<HTMLSpanElement>) => {
   return (
      <span
         className="px-2 py-1 rounded-md text-xs flex items-center justify-center font-semibold text-white"
         {...props}
      >
         {tag}
      </span>
   );
};

export default Tag;
