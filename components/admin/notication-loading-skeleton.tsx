import React from "react";

const NotificationLoadingSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 animate-pulse">
      <div className="h-4 w-2/5 bg-secondary opacity-25 rounded-md" />
      <div className="flex flex-col gap-2 animate-pulse">
        {Array.from({ length: 5 }, (_, i) => (
          <div className="h-32 rounded-md bg-secondary opacity-25" key={i} />
        ))}
      </div>
    </div>
  );
};

export default NotificationLoadingSkeleton;
