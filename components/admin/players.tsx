import React from 'react';
import SearchFilterBar from '../utils/search-filter-bar';
import Wrapper from '../utils/wrapper';
import Link from 'next/link';
import { PlusIcon } from 'lucide-react';
import PlayerCard from './player-card';
import { getPlayers } from '@/lib/database/queries';
import { getAge } from '@/lib/date';
import { auth } from '@/auth';

const Players = async () => {
   const session = await auth()
   const players = await getPlayers(session?.user.id as string);
   return (
      <Wrapper title="Players">
         <div className="flex flex-col gap-4">
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
            <div className="flex flex-col gap-3">
               {!(players.length > 0) ? (
                  <p className="text-sm">No player available. Add players</p>
               ) : (
                  players.map((player, key) => (
                     <PlayerCard
                        key={key}
                        id={player.id}
                        name={player.firstname + ' ' + player.lastname}
                        src={[player.image, player.thumbnail]}
                        position={player.position}
                        age={getAge(player.dob)}
                        videos={player.videos}
                     />
                  ))
               )}
            </div>
         </div>
      </Wrapper>
   );
};

export default Players;
