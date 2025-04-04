import React from "react";
import { getPlayers } from "@/lib/database/queries";
import { auth } from "@/auth";
import ImageDisplayCard from "./image-display-card";

const SearchSuggestedPlayers = async () => {
  const session = await auth();
  const players = await getPlayers(session?.user.id as string);
  const playerSubset = players.slice(0, 4);
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {playerSubset.map((player, key) => (
        <ImageDisplayCard
          key={key}
          src={player.thumbnail}
          alt={"Player image"}
          id={player.id}
        />
      ))}
    </div>
  );
};

export default SearchSuggestedPlayers;
