'use client';
import { cn } from '@/lib/utils';
import { CldImage } from 'next-cloudinary';
import React from 'react';

const CldImg = ({
   src,
   alt,
   className,
}: {
   src: string;
   alt: string;
   className?: string | undefined;
}) => {
   return <CldImage src={src} alt={alt} className={cn(className)} />;
};

export default CldImg;
