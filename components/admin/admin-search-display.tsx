import { cn } from '@/lib/utils';
import React from 'react';

const AdminSearchDisplay = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string | undefined;
}) => {
   return (
      <main className={cn('columns-2 gap-2 space-y-2', className)}>
         {children}
      </main>
   );
};

export default AdminSearchDisplay;
