import React from "react";
import Age from "../utils/age";
import EditButton from "../auth/edit-button";
import CldImg from "../utils/cldimg";
import PlayerCardRemoveButton from "./player-card-remove-button";
import { getPlayerById, getStatsById } from "@/lib/database/queries";

const PlayerCard = async ({
  src,
  name,
  position,
  age,
  id,
  videos,
}: {
  src: string[];
  name: string;
  position: string;
  age: number;
  id: string;
  videos?: string[];
}) => {
  const player = await getPlayerById(id);
  const playerStats = await getStatsById(id);
  if (!player) return null;
  if (!playerStats) return null;

  return (
    <div className="flex flex-col gap-4 shadow-md p-4 bg-card rounded-md">
      <div className="self-start flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <CldImg
            src={src[0]}
            alt="Player"
            className="rounded-full size-[5.5rem]"
          />
          <div className="flex flex-col gap-2">
            <div className="text-base font-bold tracking-wide">{name}</div>
            <div className="text-sm font-bold opacity-70 capitalize">
              {position}
            </div>
          </div>
        </div>
        <Age age={age} />
      </div>
      <div className="self-end flex items-center gap-4">
        <EditButton player={player} playerStats={playerStats} />
        <PlayerCardRemoveButton videos={videos} src={src} id={id} />
      </div>
    </div>
  );
};

export default PlayerCard;
