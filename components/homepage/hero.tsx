import React from 'react';
import HeroImage from './hero-image';
import { Bebas_Neue } from 'next/font/google';

const bebas_neue = Bebas_Neue({ weight: ['400'], subsets: ['latin'] });

const Hero = () => {
   return (
      <div className="relative w-full flex justify-center z-0">
         <h1
            className={`uppercase font-bold text-[5rem] text-center tracking-wide leading-[1.05] text-secondary select-none ${bebas_neue.className}`}
         >
            discover
            <br />
            tomorrow&apos;s
            <br />
            <br />
            today
         </h1>
         <HeroImage className="absolute -top-4 select-none" />
      </div>
   );
};

export default Hero;
