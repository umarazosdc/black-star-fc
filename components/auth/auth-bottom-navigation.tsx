"use client";
import React from "react";
import { BellIcon, LayoutDashboardIcon, SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavIcons from "@/components/utils/nav-icons";
import AuthSheetContent from "./auth-sheet-content";
import { useSession } from "next-auth/react";
import CldImg from "../utils/cldimg";

const AuthBottomNavigationBar = () => {
  const [open, setOpen] = React.useState(false);
  const { data: session, update } = useSession();

  const user = session?.user;

  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/scout/dashboard", icon: LayoutDashboardIcon },
    { name: "Search", path: "/scout/dashboard/search", icon: SearchIcon },
    {
      name: "Notification",
      path: "/scout/dashboard/notification",
      icon: BellIcon,
    },
  ];
  return (
    <nav className="flex justify-between items-center py-1 px-3 bg-primary sticky bottom-0 z-50 border-t w-full">
      {navItems.map((item) => (
        <Link key={item.path} href={item.path}>
          <NavIcons
            icon={item.icon}
            name={item.name}
            className={cn(
              pathname === item.path
                ? "text-accent opacity-100"
                : "text-secondary opacity-70"
            )}
          />
        </Link>
      ))}

      <Sheet
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (isOpen) update(); // Refetch session on sheet open
        }}
      >
        <SheetTrigger>
          <CldImg
            src={user?.image as string}
            alt="Scout image"
            className="size-10 rounded-full"
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
            <AuthSheetContent />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default AuthBottomNavigationBar;
