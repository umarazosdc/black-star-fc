import SearchFilter from "@/components/utils/search-filter";
import React from "react";
import GridWrappers from "../utils/grid-wrappers";
import SearchFilterBar from "../utils/search-filter-bar";
import { getAge } from "@/lib/date";
import { auth } from "@/auth";
import SuggestedPlayersCard from "../utils/unbookmarked-player-card";
import { Player } from "@prisma/client";

interface ExplorePlayersProps {
  players: Player[];
}

const ExplorePlayers = async ({ players }: ExplorePlayersProps) => {
  const session = await auth();
  const isAdmin = session?.user.role == "admin";

  return (
    <div className="flex flex-col space-y-8">
      <header className="flex flex-col space-y-6">
        <h2 className="font-bold text-xl text-secondary text-center">
          Uncover hidden talents, build unstoppable teams
        </h2>
        <p className="text-sm text-secondary text-center">
          Your ultimate platform for discovering and showcasing the next
          generation of football stars
        </p>
      </header>
      <main className="flex flex-col space-y-4">
        <SearchFilterBar
          placeholder="Search for a player..."
          items={["A-Z", "Newest", "Age", "Oldest"]}
          basePath="/explore"
        />
        <SearchFilter />
        <GridWrappers>
          {!(players.length > 0) ? (
            <p className="text-muted-foreground text-sm">
              We&#39;re scouting for the best players. We&#39;ll add players
              soon...
            </p>
          ) : (
            players.map((player, key) => (
              <SuggestedPlayersCard
                key={key}
                src={player.image}
                position={player.position}
                name={player.firstname + " " + player.lastname}
                age={getAge(player.dob)}
                isAdmin={isAdmin}
                id={player.id}
                userId={session?.user.id as string}
              />
            ))
          )}
        </GridWrappers>
      </main>
    </div>
  );
};

export default ExplorePlayers;
