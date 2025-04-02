"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Home, LayoutDashboardIcon, BellIcon, PlusIcon, SearchIcon } from "lucide-react";
import NavIcons from "./nav-icons";
import { cn } from "@/lib/utils";

// Map icon strings to actual Lucide React components
const iconsMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  SearchIcon,
  PlusIcon,
  BellIcon,
  LayoutDashboardIcon,
};

interface NavItemProps {
  name: string;
  path: string;
  icon: string; // Now accepts string instead of component
}

interface NavigationItemsProps {
  navItems: NavItemProps[];
}

const BottomNavIcons = ({ navItems }: NavigationItemsProps) => {
  const pathname = usePathname();

  return navItems.map((item) => {
    const IconComponent = iconsMap[item.icon] || Home; // Default to Home if not found

    return item.name === "new" ? (
      pathname !== "/dashboard/new" && (
        <Link
          href={item.path}
          key={item.name}
          className="bg-accent p-2.5 rounded-full shadow-md text-primary hover:scale-110 transition-transform duration-300"
        >
          <IconComponent strokeWidth={3} />
        </Link>
      )
    ) : (
      <Link key={item.path} href={item.path}>
        <NavIcons
          icon={IconComponent} // Now passing the resolved component
          name={item.name}
          className={cn(
            pathname === item.path
              ? "text-accent opacity-100"
              : "text-secondary opacity-70"
          )}
        />
      </Link>
    );
  });
};

export default BottomNavIcons;
