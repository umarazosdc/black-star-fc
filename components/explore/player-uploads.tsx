import React from "react";
import VideoUpload from "./video-upload";
import { cn } from "@/lib/utils";

const PlayerUploads = ({ src }: { src: string[] }) => {
  return (
    <div className="flex gap-4 overflow-x-auto w-full flex-nowrap">
      {src.map((vid, key) => (
        <div
          key={key}
          className={cn(
            "flex-shrink-0 w-[80%] md:w-[60%]",
            src.length < 2 && "w-full"
          )}
        >
          <VideoUpload src={vid} />
        </div>
      ))}
    </div>
  );
};

export default PlayerUploads;
