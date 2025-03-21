import { auth } from "@/auth";
import InfinteScrollNotification from "@/components/utils/infinite-scroll-notification";
import { getNotificationByUserId } from "@/lib/database/queries";
import React from "react";

const AdminNotificationPage = async () => {
  const session = await auth();
  const userId = session?.user.id;

  const notifications = await getNotificationByUserId(userId as string);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-base">Notifications</h1>
      <InfinteScrollNotification notifications={notifications}/>
    </div>
  );
};

export default AdminNotificationPage;
