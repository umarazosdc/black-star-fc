import PlayerCard from '@/components/admin/player-card';
import UserCard from '@/components/admin/user-card';
import GridWrappers from '@/components/utils/grid-wrappers';
import PlayerImage from '@/components/utils/player-image';
import SearchNotificationBar from '@/components/utils/search-notification-bar';
import SectionWrapper from '@/components/utils/section-wrapper';
import StatusCard from '@/components/utils/status-card';
import Wrapper from '@/components/utils/wrapper';
import formatDate from '@/lib/date';
import Link from 'next/link';
import React from 'react';

const AdminDashboardPage = () => {
   const date = formatDate('2017-01-03');
   return (
      <div className="flex flex-col gap-12">
         <header className="flex flex-col gap-6">
            <p className="text-sm">
               Welcome back, <b>Isa</b>
            </p>
            <SearchNotificationBar placeholder="Search for player..." />
            <GridWrappers>
               <Link href="/admin/dashboard/users">
                  <StatusCard value={1400} name="Total Users" />
               </Link>
               <Link href="/admin/dashboard/players">
                  <StatusCard value={25} name="Total Players" />
               </Link>
            </GridWrappers>
         </header>
         <main className="flex flex-col gap-8">
            <Wrapper title="Scout requests">
               <div className="flex flex-col gap-6 overflow-auto max-h-80 pb-1">
                  {/* Add on click to the take admin to user's page */}
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                     playerName="Lamine Yamal"
                     isAdminDashboard
                     playersAge={16}
                  >
                        <PlayerImage
                           src="/imgs/players/mal.jpg"
                           position="Winger"
                        />
                  </UserCard>
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                     playerName="Lamine Yamal"
                     isAdminDashboard
                     playersAge={16}
                  >
                        <PlayerImage
                           src="/imgs/players/mal.jpg"
                           position="Winger"
                        />
                  </UserCard>
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                     playerName="Lamine Yamal"
                     isAdminDashboard
                     playersAge={16}
                  >
                        <PlayerImage
                           src="/imgs/players/mal.jpg"
                           position="Winger"
                        />
                  </UserCard>
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                     playerName="Lamine Yamal"
                     isAdminDashboard
                     playersAge={16}
                  >
                        <PlayerImage
                           src="/imgs/players/mal.jpg"
                           position="Winger"
                        />
                  </UserCard>
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                     playerName="Lamine Yamal"
                     isAdminDashboard
                     playersAge={16}
                  >
                        <PlayerImage
                           src="/imgs/players/mal.jpg"
                           position="Winger"
                        />
                  </UserCard>
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                     playerName="Lamine Yamal"
                     isAdminDashboard
                     playersAge={16}
                  >
                        <PlayerImage
                           src="/imgs/players/mal.jpg"
                           position="Winger"
                        />
                  </UserCard>
               </div>
            </Wrapper>
            <SectionWrapper
               title="Players"
               label="Add player"
               link="/admin/dashboard/new"
            >
               <div className="flex flex-col gap-6 overflow-auto max-h-80 pb-1">
                  {/* Add on click to the take admin to user's page */}
                  <PlayerCard
                     src="/imgs/players/player.jpg"
                     name="Ahmed Abdullahi"
                     position="Striker"
                     age={16}
                  />
                  <PlayerCard
                     src="/imgs/players/player.jpg"
                     name="Ahmed Abdullahi"
                     position="Striker"
                     age={16}
                  />
                  <PlayerCard
                     src="/imgs/players/player.jpg"
                     name="Ahmed Abdullahi"
                     position="Striker"
                     age={16}
                  />
                  <PlayerCard
                     src="/imgs/players/player.jpg"
                     name="Ahmed Abdullahi"
                     position="Striker"
                     age={16}
                  />
                  <PlayerCard
                     src="/imgs/players/player.jpg"
                     name="Ahmed Abdullahi"
                     position="Striker"
                     age={16}
                  />
                  <PlayerCard
                     src="/imgs/players/player.jpg"
                     name="Ahmed Abdullahi"
                     position="Striker"
                     age={16}
                  />
               </div>
            </SectionWrapper>
            <Wrapper title="Users">
               <div className="flex flex-col gap-6 overflow-auto max-h-80 pb-1">
                  {/* Add on click to the take admin to user's page */}
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                  />
                  <UserCard
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                  />
               </div>
            </Wrapper>
         </main>
      </div>
   );
};

export default AdminDashboardPage;
