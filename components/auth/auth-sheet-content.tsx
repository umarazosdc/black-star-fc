import React from "react";
import { BookmarkIcon, BoxIcon, SendIcon } from "lucide-react";
import SheetHeader from "../utils/sheet-header";
import AuthPagination from "./auth-pagination";
import { useSession } from "next-auth/react";
import BarSkeleton from "../utils/bar-skeleton";
import LogOutButton from "../utils/log-out-button";

const AuthSheetContent = () => {
  const { data: session, update } = useSession();

  React.useEffect(() => {
    update(); // Re-fetch user session when SidebarContent mounts
  }, [update]);

  const user = session?.user;

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
            <AuthPagination
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
