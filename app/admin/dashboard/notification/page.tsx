import { auth } from "@/auth";
import NotificationContent from "@/components/utils/notification-content";
import { getNotificationByUserId } from "@/lib/database/queries";
import { formatTime } from "@/lib/date";
import React from "react";

const AdminNotificationPage = async () => {
  const session = await auth();
  const userId = session?.user.id;

  const notifications = await getNotificationByUserId(userId as string);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-base">Notifications</h1>
      <div className="flex flex-col gap-2">
        {notifications.length > 0 ? (
          notifications.map((notification, key) => (
            <NotificationContent
              key={key}
              title={notification.title}
              content={notification.message as string}
              time={formatTime(notification.createdAt)}
              isRead={notification.isRead}
            />
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No notification yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminNotificationPage;
