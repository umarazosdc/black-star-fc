import React from "react";
import PlayerCard from "./player-card";
import { getPlayers } from "@/lib/database/queries";
import { auth } from "@/auth";
import { getAge } from "@/lib/date";

const PlayersOverview = async () => {
  const session = await auth();
  const user = session?.user;
  const players = await getPlayers(user?.id as string);
  return (
    <div className="flex flex-col gap-3">
      {players.map((player, key) => (
        <PlayerCard
          key={key}
          src={[player.image, player.thumbnail]}
          name={player.firstname + " " + player.lastname}
          position={player.position}
          age={getAge(player.dob)}
          videos={player.videos}
          id={player.id}
        />
      ))}
    </div>
  );
};

export default PlayersOverview;
