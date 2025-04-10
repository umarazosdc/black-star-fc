import React from "react";
import { BookmarkIcon, BoxIcon, SendIcon } from "lucide-react";
import SheetHeader from "../utils/sheet-header";
import ContentPagination from "./content-pagination";
import BarSkeleton from "../utils/bar-skeleton";
import LogOutButton from "../utils/log-out-button";
import { SheetContentProps } from "../admin/admin-sheet-content";

const AuthSheetContent = ({ user }: SheetContentProps) => {
  const paths = [
    { name: "Explore players", path: "/explore", icon: BoxIcon },
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

export default AuthSheetContent;
