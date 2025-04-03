import React from "react";

const AdminPlayersAndUsersLoadingSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <div className="h-5 w-2/5 bg-secondary opacity-25 rounded-md" />

      <div className="flex gap-3 items-center">
        <div className="h-10 w-full bg-secondary opacity-25 rounded-md" />

        <div className="size-10 bg-secondary opacity-25 rounded-full" />
      </div>

      <div className="flex flex-col gap-3 items-center">
        <div className="self-end h-3 w-20 bg-secondary opacity-25 rounded-md" />

        <div className="flex flex-col gap-3 w-full">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              className="rounded-md w-full h-32 bg-secondary opacity-25"
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPlayersAndUsersLoadingSkeleton;
