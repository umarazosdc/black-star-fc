import React from "react";
import SuspendedUserCard from "./suspended-user-card";
import { getSuspendedUsers } from "@/lib/database/queries";
import { suspendedSince } from "@/lib/date";

const SuspendedUsersOverview = async () => {
  const suspendedUsers = await getSuspendedUsers();
  return (
    <div className="flex flex-col gap-3">
      {suspendedUsers.map((suspendedUser, key) => (
        <SuspendedUserCard
          key={key}
          src={suspendedUser.image as string}
          name={suspendedUser.name}
          email={suspendedUser.email}
          date={suspendedSince(suspendedUser.suspendedUntil as Date)}
          userId={suspendedUser.id}
        />
      ))}
    </div>
  );
};

export default SuspendedUsersOverview;
