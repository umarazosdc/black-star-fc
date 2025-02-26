import React from 'react';

const AdminUsersSkeleton = () => {
   return (
      <div className="flex flex-col gap-4">
         {Array.from({ length: 5 }).map((_, i) => (
            <div
               className="flex flex-col gap-4 shadow-md p-4 bg-card rounded-md animate-pulse"
               key={i}
            >
               <div className="self-start flex justify-between items-center w-full">
                  <div className="flex items-center gap-4">
                     <div className="size-[5rem] rounded-full bg-secondary opacity-25" />
                     <div className="flex flex-col gap-2">
                        <div className="h-4 w-32 bg-secondary opacity-25 rounded-md" />
                        <div className="h-4 w-48 bg-secondary opacity-25 rounded-md" />
                        <div className="h-4 w-32 bg-secondary opacity-25 rounded-md" />
                     </div>
                  </div>
               </div>
               <div className="self-end flex items-center gap-4">
                  <div className="h-7 opacity-25 w-20 bg-secondary rounded-md" />
                  <div className="h-7 opacity-25 w-16 bg-secondary rounded-md" />
               </div>
            </div>
         ))}
      </div>
   );
};

export default AdminUsersSkeleton;
