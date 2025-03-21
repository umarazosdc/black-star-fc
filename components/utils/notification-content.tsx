import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import NotificationDialog from "./notification-dialog";

const NotificationContent = async ({
  title,
  content,
  time,
  className,
  isRead,
  userName,
  userImage,
  id,
}: {
  title: string;
  content: string;
  time: string;
  className?: string | undefined;
  isRead?: boolean;
  userName: string;
  userImage: string;
  id: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <NotificationDialog
      name={userName}
      src={userImage}
      alt="Scout image"
      description="Scout"
      date={time}
      message={content}
      subject={title}
      id={id}
    >
      <div
        className={cn(
          "flex flex-col gap-2 p-2 rounded-md shadow-md border-r border-t relative cursor-pointer",
          !isRead ? "bg-card" : "bg-card/25",
          className
        )}
      >
        <h1 className="text-sm font-bold truncate">{title}</h1>
        <p
          className={cn(
            "text-xs w-[85%]",
            !isRead ? "line-clamp-3" : "truncate"
          )}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <p className="self-end text-xs">{time}</p>
        {!isRead && (
          <div className="size-2.5 rounded-full bg-accent absolute top-1/2 -translate-y-1/2 right-2" />
        )}
      </div>
    </NotificationDialog>
  );
};

export default NotificationContent;
