import { formatTime } from "@/lib/date";
import React from "react";
import NotificationContent from "./notification-content";

type Notification = {
  id: string;
  createdAt: Date;
  userId: string;
  title: string;
  message: string;
  senderId: string | null;
  isRead: boolean;
  sender: {
    name: string;
    id: string;
    image: string | null;
  } | null;
};
type Notifications = Notification[];

const InfinteScrollNotification = ({
  notifications,
}: {
  notifications: Notifications;
}) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        {notifications.map((notification, key) => (
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
        ))}
      </div>
    </div>
  );
};

export default InfinteScrollNotification;
