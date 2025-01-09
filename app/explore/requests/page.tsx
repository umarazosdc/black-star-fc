import GridWrappers from '@/components/utils/grid-wrappers';
import RequestedPlayerCard from '@/components/utils/requested-player-card';
import Wrapper from '@/components/utils/wrapper';
import React from 'react';

const RequestsPage = () => {
   return (
      <Wrapper title="Requests">
         <GridWrappers>
            <RequestedPlayerCard
               name="Lamine Yamal"
               src="/imgs/players/mal.jpg"
               age={17}
               position="Winger"
            />
            <RequestedPlayerCard
               name="Lamine Yamal"
               src="/imgs/players/mal.jpg"
               age={17}
               position="Winger"
            />
            <RequestedPlayerCard
               name="Lamine Yamal"
               src="/imgs/players/mal.jpg"
               age={17}
               position="Winger"
            />
            <RequestedPlayerCard
               name="Lamine Yamal"
               src="/imgs/players/mal.jpg"
               age={17}
               position="Winger"
            />
            <RequestedPlayerCard
               name="Lamine Yamal"
               src="/imgs/players/mal.jpg"
               age={17}
               position="Winger"
            />
         </GridWrappers>
      </Wrapper>
   );
};

export default RequestsPage;
