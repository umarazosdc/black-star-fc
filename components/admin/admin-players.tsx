import React from "react";
import { getPlayers } from "@/lib/database/queries";
import { auth } from "@/auth";
import ImageDisplayCard from "./image-display-card";

const SearchPlayers = async () => {
  const session = await auth();
  const players = await getPlayers(session?.user.id as string);
  const playerSubset = players.slice(0, 4);
  return (
    <div className="columns-2 gap-2 space-y-2">
      {playerSubset.map((player) => (
        <ImageDisplayCard
          key={player.id}
          src={player.thumbnail}
          alt={"Player image"}
        />
      ))}
    </div>
  );
};

export default SearchPlayers;
