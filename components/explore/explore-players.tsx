import SearchBar from '@/components/utils/search-bar';
import SearchFilter from '@/components/utils/search-filter';
import React from 'react';
import PlayerCard from '../utils/player-card';

const ExplorePlayers = () => {
   return (
      <div className="flex flex-col space-y-16">
         <header className="flex flex-col space-y-6">
            <h2 className="font-bold text-xl text-secondary text-center">
               Uncover hidden talents, build unstoppable teams
            </h2>
            <p className="text-sm text-secondary text-center">
               Your ultimate platform for discovering and showcasing the next
               generation of football stars
            </p>
         </header>
         <main className="flex flex-col space-y-6">
            <SearchBar placeholder="Search for players by position, age, or name" />
            <SearchFilter />
            <div className="grid grid-cols-2 gap-8">
               <PlayerCard
                  src="/imgs/players/player.jpg"
                  alt="Player"
                  position="striker"
                  name="Ahmed Abdullahi"
                  age={16}
               />
               <PlayerCard
                  src="/imgs/players/player.jpg"
                  alt="Player"
                  position="striker"
                  name="Ahmed Abdullahi"
                  age={16}
               />
               <PlayerCard
                  src="/imgs/players/player.jpg"
                  alt="Player"
                  position="striker"
                  name="Ahmed Abdullahi"
                  age={16}
               />
            </div>
         </main>
      </div>
   );
};

export default ExplorePlayers;
