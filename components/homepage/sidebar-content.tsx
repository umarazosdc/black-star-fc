"use client";
import React from "react";
import { BookmarkIcon, BoxIcon, LogOutIcon, SendIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import AuthPagination from "@/components/auth/auth-pagination";
import useSessionHook from "@/lib/hook/use-session";
import SheetHeader from "../utils/sheet-header";

const SidebarContent = () => {
  const user = useSessionHook();
  const role = user?.role;

  const paths = [
    { name: "Dashboard", path: `/${role}/dashboard`, icon: BoxIcon },
    { name: "Bookmarks", path: "/explore/bookmarks", icon: BookmarkIcon },
    { name: "Requested", path: "/explore/requests", icon: SendIcon },
  ];
  return (
    <div className="flex flex-col h-full">
      <SheetHeader />
      <div className="flex flex-col gap-2 mt-2">
        {paths.map((path, key) => (
          <AuthPagination
            key={key}
            path={path.path}
            icon={path.icon}
            name={path.name}
          />
        ))}
      </div>
      <footer className="absolute bottom-8">
        <button
          className="flex gap-2 items-center text-sm"
          onClick={async () => await signOut()}
        >
          <LogOutIcon />
          <span>Logout</span>
        </button>
      </footer>
    </div>
  );
};

export default SidebarContent;
