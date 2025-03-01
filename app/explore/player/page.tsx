import React from 'react';

import { getPlayerById, getStatsById } from '@/lib/database/queries';
import ImageAndStats from '@/components/explore/image-stats';
import { DotIcon } from 'lucide-react';
import PlayerDetails from '@/components/explore/player-details';
import Wrapper from '@/components/utils/wrapper';
import PlayerUploads from '@/components/explore/player-uploads';
import Button from '@/components/homepage/button';
import { auth } from '@/auth';
import { setDate } from '@/lib/date';

const PlayerOverviewPage = async ({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
   const params = await searchParams;
   const id = params.id;
   const player = await getPlayerById(id as string);
   const session = await auth();
   const isAdmin = session?.user.role === 'admin';

   console.log(session?.user.role);

   if (!player) {
      return <div>Player not found</div>;
   }

   const stats = await getStatsById(player.id);
   return (
      <div className="flex flex-col gap-4 text-secondary pb-4">
         <div className="flex justify-center w-full">
            <ImageAndStats
               src={player.thumbnail}
               pac={stats?.pace as number}
               dri={stats?.dribble as number}
               sho={stats?.shot as number}
               pas={stats?.pass as number}
               def={stats?.defence as number}
               spd={stats?.speed as number}
            />
         </div>
         <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-2">
               <DotIcon />
               <h2 className="font-bold text-xl tracking-wide">
                  {player.firstname + ' ' + player.lastname}
               </h2>
               <DotIcon />
            </div>
            <PlayerDetails
               nationality={player.nationality}
               position={player.position}
               side={player.side}
               dob={setDate(player.dob)}
               height={player.height}
               weight={player.weight}
            />
         </div>
         <Wrapper title="Uploads">
            {!(player.videos.length > 0) ? (
               <p className='text-sm'>No available uploads</p>
            ) : (
               <PlayerUploads src={player.videos} />
            )}
         </Wrapper>

         {isAdmin ? (
            <Button className="bg-red-500 text-primary mx-auto w-full">
               Remove player
            </Button>
         ) : (
            <div className="flex flex-col gap-2 items-center text-accent w-full">
               <Button className="bg-accent text-primary w-full">
                  Request for Player
               </Button>
               <Button className="border-2 w-full">Bookmark Player</Button>
            </div>
         )}
      </div>
   );
};

export default PlayerOverviewPage;
