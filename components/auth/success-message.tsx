import { CircleCheckIcon } from 'lucide-react';
import React from 'react';

const SuccessMessage = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="flex items-center gap-4 bg-emerald-300 rounded-md p-4 text-emerald-800">
         <CircleCheckIcon />
         <span className="text-sm font-semibold">{children}</span>
      </div>
   );
};

export default SuccessMessage;
