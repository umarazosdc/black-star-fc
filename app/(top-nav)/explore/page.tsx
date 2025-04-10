import { auth } from "@/auth";
import ExplorePlayers from "@/components/explore/explore-players";
import { searchAndSort } from "@/lib/data";
import { getPlayersBySearchAndOrder } from "@/lib/database/queries";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

const ExplorePlayersPage = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) => {
  const session = await auth();

  // Check if the user is authenticated
  if (!session?.user) redirect("/login");

  const params = await searchParams;
  const { search="", sort } = params;
  const userId = session?.user.id as string;

  const orderBy = searchAndSort(sort as string, "player");

  const players = await getPlayersBySearchAndOrder(
    search,
    orderBy as Prisma.PlayerOrderByWithRelationInput,
    userId
  );

  return <ExplorePlayers players={players} />;
};

export default ExplorePlayersPage;
