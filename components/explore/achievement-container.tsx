import React from 'react';
import PlayerAchievement from './Player-achievements';

const PlayerAchievementContainer = () => {
   return (
      <div className="flex flex-col gap-6">
         <PlayerAchievement>2019 Young Best Player</PlayerAchievement>
         <PlayerAchievement>2019 Most Valuable Player</PlayerAchievement>
         <PlayerAchievement>The current highest goals scorer</PlayerAchievement>
      </div>
   );
};

export default PlayerAchievementContainer;
