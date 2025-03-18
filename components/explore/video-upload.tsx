"use client";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import React from "react";

const VideoUpload = ({ src }: { src: string }) => {
  return (
    <CldVideoPlayer
      src={
        src?.trim()
          ? src.replace(/^https?:\/\/[^/]+\/video\/upload\//, "")
          : "samples/sea-turtle"
      }
      aspectRatio="9:16"
      className="rounded-md"
      transformation={[
        { gravity: "auto" }, // Separate transformation for g_auto
        {
          aspect_ratio: "9:16",
          crop: "fill",
          fetch_format: "auto",
          quality: "auto",
        },
      ]}
      logo={false}
    />
  );
};

export default VideoUpload;
