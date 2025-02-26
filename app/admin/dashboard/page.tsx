import PlayersOverview from '@/components/admin/players-overview';
import ScoutRequest from '@/components/admin/scout-request';
import SuspendedUserOverview from '@/components/admin/suspend-users-overview';
import EventStatusBar from '@/components/utils/event-status-bar';
import GridWrappers from '@/components/utils/grid-wrappers';
import SearchNotificationBar from '@/components/utils/search-notification-bar';
import SectionWrapper from '@/components/utils/section-wrapper';
import StatusCard from '@/components/utils/status-card';
import { getTotalPlayers, getTotalUsers } from '@/lib/database/queries';
import Link from 'next/link';
import React from 'react';

const AdminDashboardPage = async () => {
   const userTotal = await getTotalUsers();
   const playerTotal = await getTotalPlayers();
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
                  <StatusCard value={userTotal} name="Total Users" />
               </Link>
               <Link href="/admin/dashboard/players">
                  <StatusCard value={playerTotal} name="Total Players" />
               </Link>
            </GridWrappers>
         </header>
         <main className="flex flex-col gap-8">
            <SectionWrapper title="Upcoming event" label="Add event" link="#">
               <EventStatusBar isAdmin />
            </SectionWrapper>
            <ScoutRequest />
            <PlayersOverview />
            <SuspendedUserOverview />
         </main>
      </div>
   );
};

export default AdminDashboardPage;
