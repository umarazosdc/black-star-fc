"use client";
import React from "react";
import { BookmarkIcon, BoxIcon, LogInIcon, SendIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import AuthPagination from "@/components/auth/auth-pagination";
import SheetHeader from "../utils/sheet-header";
import Link from "next/link";
import Img from "../utils/image";
import LogOutButton from "../utils/log-out-button";

const SidebarContent = () => {
  const { data: session, update } = useSession();

  React.useEffect(() => {
    update(); // Re-fetch user session when SidebarContent mounts
  }, [update]);

  const user = session?.user;
  const role = user?.role;

  const paths = [
    { name: "Dashboard", path: `/${role}/dashboard`, icon: BoxIcon },
    { name: "Bookmarks", path: "/explore/bookmarks", icon: BookmarkIcon },
    { name: "Requested", path: "/explore/requests", icon: SendIcon },
  ];
  return (
    <div className="flex flex-col h-full">
      {user ? (
        <SheetHeader user={user} />
      ) : (
        <Link href="/" className="flex items-center gap-2">
          <div className="relative size-[2rem] select-none">
            <Img src="/imgs/logo/logo.jpg" alt="Logo" />
          </div>
          <h1 className="text-xs font-bold uppercase tracking-widest">
            Black Stars FC
          </h1>
        </Link>
      )}

      {user && (
        <div className="flex flex-col gap-2 mt-4">
          {paths.map((path, key) => (
            <AuthPagination
              key={key}
              path={path.path}
              icon={path.icon}
              name={path.name}
            />
          ))}
        </div>
      )}

      <footer className="absolute bottom-8 text-sm">
        {user ? (
          <LogOutButton />
        ) : (
          <Link
            href="/login"
            className="flex gap-2 items-center bg-accent py-2 px-4 rounded-md text-primary"
          >
            <LogInIcon className="size-4" />
            <span>Sign In</span>
          </Link>
        )}
      </footer>
    </div>
  );
};

export default SidebarContent;
