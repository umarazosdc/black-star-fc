"use client";
import Link from "next/link";
import React from "react";
import Img from "@/components/utils/image";
import RightBar from "@/components/utils/right-bar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import SidebarContent from "@/components/homepage/sidebar-content";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const { update } = useSession();

  return (
    <div className="flex justify-between items-center p-4 w-full bg-primary sticky top-0 z-50 border-b px-4">
      <Link href="/">
        <div className="relative size-[3.2rem] select-none">
          <Img src="/imgs/logo/logo.jpg" alt="Logo" />
        </div>
      </Link>
      <Sheet
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (isOpen) update(); // Refetch session on sheet open
        }}
      >
        <SheetTrigger>
          <RightBar />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
