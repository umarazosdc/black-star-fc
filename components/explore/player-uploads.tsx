import React from "react";
import VideoUpload from "./video-upload";

const PlayerUploads = ({ src }: { src: string[] }) => {
  return (
    <div className="flex gap-4 overflow-auto w-full">
      {src.map((vid, key) => (
        <VideoUpload key={key} src={vid} />
      ))}
    </div>
  );
};

export default PlayerUploads;
