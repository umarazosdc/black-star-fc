import React from "react";

const NotificationSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 animate-pulse">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          className="flex flex-col gap-2 p-2 rounded-md shadow-md"
          key={i}
        >
          <div className="h-3 w-[45%] rounded-md bg-secondary opacity-20" />
          {Array.from({ length: 3 }, (_, i) => (
            <div
              className="w-[85%] h-3 rounded-md bg-secondary opacity-20"
              key={i}
            />
          ))}
          <div className="self-end h-3 w-16 rounded-md bg-secondary opacity-20" />
        </div>
      ))}
    </div>
  );
};

export default NotificationSkeleton;
