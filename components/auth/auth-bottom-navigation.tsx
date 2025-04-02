import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AuthSheetContent from "./auth-sheet-content";
import CldImg from "../utils/cldimg";
import { scoutNavItems } from "@/lib/data";
import BottomNavIcons from "../utils/bottom-nav-icons";
import { getUserById } from "@/lib/database/queries";
import { auth } from "@/auth";

const AuthBottomNavigationBar = async () => {
  const session = await auth();
  const userId = session?.user.id as string;
  const user = await getUserById(userId);

  return (
    <nav className="flex justify-between items-center py-1 px-3 bg-primary sticky bottom-0 z-50 border-t w-full">
      <BottomNavIcons navItems={scoutNavItems} />
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
            <AuthSheetContent
              user={user ? { ...user, state: user.state ?? "" } : null}
            />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default AuthBottomNavigationBar;
