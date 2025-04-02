import { getPlayersBySearch } from "@/lib/database/queries";
import React from "react";
import SearchDisplayer from "../admin/admin-search-display";
import ImageDisplayCard from "../admin/image-display-card";

const ScoutPlayerProfile = async ({ search }: { search: string }) => {
  const players = await getPlayersBySearch(search);
  return (
    <SearchDisplayer>
      {players.length > 0 &&
        players.map(
          (player, key) =>
            player.image && (
              <ImageDisplayCard
                key={key}
                src={player.image ? player.image : "uploads/images/defaultjpg"}
                alt="Player image"
              />
            )
        )}

      {!(players.length > 0) && (
        <p className="text-sm">Search is not available</p>
      )}
    </SearchDisplayer>
  );
};

export default ScoutPlayerProfile;
