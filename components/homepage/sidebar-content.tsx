"use client";
import React from "react";
import {
  BellIcon,
  BookmarkIcon,
  BoxIcon,
  LogInIcon,
  PlusSquareIcon,
  SendIcon,
  ShieldIcon,
  Users2Icon,
} from "lucide-react";
import ContentPagination from "@/components/auth/content-pagination";
import SheetHeader from "../utils/sheet-header";
import Link from "next/link";
import Img from "../utils/image";
import LogOutButton from "../utils/log-out-button";
import { SheetContentProps } from "../admin/admin-sheet-content";

const SidebarContent = ({ user }: SheetContentProps) => {
  const role = user?.role;

  const route = role === "admin" ? "/dashboard" : "/scout/dashboard";

  const paths =
    role === "admin"
      ? [
          { name: "Dashboard", path: `${route}`, icon: BoxIcon },
          { name: "Scouts", path: "/dashboard/users", icon: Users2Icon },
          { name: "Players", path: "/dashboard/players", icon: ShieldIcon },
          {
            name: "Add New Player",
            path: "/dashboard/new",
            icon: PlusSquareIcon,
          },
          {
            name: "Notifications",
            path: "/dashboard/notification",
            icon: BellIcon,
          },
        ]
      : [
          { name: "Dashboard", path: `${route}`, icon: BoxIcon },
          { name: "Bookmarks", path: "/explore/bookmarks", icon: BookmarkIcon },
          { name: "Requested", path: "/explore/requests", icon: SendIcon },
          {
            name: "Notifications",
            path: "/scout/dashboard/notification",
            icon: BellIcon,
          },
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
            <ContentPagination
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
