import { auth } from "@/auth";
import InfinteScrollNotification from "@/components/utils/infinite-scroll-notification";
import NotificationSkeleton from "@/components/utils/NotificationSkeleton";
import { redirect } from "next/navigation";
import React from "react";

const NotificationPage = async () => {
  const session = await auth();

  // Check if user is authenticated
  if (!session?.user) redirect("/login");

  if (session.user.role === "admin") redirect("/dashboard");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-base">Notifications</h1>
      <React.Suspense fallback={<NotificationSkeleton />}>
        <InfinteScrollNotification />
      </React.Suspense>
    </div>
  );
};

export default NotificationPage;
