// This file contains the data used in the application
// such as roles, positions, weights, heights, months, years, stats, and navigation items.

import { Prisma } from "@prisma/client";

export const roles = [
  { role: "Centre-back" },
  { role: "Full-back" },
  { role: "Wing-back" },
  { role: "Centre-midfielder" },
  { role: "Defensive-midfielder" },
  { role: "Attacking-midfielder" },
  { role: "Wide-midfielder" },
  { role: "Centre-forward" },
  { role: "Second-striker" },
  { role: "Winger" },
];
export const positions = [
  { position: "Defender" },
  { position: "Midfielder" },
  { position: "Forward" },
];
export const weights = [
  { weight: 45.9 },
  { weight: 60.66 },
  { weight: 62.1 },
  { weight: 68.44 },
  { weight: 73.39 },
  { weight: 80.1 },
];
export const heights = [
  { height: 5 },
  { height: 5.3 },
  { height: 5.5 },
  { height: 5.8 },
  { height: 6 },
  { height: 6.2 },
];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const years = Array.from(
  { length: 101 },
  (_, i) => new Date().getFullYear() - i
);

export const stats = {
  spd: "Speed",
  sho: "Shooting",
  def: "Defense",
  dri: "Dribbling",
  pac: "Pace",
  pas: "Passing",
};

export const scoutNavItems = [
  { name: "Home", path: "/scout/dashboard", icon: "LayoutDashboardIcon" },
  { name: "Search", path: "/scout/dashboard/search", icon: "SearchIcon" },
  {
    name: "Notification",
    path: "/scout/dashboard/notification",
    icon: "BellIcon",
  },
];

export const adminNavItems = [
  { name: "Home", path: "/dashboard", icon: "LayoutDashboardIcon" },
  { name: "Search", path: "/dashboard/search", icon: "SearchIcon" },
  { name: "new", path: "/dashboard/new", icon: "PlusIcon" },
  {
    name: "Notification",
    path: "/dashboard/notification",
    icon: "BellIcon",
  },
];

export const searchAndSort = (sortBy: string, model: "user" | "player") => {
  const userSortOptions: Record<string, Prisma.UserOrderByWithRelationInput> = {
    "a-z": { name: "asc" }, // 'name' exists in User model
    newest: { createdAt: "desc" },
    oldest: { createdAt: "asc" },
    suspended: { status: "desc" },
  };

  const playerSortOptions: Record<
    string,
    Prisma.PlayerOrderByWithRelationInput
  > = {
    "a-z": { firstname: "asc", lastname: "asc" },
    newest: { createdAt: "desc" },
    oldest: { createdAt: "asc" },
  };

  return model === "user"
    ? userSortOptions[sortBy] || { name: "asc" }
    : playerSortOptions[sortBy] || { firstname: "asc" };
};
