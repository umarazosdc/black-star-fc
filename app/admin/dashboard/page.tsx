import PlayersOverview from '@/components/admin/players-overview';
import ScoutRequest from '@/components/admin/scout-request';
import SuspendedUserOverview from '@/components/admin/suspend-users-overview';
import GridWrappers from '@/components/utils/grid-wrappers';
import SearchNotificationBar from '@/components/utils/search-notification-bar';
import StatusCard from '@/components/utils/status-card';
import {
   requests,
   getTotalPlayers,
   getTotalUsers,
} from '@/lib/database/queries';
import { formatDate } from '@/lib/date';
import Link from 'next/link';
import React from 'react';

const AdminDashboardPage = async () => {
   const userTotal = await getTotalUsers();
   const playerTotal = await getTotalPlayers();
   const rqsts = await requests();
   return (
      <div className="flex flex-col gap-6">
         <header className="flex flex-col gap-4">
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
         <main className="flex flex-col gap-6">
            {rqsts.map((rqst, key) => (
               <ScoutRequest
                  key={key}
                  id={rqst.user.id}
                  name={rqst.user.name}
                  email={rqst.user.email}
                  src={rqst.user.image as string}
                  date={formatDate(String(rqst.user.createdAt))}
                  playerAge={rqst.player.age}
                  playerName={
                     rqst.player.firstname + ' ' + rqst.player.lastname
                  }
                  playerImage={rqst.player.image}
                  playerPosition={rqst.player.position}
                  userId={rqst.userId}
               />
            ))}
            <PlayersOverview />
            <SuspendedUserOverview />
         </main>
      </div>
   );
};

export default AdminDashboardPage;
