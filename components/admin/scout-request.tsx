import React from "react";
import UserCard from "./user-card";
import PlayerImage from "../utils/player-image";
import { requests } from "@/lib/database/queries";
import { formatDate, getAge } from "@/lib/date";

const ScoutRequest = async () => {
  const rqsts = await requests();
  return (
    <div className="flex flex-col gap-3">
      {rqsts.map((rqst, key) => (
        <UserCard
          key={key}
          src={rqst.user.image as string}
          name={rqst.user.name}
          email={rqst.user.email}
          date={formatDate(String(rqst.user.createdAt))}
          playerName={rqst.player.firstname + " " + rqst.player.lastname}
          playerId={rqst.playerId}
          isAdminDashboard
          playersAge={getAge(rqst.player.dob)}
          userId={rqst.user.id}
          isAccepted={rqst.isRequested}
        >
          <PlayerImage
            src={rqst.player.image}
            position={rqst.player.position}
          />
        </UserCard>
      ))}
    </div>
  );
};

export default ScoutRequest;
