import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AdminSheetContent from "@/components/admin/admin-sheet-content";
import CldImg from "../utils/cldimg";
import BottomNavIcons from "../utils/bottom-nav-icons";
import { adminNavItems } from "@/lib/data";
import { auth } from "@/auth";
import { getUserById } from "@/lib/database/queries";

const AdminBottomNavigationBar = async () => {
  const session = await auth();
  const userId = session?.user.id as string;
  const user = await getUserById(userId);

  return (
    <nav className="flex justify-between items-center py-1 px-3 bg-primary sticky bottom-0 z-50 border-t w-full">
      <BottomNavIcons navItems={adminNavItems} />
      <Sheet>
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
            <AdminSheetContent user={user ? { ...user, state: user.state ?? "" } : null} />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default AdminBottomNavigationBar;
