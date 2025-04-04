import React from "react";
import SearchBar from "./search-bar";
import { BellIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatTime } from "@/lib/date";
import NotificationContent from "./notification-content";
import { getBellNotificationByUserId } from "@/lib/database/queries";
import { auth } from "@/auth";

const SearchNotificationBar = async ({
  placeholder,
  basePath,
}: {
  placeholder: string;
  basePath: string;
}) => {
  const session = await auth();
  const userId = session?.user.id;
  const notifications = await getBellNotificationByUserId(userId as string);

  return (
    <div className="flex items-center gap-4">
      <SearchBar placeholder={placeholder} basePath={basePath} />

      <Popover>
        <PopoverTrigger asChild>
          <button className="relative size-10 rounded-full p-2 bg-card flex items-center justify-center">
            <BellIcon className="text-accent" />
            {notifications.length > 0 && (
              <span
                className="absolute top-0 right-0.5 size-2.5 rounded-full"
                style={{ background: "red" }}
              />
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-2 max-h-80 overflow-auto">
          {!(notifications.length > 0) && (
            <p className="text-sm text-muted-foreground">
              No recent notification yet.
            </p>
          )}
          {notifications.map((notification, key) => (
            <NotificationContent
              key={key}
              content={notification.message as string}
              time={formatTime(notification.createdAt)}
              title={notification.title}
              isRead={notification.isRead}
              userImage={notification.sender?.image as string}
              userName={notification.sender?.name as string}
              id={notification.id}
            />
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchNotificationBar;
