import React from 'react';
import Img from '../utils/image';
import { cn } from '@/lib/utils';
import { The_Nautigal } from 'next/font/google';

const nautigal = The_Nautigal({ weight: '700', subsets: ['latin'] });

const HeroImage = ({ className }: { className: string | undefined }) => {
   return (
      <div className={cn('h-[16rem] w-[12rem] relative', className)}>
         <Img src="/imgs/hero/hero.jpg" alt="Hero image" />
         <h1
            className={`absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8rem] z-50 italic ${nautigal.className} bg-gradient-to-b from-yellow-300 from-50% to-yellow-900 bg-clip-text text-transparent tracking-wide leading-none`}
            style={{ textShadow: '2px 3px 6px black', color: 'gold' }}
         >
            star
         </h1>
         <div className="h-[16rem] w-[12rem] bg-gradient-to-b from-blue-500/0 to-primary to-95% from-60% absolute"></div>
      </div>
   );
};

export default HeroImage;
