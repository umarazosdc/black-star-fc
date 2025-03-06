'use client';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import React from 'react';

const VideoUpload = ({ src }: { src: string }) => {
   return (
      <CldVideoPlayer
         src={src?.trim() ? src : 'samples/sea-turtle'}
         aspectRatio="9:16"
         className="rounded-md"
         transformation={{
            aspect_ratio: '9:16',
            crop: 'fill',
            gravity: 'auto',
         }}
         logo={false}
      />
   );
};

export default VideoUpload;
