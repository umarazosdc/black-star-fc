import BookmarkedPlayerCard from '@/components/utils/bookmarked-player-card';
import GridWrappers from '@/components/utils/grid-wrappers';
import RequestedPlayerCard from '@/components/utils/requested-player-card';
import SearchNotificationBar from '@/components/utils/search-notification-bar';
import SectionWrapper from '@/components/utils/section-wrapper';
import StatusCard from '@/components/utils/status-card';
import React from 'react';

const DashboardPage = () => {
   return (
      <div className="flex flex-col gap-12">
         <header className="flex flex-col gap-6">
            <p className="text-sm">
               Welcome back, <b>Isa</b>
            </p>
            <SearchNotificationBar placeholder="Search for player..." />
            <GridWrappers>
               <StatusCard value={6} label="Requests" />
               <StatusCard value={12} label="Bookmarks" />
            </GridWrappers>
         </header>
         <main className="flex flex-col gap-6">
            <SectionWrapper title="Suggested Players" link="#" label="View all">
               <div className="flex items-center gap-6 overflow-auto pb-1">
                  <BookmarkedPlayerCard
                     name="Lamine Yamal"
                     age={17}
                     position="Winger"
                     src="/imgs/players/mal.jpg"
                     className="w-[10.5rem]"
                  />
                  <BookmarkedPlayerCard
                     name="Lamine Yamal"
                     age={17}
                     position="Winger"
                     src="/imgs/players/mal.jpg"
                     className="w-[10.5rem]"
                  />
                  <BookmarkedPlayerCard
                     name="Lamine Yamal"
                     age={17}
                     position="Winger"
                     src="/imgs/players/mal.jpg"
                     className="w-[10.5rem]"
                  />
               </div>
            </SectionWrapper>
            <SectionWrapper title="Requested players" link="#" label="View all">
               <div className="flex items-center gap-6 overflow-auto pb-1">
                  <RequestedPlayerCard
                     name="Lamine Yamal"
                     age={17}
                     position="Winger"
                     src="/imgs/players/mal.jpg"
                     className="w-[10.5rem]"
                  />
                  <RequestedPlayerCard
                     name="Lamine Yamal"
                     age={17}
                     position="Winger"
                     src="/imgs/players/mal.jpg"
                     className="w-[10.5rem]"
                  />
                  <RequestedPlayerCard
                     name="Lamine Yamal"
                     age={17}
                     position="Winger"
                     src="/imgs/players/mal.jpg"
                     className="w-[10.5rem]"
                  />
               </div>
            </SectionWrapper>
            <SectionWrapper title="Bookmarked players" link="#" label="View all">
               <div className="flex items-center gap-6 overflow-auto pb-1">
                  <BookmarkedPlayerCard
                     name="Lamine Yamal"
                     age={17}
                     position="Winger"
                     src="/imgs/players/mal.jpg"
                     className="w-[10.5rem]"
                  />
                  <BookmarkedPlayerCard
                     name="Lamine Yamal"
                     age={17}
                     position="Winger"
                     src="/imgs/players/mal.jpg"
                     className="w-[10.5rem]"
                  />
                  <BookmarkedPlayerCard
                     name="Lamine Yamal"
                     age={17}
                     position="Winger"
                     src="/imgs/players/mal.jpg"
                     className="w-[10.5rem]"
                  />
               </div>
            </SectionWrapper>
         </main>
      </div>
   );
};

export default DashboardPage;
