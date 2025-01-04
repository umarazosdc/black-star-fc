import React from 'react';
import Img from '../utils/image';
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

const ImageAndStats = ({
   src,
   className,
   phy,
   sho,
   pas,
   def,
   pac,
   spd,
}: {
   src: string;
   phy: number;
   sho: number;
   def: number;
   pac: number;
   spd: number;
   pas: number;
} & React.HTMLAttributes<HTMLDivElement>) => {
   return (
      <div className={cn('relative size-[283px] mt-16', className)}>
         <Img src={src} alt="Player" className="z-10" />
         <div className="absolute top-3 left-1/2 -translate-x-1/2 size-36 bg-black/25 blur-xl rounded-full z-0"></div>
         <Stat
            color="#A52A2A"
            icon={HeartHandshakeIcon}
            rate={phy}
            name="phy"
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
         <div className="h-[284px] w-[283px] bg-gradient-to-b from-blue-500/0 to-primary to-95% from-60% absolute z-40"></div>
      </div>
   );
};

export default ImageAndStats;
