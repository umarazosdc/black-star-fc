'use client';
import PlayerCard from '@/components/admin/player-card';
import SuspendedUser from '@/components/admin/suspended-user';
import UserCard from '@/components/admin/user-card';
import AdminPlayersSkeleton from '@/components/skeleton/admin-players-skeleton';
import AdminUsersSkeleton from '@/components/skeleton/admin-users-skeleton';
import ScoutRequestsSkeleton from '@/components/skeleton/scout-requests-skeleton';
import EventStatusBar from '@/components/utils/event-status-bar';
import GridWrappers from '@/components/utils/grid-wrappers';
import PlayerImage from '@/components/utils/player-image';
import SearchNotificationBar from '@/components/utils/search-notification-bar';
import SectionWrapper from '@/components/utils/section-wrapper';
import StatusCard from '@/components/utils/status-card';
import Wrapper from '@/components/utils/wrapper';
import { getTotalUsers } from '@/lib/database/queries';
import { formatDate } from '@/lib/date';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AdminDashboardPage = () => {
   const { ref } = useInView({ threshold: 1 });
   const date = formatDate('2024-01-03');
   const [userCount, setUserCount] = React.useState<number>(0);

   React.useEffect(() => {
      const fetchData = async () => {
         try {
            console.log("Entry")
            const data = await getTotalUsers();
            console.log("Data logged")
            console.log(data)
            setUserCount(userCount);
            console.log(userCount)
         } catch (error) {
            console.log('Failed to fetch total users.', error);
         }
      };
      fetchData();
   }, [userCount]);

   return (
      <div className="flex flex-col gap-12">
         <header className="flex flex-col gap-6">
            <p className="text-sm">
               Welcome back, <b>Isa</b>
            </p>
            <SearchNotificationBar
               placeholder="Search..."
               basePath="/admin/dashboard"
            />
            <GridWrappers>
               <Link href="/admin/dashboard/users">
                  <StatusCard value={userCount} name="Total Users" />
               </Link>
               <Link href="/admin/dashboard/players">
                  <StatusCard value={25} name="Total Players" />
               </Link>
            </GridWrappers>
         </header>
         <main className="flex flex-col gap-8">
            <SectionWrapper title="Upcoming event" label="Add event" link="#">
               <EventStatusBar isAdmin />
            </SectionWrapper>
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
                  <ScoutRequestsSkeleton ref={ref} />
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
                  <AdminPlayersSkeleton />
               </div>
            </SectionWrapper>
            <Wrapper title="Users on suspension">
               <div className="flex flex-col gap-6 overflow-auto max-h-80 pb-1">
                  {/* Add on click to the take admin to user's page */}
                  <SuspendedUser
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                  />
                  <SuspendedUser
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                  />
                  <SuspendedUser
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
                  <SuspendedUser
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                  />
                  <SuspendedUser
                     src="/imgs/users/scout/dc2.jpg"
                     name="Michael Jordan"
                     email="j3@air.com"
                     date={date}
                  />
                  <AdminUsersSkeleton />
               </div>
            </Wrapper>
         </main>
      </div>
   );
};

export default AdminDashboardPage;
