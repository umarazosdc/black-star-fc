import React from "react";
import SheetHeader from "../utils/sheet-header";
import SheetAccordion from "../utils/sheet-accordion";
import { LayersIcon, Users2Icon } from "lucide-react";
import BarSkeleton from "../utils/bar-skeleton";
import LogOutButton from "../utils/log-out-button";
import { User } from "@prisma/client";

export interface ExtendUserProps extends User {
  state: string;
}

export interface SheetContentProps {
  user: ExtendUserProps | null;
}

const AdminSheetContent = ({ user }: SheetContentProps) => {
  return (
    <div className="flex flex-col h-full">
      <main className="flex flex-col gap-6">
        {user ? <SheetHeader user={user} /> : <BarSkeleton />}
        <div className="flex flex-col gap-4">
          <SheetAccordion
            icon={LayersIcon}
            field="Players"
            items={[
              { path: "/explore", name: "View all" },
              { path: "/explore/requests", name: "Requested" },
              { path: "/explore/bookmarks", name: "Bookmarked" },
            ]}
          />
          <SheetAccordion
            icon={Users2Icon}
            field="Users"
            items={[
              { path: "/explore", name: "Suspended" },
              { path: "/explore/requests", name: "Made Requests" },
              { path: "/explore/bookmarks", name: "Bookmarked players" },
            ]}
          />
        </div>
      </main>
      <footer className="absolute bottom-8">
        <LogOutButton />
      </footer>
    </div>
  );
};

export default AdminSheetContent;
