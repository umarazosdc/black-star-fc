import React from "react";

const BarSkeleton = () => {
  return (
    <div className="flex justify-between items-center py-4 border-b animate-pulse">
      <div className="flex items-center gap-4 w-full">
        <div className="rounded-full size-12 bg-slate-300" />
        <div className="flex flex-col items-start gap-1 w-full overflow-hidden">
          <div className="font-bold text-sm h-3 w-32 bg-slate-300 rounded-md" />
          <div className="text-xs opacity-70 h-3 w-32 bg-slate-300 rounded-md" />
        </div>
      </div>
      <div className="p-2 rounded-full border text-accent">
        <div className="size-3 rounded-full bg-slate-300" />
      </div>
    </div>
  );
};

export default BarSkeleton;
