import React from 'react';
import CldImg from '@/components/utils/cldimg';
import { EllipsisIcon } from 'lucide-react';

const ImageDisplayCard = ({ src, alt }: { src: string; alt: string }) => {
   return (
      <div className="w-full flex flex-col gap-1">
         <CldImg
            src={src}
            alt={alt}
            className="rounded-md shadow-md"
         />
         <EllipsisIcon className="text-primary self-end" strokeWidth={3} />
      </div>
   );
};

export default ImageDisplayCard;
