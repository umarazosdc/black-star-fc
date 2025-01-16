import React from 'react';

const FlexAligned = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="flex items-start justify-between gap-4">{children}</div>
   );
};

export default FlexAligned;
