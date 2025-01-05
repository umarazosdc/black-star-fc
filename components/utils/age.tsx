import React from 'react';

const Age = ({ age }: { age: number }) => {
   return (
      <div className="flex items-end">
         <span className="font-bold text-2xl">{age}</span>
         <span className="flex-end">yrs</span>
      </div>
   );
};

export default Age;
