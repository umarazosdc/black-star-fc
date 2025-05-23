import { auth } from "@/auth";
import Players from "@/components/admin/players";
import { redirect } from "next/navigation";
import React from "react";

const PlayersPage = async () => {
  const session = await auth();
  const user = session?.user;

  // Check if the user is authenticated
  if (!user) redirect("/login");

  if (user?.role !== "admin") redirect("/unauthorized");

  return <Players />;
};

export default PlayersPage;
