'use client';
import React from 'react';
import Img from '../utils/image';
import { cn } from '@/lib/utils';
import { The_Nautigal } from 'next/font/google';
import { motion } from 'framer-motion';

const nautigal = The_Nautigal({ weight: ['700'], subsets: ['latin'] });

const HeroImage = ({ className }: { className: string | undefined }) => {
   return (
      <div
         className={cn(
            'h-[16rem] w-[12rem] relative overflow-hidden',
            className
         )}
      >
         <motion.div
            className="relative h-[16rem] w-[12rem]"
            initial={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.9 }}
         >
            <Img src="/imgs/hero/hero.jpg" alt="Hero image" />
         </motion.div>
         <h1
            className={`absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8rem] z-50 italic ${nautigal.className} bg-gradient-to-b from-amber-300 from-40% to-yellow-900 bg-clip-text text-transparent tracking-wide leading-none`}
            style={{ textShadow: '2px 3px 6px black', color: 'gold' }}
         >
            star
         </h1>
         <div className="h-[16rem] w-[12rem] bg-gradient-to-b from-blue-500/0 to-primary to-95% from-60% absolute -bottom-1"></div>
      </div>
   );
};

export default HeroImage;
