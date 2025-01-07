import { cn } from '@/lib/utils';
import React from 'react';

const Tag = ({
   tag,
   className,
   ...props
}: {
   tag: string;
} & React.HTMLAttributes<HTMLSpanElement>) => {
   return (
      <span
         className={cn("px-2 py-1 rounded-md text-xs flex items-center justify-center font-semibold text-white", className)}
         {...props}
      >
         {tag}
      </span>
   );
};

export default Tag;
