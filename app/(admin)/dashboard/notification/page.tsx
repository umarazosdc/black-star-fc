import { auth } from "@/auth";
import InfinteScrollNotification from "@/components/utils/infinite-scroll-notification";
import NotificationSkeleton from "@/components/utils/NotificationSkeleton";
import { redirect } from "next/navigation";
import React from "react";

const AdminNotificationPage = async() => {
  const session = await auth()
  const user = session?.user

  if (!user) redirect("/login");

  if (user?.role !== "admin") redirect("/unauthorized");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-base">Notifications</h1>
      <React.Suspense fallback={<NotificationSkeleton />}>
        <InfinteScrollNotification />
      </React.Suspense>
    </div>
  );
};

export default AdminNotificationPage;
