import React from "react";
import { getUsers } from "@/lib/database/queries";
import ImageDisplayCard from "./image-display-card";

const AdminUsers = async () => {
  const users = await getUsers();
  const userSubset = users.slice(0, 4);
  return (
    <div className="columns-2 gap-2 space-y-2">
      {userSubset.map((user) => (
        <ImageDisplayCard
          key={user.id}
          src={user.image ? user.image : "uploads/images/defaultjpg"}
          alt={"User image"}
          id={user.id}
          isUser={true}
        />
      ))}
    </div>
  );
};

export default AdminUsers;
