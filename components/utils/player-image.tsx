import React from 'react';
import Img from '@/components/utils/image';
import { League_Spartan } from 'next/font/google';

const bowlby = League_Spartan({ subsets: ['latin'], weight: ['900'] });

const PlayerImage = ({
   src,
   position,
   ...props
}: {
   src: string;
   position: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
   return (
      <div className="relative aspect-square" {...props}>
         <Img src={src} alt="Player" className="rounded-md" />
         <span
            className={`w-16 text-[0.7rem] flex items-center justify-center bg-card absolute bottom-4 right-0 text-accent uppercase font-extrabold leading-none pb-1 pt-1.5 z-30 rounded-l-sm ${bowlby.className}`}
         >
            {position}
         </span>
         <div className="absolute inset-0 bg-black/10 rounded-md z-20"></div>
      </div>
   );
};

export default PlayerImage;
