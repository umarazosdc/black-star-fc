'use client'
import React from 'react';
import { CldImage } from 'next-cloudinary';
import { cn } from '@/lib/utils';

const CldImg = ({
   src,
   alt,
   className,
}: {
   src: string;
   alt: string;
   className?: string;
}) => {
   return (
      <CldImage
         src={src ? src : 'uploads/images/defaultjpg'}
         alt={alt}
         height={400}
         width={400}
         loading="lazy"
         crop="thumb"
         gravity="face"
         className={cn(className)}
      />
   );
};

export default CldImg;
