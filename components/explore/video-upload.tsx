import React from 'react';

const VideoUpload = ({src}:{src:string}) => {
   return (
      <video src={src} controls width={180} className='rounded-md' />
   );
};

export default VideoUpload;
