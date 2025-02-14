import { CircleAlertIcon } from 'lucide-react';
import React from 'react';

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="flex items-center gap-4 bg-red-300 rounded-md p-4 text-red-800">
         <CircleAlertIcon />
         <span className="text-sm font-semibold">{children}</span>
      </div>
   );
};

export default ErrorMessage;
