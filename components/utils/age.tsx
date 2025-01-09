import { cn } from '@/lib/utils';
import React from 'react';

const Age = ({ age, className }: { age?: number; className?: string }) => {
   return (
      <div className={cn('flex items-end', className)}>
         <span className="font-bold text-2xl">{age}</span>
         <span className="flex-end">yrs</span>
      </div>
   );
};

export default Age;
