'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Stat from './stat';
import {
   ActivityIcon,
   ArrowLeftRightIcon,
   FastForwardIcon,
   HeartHandshakeIcon,
   ShieldHalfIcon,
   ZapIcon,
} from 'lucide-react';
import { CldImage } from 'next-cloudinary';

const ImageAndStats = ({
   src,
   className,
   dri,
   sho,
   pas,
   def,
   pac,
   spd,
}: {
   src: string;
   dri: number;
   sho: number;
   def: number;
   pac: number;
   spd: number;
   pas: number;
} & React.HTMLAttributes<HTMLDivElement>) => {
   return (
      <div className={cn('relative size-[283px] mt-16', className)}>
         <div className="relative">
            <CldImage
               src={src}
               alt="Player"
               className="z-40 size-[283px]"
               width={200}
               height={100}
               removeBackground
            />
            <div className="absolute top-3 left-1/2 -translate-x-1/2 size-36 bg-black/25 blur-xl rounded-full z-0" />
            <div className="absolute h-[284px] w-[283px] bg-gradient-to-b from-blue-500/0 to-primary to-95% from-60% z-40 top-0" />
         </div>

         <Stat
            color="#A52A2A"
            icon={HeartHandshakeIcon}
            rate={dri}
            name="dri"
            className="absolute -right-[2rem] top-[38.99%]"
         />
         <Stat
            color="#B8B800"
            icon={FastForwardIcon}
            rate={pac}
            name="pac"
            className="absolute -right-0 top-[5%]"
         />
         <Stat
            color="#FF0000"
            icon={ZapIcon}
            rate={sho}
            name="sho"
            className="absolute right-[4.5rem] -top-[3.8rem]"
         />
         <Stat
            color="#FFA500"
            icon={ActivityIcon}
            rate={spd}
            name="spd"
            className="absolute left-[4.5rem] -top-[3.8rem]"
         />
         <Stat
            color="#008000"
            icon={ArrowLeftRightIcon}
            rate={pas}
            name="pas"
            className="absolute -left-0 top-[5%]"
         />
         <Stat
            color="gray"
            icon={ShieldHalfIcon}
            rate={def}
            name="def"
            className="absolute -left-[2rem] top-[38.99%]"
         />
      </div>
   );
};

export default ImageAndStats;
