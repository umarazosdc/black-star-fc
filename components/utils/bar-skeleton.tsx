import React from "react";

const BarSkeleton = () => {
  return (
    <div className="flex justify-between items-center py-4 border-b animate-pulse">
      <div className="flex items-center gap-4 w-full">
        <div className="rounded-full size-12 opacity-25 bg-secondary" />
        <div className="flex flex-col items-start gap-1 w-full overflow-hidden">
          <div className="h-3 w-[60%] opacity-25 bg-secondary rounded-md" />
          <div className="h-3 w-[60%] opacity-25 bg-secondary rounded-md" />
        </div>
      </div>
      <div className="rounded-full">
        <div className="size-6 rounded-full opacity-25 bg-secondary" />
      </div>
    </div>
  );
};

export default BarSkeleton;
