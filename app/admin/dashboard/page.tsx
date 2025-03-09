import { auth } from '@/auth';
import PlayersOverview from '@/components/admin/players-overview';
import ScoutRequest from '@/components/admin/scout-request';
import SuspendedUserOverview from '@/components/admin/suspend-users-overview';
import AdminPlayersSkeleton from '@/components/skeleton/admin-players-skeleton';
import ScoutRequestsSkeleton from '@/components/skeleton/scout-requests-skeleton';
import GridWrappers from '@/components/utils/grid-wrappers';
import SearchNotificationBar from '@/components/utils/search-notification-bar';
import StatusCard from '@/components/utils/status-card';
import { getTotalPlayers, getTotalUsers } from '@/lib/database/queries';
import Link from 'next/link';
import React from 'react';

const AdminDashboardPage = async () => {
   const session = await auth();
   const user = session?.user;
   const userTotal = await getTotalUsers();
   const playerTotal = await getTotalPlayers();
   return (
      <div className="flex flex-col gap-6">
         <header className="flex flex-col gap-4">
            <p className="text-sm">
               Welcome back, <b>{user?.name}</b>
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
         <main className="flex flex-col gap-6">
            <React.Suspense fallback={<ScoutRequestsSkeleton />}>
               <ScoutRequest />
            </React.Suspense>
            <React.Suspense fallback={<AdminPlayersSkeleton />}>
               <PlayersOverview />
            </React.Suspense>
            <SuspendedUserOverview />
         </main>
      </div>
   );
};

export default AdminDashboardPage;
