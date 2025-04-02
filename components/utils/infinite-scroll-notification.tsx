import { formatTime } from "@/lib/date";
import React from "react";
import NotificationContent from "./notification-content";
import { auth } from "@/auth";
import { getNotificationByUserId } from "@/lib/database/queries";

// type Notification = {
//   id: string;
//   createdAt: Date;
//   userId: string;
//   title: string;
//   message: string;
//   senderId: string | null;
//   isRead: boolean;
//   sender: {
//     name: string;
//     id: string;
//     image: string | null;
//   } | null;
// };
// type Notifications = Notification[];

const InfinteScrollNotification = async () => {
  const session = await auth();
  const userId = session?.user.id;

  const notifications = await getNotificationByUserId(userId as string);
  return (
    <div>
      <div className="flex flex-col gap-2">
        {notifications.length > 0 ? (
          notifications.map((notification, key) => (
            <NotificationContent
              key={key}
              title={notification.title}
              content={notification.message as string}
              time={formatTime(notification.createdAt)}
              isRead={notification.isRead}
              userImage={notification.sender?.image as string}
              userName={notification.sender?.name as string}
              id={notification.id}
            />
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No notification yet.</p>
        )}
      </div>
    </div>
  );
};

export default InfinteScrollNotification;
