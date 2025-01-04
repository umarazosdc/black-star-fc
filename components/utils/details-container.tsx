import React from 'react';

const DetailsContainer = ({
   title,
   children,
}: {
   title: string;
   children: React.ReactNode;
}) => {
   return (
      <div className="flex flex-col gap-4 w-full">
         <h2 className="flex-start text-base font-bold">{title}</h2>
         <main className="flex-start w-full">{children}</main>
      </div>
   );
};

export default DetailsContainer;
