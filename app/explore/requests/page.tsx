import { auth } from "@/auth";
import GridWrappers from "@/components/utils/grid-wrappers";
import RequestedPlayerCard from "@/components/utils/requested-player-card";
import Wrapper from "@/components/utils/wrapper";
import { getRequestedPlayersById } from "@/lib/database/queries";
import React from "react";

const RequestsPage = async () => {
  const session = await auth();
  const id = session?.user.id;
  const requests = await getRequestedPlayersById(id as string);
  return (
    <Wrapper title="Requests">
      <GridWrappers>
        {requests.length > 0 ? (
          requests.map((request, key) => (
            <RequestedPlayerCard
              key={key}
              src={request.player.image}
              position={request.player.position}
              age={request.player.age}
              id={request.player.id}
              name={request.player.firstname + " " + request.player.lastname}
            />
          ))
        ) : (
          <p className="text-sm text-muted-foreground">
            You have not bookmarked any player yet.
          </p>
        )}
      </GridWrappers>
    </Wrapper>
  );
};

export default RequestsPage;
