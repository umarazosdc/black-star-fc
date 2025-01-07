import SearchBar from '@/components/utils/search-bar';
import SearchFilter from '@/components/utils/search-filter';
import React from 'react';
import BookmarkedPlayerCard from '../utils/bookmarked-player-card';
import GridWrappers from '../utils/grid-wrappers';

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
            <GridWrappers>
               <BookmarkedPlayerCard
                  src="/imgs/players/player.jpg"
                  position="striker"
                  name="Ahmed Abdullahi"
                  age={16}
               />
               <BookmarkedPlayerCard
                  src="/imgs/players/player.jpg"
                  position="striker"
                  name="Ahmed Abdullahi"
                  age={16}
               />
               <BookmarkedPlayerCard
                  src="/imgs/players/player.jpg"
                  position="striker"
                  name="Ahmed Abdullahi"
                  age={16}
               />
            </GridWrappers>
         </main>
      </div>
   );
};

export default ExplorePlayers;
