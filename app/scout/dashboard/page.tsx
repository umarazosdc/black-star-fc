import { auth } from '@/auth';
import BookmarkedPlayerCard from '@/components/utils/bookmarked-player-card';
import GridWrappers from '@/components/utils/grid-wrappers';
import RequestedPlayerCard from '@/components/utils/requested-player-card';
import SearchNotificationBar from '@/components/utils/search-notification-bar';
import SectionWrapper from '@/components/utils/section-wrapper';
import StatusCard from '@/components/utils/status-card';
import {
   getBookmarksById,
   getPlayers,
   getPlayersById,
   getTotalBookmarks,
   getTotalRequests,
   requests,
} from '@/lib/database/queries';
import { getAge } from '@/lib/date';
import Link from 'next/link';
import React from 'react';

const DashboardPage = async () => {
   const session = await auth();
   const user = session?.user;
   const totalBookmarks = await getTotalBookmarks();
   const totalRequests = await getTotalRequests();
   const bookmark = await getBookmarksById(user?.id as string);
   const bookmarkedPlayers = await getPlayersById(bookmark?.playerId as string);
   const suggestedPlayers = await getPlayers();
   const requestedPlayers = await requests();

   return (
      <div className="flex flex-col gap-6">
         <header className="flex flex-col gap-6">
            <p className="text-sm">
               Welcome back, <b>{user?.name?.split(' ').slice(-1)}</b>
            </p>
            <SearchNotificationBar
               placeholder="Search for player..."
               basePath="/scout/dashboard"
            />
            <GridWrappers>
               <Link href="/explore/requests">
                  <StatusCard value={totalRequests} name="Requests" />
               </Link>
               <Link href="/explore/bookmarks">
                  <StatusCard value={totalBookmarks} name="Bookmarks" />
               </Link>
            </GridWrappers>
         </header>
         <main className="flex flex-col gap-6">
            {/* <Wrapper title="Upcoming event">
               <EventStatusBar />
            </Wrapper> */}
            <SectionWrapper title="Suggested Players" link="#" label="View all">
               <div className="flex items-center gap-3 overflow-auto pb-1">
                  {!(suggestedPlayers.length > 0) ? (
                     <p className="text-sm">
                        We&#39;re scouting for the best players. We&#39;ll add
                        players soon...
                     </p>
                  ) : (
                     suggestedPlayers.map((player, key) => (
                        <BookmarkedPlayerCard
                           key={key}
                           src={player.image}
                           position={player.position}
                           name={player.firstname + ' ' + player.lastname}
                           age={getAge(player.dob)}
                           id={player.id}
                           className="w-[10.5rem]"
                        />
                     ))
                  )}
               </div>
            </SectionWrapper>
            <SectionWrapper title="Requested players" link="#" label="View all">
               <div className="flex items-center gap-3 overflow-auto pb-1">
                  {requestedPlayers.map((requestedPlayer, key) => (
                     <RequestedPlayerCard
                        key={key}
                        name={
                           requestedPlayer.player.firstname +
                           ' ' +
                           requestedPlayer.player.lastname
                        }
                        position={requestedPlayer.player.position}
                        src={requestedPlayer.player.image}
                        age={requestedPlayer.player.age}
                     />
                  ))}
               </div>
            </SectionWrapper>
            <SectionWrapper
               title="Bookmarked players"
               link="#"
               label="View all"
            >
               <div className="flex items-center gap-3 overflow-auto pb-1">
                  {!(bookmarkedPlayers.length > 0) ? (
                     <p className="text-sm">
                        Haven&lsquo;t yet bookmarked players
                     </p>
                  ) : (
                     bookmarkedPlayers.map((player, key) => (
                        <BookmarkedPlayerCard
                           key={key}
                           src={player.image}
                           position={player.position}
                           name={player.firstname + ' ' + player.lastname}
                           age={getAge(player.dob)}
                           id={player.id}
                           className="w-[10.5rem]"
                        />
                     ))
                  )}
               </div>
            </SectionWrapper>
         </main>
      </div>
   );
};

export default DashboardPage;
