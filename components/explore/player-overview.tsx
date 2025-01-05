import React from 'react';
import ImageAndStats from './image-stats';
import PlayerDetails from './player-details';
import { DotIcon } from 'lucide-react';
import Wrapper from '../utils/wrapper';
import PlayerUploads from './player-uploads';
import PlayerAchievementContainer from './achievement-container';
import Button from '../homepage/button';

const PlayerOverview = () => {
   return (
      <div className="flex flex-col gap-12 text-secondary pb-6">
         <div className="flex justify-center w-full">
            <ImageAndStats
               src="/imgs/players/mal.jpg"
               pac={80}
               phy={90}
               sho={89}
               pas={50}
               def={30}
               spd={96}
            />
         </div>
         <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center gap-2">
               <DotIcon />
               <h2 className="font-bold text-xl tracking-wide">Lamine Yamal</h2>
               <DotIcon />
            </div>
            <PlayerDetails />
         </div>
         <Wrapper title="Uploads">
            <PlayerUploads />
         </Wrapper>
         <Wrapper title="Achievements">
            <PlayerAchievementContainer />
         </Wrapper>

         {/* Button will render base on user role */}

         <div className="flex flex-col gap-6 items-center text-accent">
            <Button className="bg-accent text-primary">
               Request for Player
            </Button>
            <Button className="border-2">Bookmark Player</Button>
         </div>
      </div>
   );
};

export default PlayerOverview;
