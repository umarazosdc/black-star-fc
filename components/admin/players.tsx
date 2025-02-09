import React from 'react';
import SearchFilterBar from '../utils/search-filter-bar';
import Wrapper from '../utils/wrapper';
import Link from 'next/link';
import { PlusIcon } from 'lucide-react';
import PlayerCard from './player-card';

const Players = () => {
   return (
      <Wrapper title="Players">
         <div className="flex flex-col gap-8">
            <SearchFilterBar
               placeholder="Search players..."
               items={['A-Z', 'Newest', 'Age', 'Oldest']}
               basePath="/admin/dashboard/players"
            />
            <div className="flex flex-col gap-6">
               <Link
                  href="/admin/dashboard/new"
                  className="self-end flex items-center gap-0.5 text-xs text-accent"
               >
                  <PlusIcon className="size-4" strokeWidth={3} />
                  <p>Add player</p>
               </Link>
            </div>
            <div className="flex flex-col gap-6">
               <PlayerCard
                  src="/imgs/players/player.jpg"
                  name="Ahmed Abdullahi"
                  position="Winger"
                  age={16}
               />
               <PlayerCard
                  src="/imgs/players/player.jpg"
                  name="Ahmed Abdullahi"
                  position="Winger"
                  age={16}
               />
               <PlayerCard
                  src="/imgs/players/player.jpg"
                  name="Ahmed Abdullahi"
                  position="Winger"
                  age={16}
               />
               <PlayerCard
                  src="/imgs/players/player.jpg"
                  name="Ahmed Abdullahi"
                  position="Winger"
                  age={16}
               />
               <PlayerCard
                  src="/imgs/players/player.jpg"
                  name="Ahmed Abdullahi"
                  position="Winger"
                  age={16}
               />
            </div>
         </div>
      </Wrapper>
   );
};

export default Players;
