import { Dot } from 'lucide-react';
import React from 'react';

const PlayerAchievement = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="flex items-center gap-4 text-secondary">
         <Dot strokeWidth={3} />
         <p className="text-sm">{children}</p>
      </div>
   );
};

export default PlayerAchievement;
