import React from 'react';
import VideoUpload from './video-upload';

const PlayerUploads = () => {
   return (
      <div className="flex gap-6 overflow-auto w-full">
         <VideoUpload src="/uploads/player/download.mp4" />
         <VideoUpload src="/uploads/player/download2.mp4" />
         <VideoUpload src="/uploads/player/download3.mp4" />
      </div>
   );
};

export default PlayerUploads;
