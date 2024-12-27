import React from 'react';
import HeroImage from './hero-image';

const Hero = () => {
   return (
      <div className="relative">
         <h1 className="uppercase font-bold text-5xl text-center tracking-wide leading-tight text-secondary">
            discover
            <br />
            tomorrow&apos;s
            <br />
            <br />
            today
         </h1>
         <HeroImage className="absolute -top-4 left-1/2 -translate-x-1/2" />
      </div>
   );
};

export default Hero;
