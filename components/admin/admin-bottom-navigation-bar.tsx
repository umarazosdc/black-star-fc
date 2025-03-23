"use client";
import React from "react";
import {
  BellIcon,
  LayoutDashboardIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
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
import AdminSheetContent from "@/components/admin/admin-sheet-content";
import NavIcons from "../utils/nav-icons";
import CldImg from "../utils/cldimg";
import { useSession } from "next-auth/react";

const AdminBottomNavigationBar = () => {
  const [open, setOpen] = React.useState(false);
  const { data: session, update } = useSession();

  const user = session?.user;

  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/ad/dashboard", icon: LayoutDashboardIcon },
    { name: "Search", path: "/ad/dashboard/search", icon: SearchIcon },
    { name: "new", path: "/ad/dashboard/new", icon: PlusIcon },
    {
      name: "Notification",
      path: "/ad/dashboard/notification",
      icon: BellIcon,
    },
  ];

  return (
    <nav className="flex justify-between items-center py-1 px-3 bg-primary sticky bottom-0 z-50 border-t w-full">
      {navItems.map((item) =>
        item.name === "new" ? (
          pathname !== "/ad/dashboard/new" && (
            <Link
              href={item.path}
              key={item.name}
              className="bg-accent p-2.5 rounded-full shadow-md text-primary hover:scale-110 transition-transform duration-300"
            >
              <PlusIcon strokeWidth={3} />
            </Link>
          )
        ) : (
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
        )
      )}

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
            <AdminSheetContent />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default AdminBottomNavigationBar;
