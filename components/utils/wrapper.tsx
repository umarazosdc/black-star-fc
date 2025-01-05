import React from 'react';

const Wrapper = ({
   title,
   children,
}: {
   title: string;
   children: React.ReactNode;
}) => {
   return (
      <div className="flex flex-col gap-4 w-full">
         <h2 className="self-start text-base font-bold">{title}</h2>
         <main className="self-start w-full">{children}</main>
      </div>
   );
};

export default Wrapper;
