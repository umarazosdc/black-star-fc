import { PlusIcon } from "lucide-react";
import React from "react";

const AddNewPlayerSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 w-full animate-pulse">
      <div className="self-start flex items-center justify-between w-full">
        <div className="h-5 w-2/5 bg-secondary opacity-25 rounded-md" />

        <div className="h-3 w-12 bg-secondary opacity-25 rounded-md" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-md bg-secondary flex justify-center items-center min-h-72 opacity-25">
          <PlusIcon className="text-primary opacity-35 size-40" />
        </div>
      </div>
    </div>
  );
};

export default AddNewPlayerSkeleton;
