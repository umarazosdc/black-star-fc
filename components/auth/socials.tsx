import { FacebookIcon, GithubIcon, TwitterIcon } from 'lucide-react';
import React from 'react';
import Social from '../utils/social';

const Socials = () => {
   const socials = [
      { icon: GithubIcon },
      { icon: FacebookIcon },
      { icon: TwitterIcon },
   ];
   return (
      <div className="flex justify-center items-center gap-4 w-full text-accent">
         {socials.map((value, key) => (
            <Social key={key}>{<value.icon />}</Social>
         ))}
      </div>
   );
};

export default Socials;
