import React from "react";
import SheetHeader from "../utils/sheet-header";
import { BookmarkIcon, SendIcon, Users2Icon } from "lucide-react";
import BarSkeleton from "../utils/bar-skeleton";
import LogOutButton from "../utils/log-out-button";
import { User } from "@prisma/client";
import ContentPagination from "../auth/content-pagination";

export interface ExtendUserProps extends User {
  state: string;
}

export interface SheetContentProps {
  user: ExtendUserProps | null;
}

const AdminSheetContent = ({ user }: SheetContentProps) => {
  const paths = [
    { name: "Who made request", path: "/explore", icon: Users2Icon },
    { name: "Bookmarks", path: "/explore/bookmarks", icon: BookmarkIcon },
    { name: "Requested", path: "/explore/requests", icon: SendIcon },
  ];
  return (
    <div className="flex flex-col h-full">
      <main className="flex flex-col gap-6">
        {user ? <SheetHeader user={user} /> : <BarSkeleton />}
        <div className="flex flex-col gap-2">
          {paths.map((path, key) => (
            <ContentPagination
              key={key}
              path={path.path}
              icon={path.icon}
              name={path.name}
            />
          ))}
        </div>
      </main>
      <footer className="absolute bottom-8">
        <LogOutButton />
      </footer>
    </div>
  );
};

export default AdminSheetContent;
