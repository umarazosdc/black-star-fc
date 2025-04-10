import { auth } from "@/auth";
import AdminPlayersOverviewWrapper from "@/components/admin/admin-players-overview-wrapper";
import ScoutRequestWrapper from "@/components/admin/scout-request-wrapper";
import SuspendedUserOverviewWrapper from "@/components/admin/suspend-users-overview-wrapper";
import GridWrappers from "@/components/utils/grid-wrappers";
import SearchNotificationBar from "@/components/utils/search-notification-bar";
import StatusCard from "@/components/utils/status-card";
import { getTotalPlayers, getTotalUsers } from "@/lib/database/queries";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const AdminDashboardPage = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) redirect("/login");

  // Check if user is an admin
  // If not, redirect to unauthorized page
  if (user?.role !== "admin") redirect("/unauthorized");

  // Check if user is authenticated

  const userTotal = await getTotalUsers();
  const playerTotal = await getTotalPlayers();

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-4">
        <p className="text-sm">
          Welcome back, <b>{user?.name}</b>
        </p>
        <SearchNotificationBar placeholder="Search..." basePath="/dashboard" />
        <GridWrappers>
          <Link href="/dashboard/users">
            <StatusCard value={userTotal} name="Total Users" />
          </Link>
          <Link href="/dashboard/players">
            <StatusCard value={playerTotal} name="Total Players" />
          </Link>
        </GridWrappers>
      </header>
      <main className="flex flex-col gap-6">
        <ScoutRequestWrapper />
        <AdminPlayersOverviewWrapper />
        <SuspendedUserOverviewWrapper />
      </main>
    </div>
  );
};

export default AdminDashboardPage;
