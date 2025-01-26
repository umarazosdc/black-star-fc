import React from 'react';
import SearchContainer from '@/components/utils/search-container';
import Img from '@/components/utils/image';

const ScoutPreference = () => {
   return (
      <SearchContainer path="/explore/preference" name="Your preference">
         <div className="relative aspect-square">
            <Img src="/imgs/users/scout/dc2.jpg" alt="Player picture" />
         </div>
         <div className="relative aspect-square">
            <Img src="/imgs/users/scout/dc.jpg" alt="Player picture" />
         </div>
         <div className="relative aspect-square">
            <Img src="/imgs/users/scout/dc2.jpg" alt="Player picture" />
         </div>
         <div className="relative aspect-auto">
            <Img src="/imgs/users/scout/dc.jpg" alt="Player picture" />
         </div>
      </SearchContainer>
   );
};

export default ScoutPreference;
