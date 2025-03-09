import React from 'react';

const GridWrappers = ({ children }: { children?: React.ReactNode }) => {
   return <div className="grid grid-cols-2 gap-4">{children}</div>;
};

export default GridWrappers;
