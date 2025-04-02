import InfinteScrollNotification from "@/components/utils/infinite-scroll-notification";
import NotificationSkeleton from "@/components/utils/NotificationSkeleton";
import React from "react";

const NotificationPage = () => {
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
