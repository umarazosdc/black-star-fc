import BookmarkedPlayerCard from '@/components/utils/bookmarked-player-card';
import GridWrappers from '@/components/utils/grid-wrappers';
import Wrapper from '@/components/utils/wrapper';
import React from 'react';

const BookmarksPage = () => {
   return (
      <Wrapper title="Bookmarks">
         <GridWrappers>
            {/* Control the (if it's Admin role) */}
            <BookmarkedPlayerCard
               name="Lamine Yamal"
               src="/imgs/players/mal.jpg"
               age={17}
               position="Winger"
            />
            <BookmarkedPlayerCard
               name="Lamine Yamal"
               src="/imgs/players/mal.jpg"
               age={17}
               position="Winger"
            />
            <BookmarkedPlayerCard
               name="Lamine Yamal"
               src="/imgs/players/mal.jpg"
               age={17}
               position="Winger"
            />
            <BookmarkedPlayerCard
               name="Lamine Yamal"
               src="/imgs/players/mal.jpg"
               age={17}
               position="Winger"
            />
            <BookmarkedPlayerCard
               name="Lamine Yamal"
               src="/imgs/players/mal.jpg"
               age={17}
               position="Winger"
            />
         </GridWrappers>
      </Wrapper>
   );
};

export default BookmarksPage;
