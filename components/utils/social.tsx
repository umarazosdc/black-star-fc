import React from 'react';

const Social = ({ children }: { children: React.ReactNode }) => {
   return (
      <button className="py-4 flex items-center justify-center shadow-md rounded-md w-full bg-white">
         {children}
      </button>
   );
};

export default Social;
