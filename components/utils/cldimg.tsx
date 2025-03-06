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
         src={src}
         alt={alt}
         height={400}
         width={400}
         className={cn(className)}
      />
   );
};

export default CldImg;
