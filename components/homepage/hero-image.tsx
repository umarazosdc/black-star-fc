import React from 'react';
import Img from '../utils/image';
import { cn } from '@/lib/utils';

const HeroImage = ({ className }: { className: string | undefined }) => {
   return (
      <div className={cn('h-[12rem] w-[10.5rem] relative', className)}>
         <Img src="/imgs/hero/hero.jpg" alt="Hero image" />
         <h1
            className="absolute bottom-1 left-1/2 -translate-x-1/2 uppercase font-bold text-5xl z-50 italic"
            style={{ textShadow: '2px 3px black', color: 'gold' }}
         >
            star
         </h1>
         <div className="h-[12rem] w-[10.5rem] bg-gradient-to-b from-blue-500/0 to-primary to-95% from-60% absolute"></div>
      </div>
   );
};

export default HeroImage;
