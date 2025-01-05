import Image from 'next/image';
import React from 'react';

const LeftBar = () => {
   return (
      <Image
         src="/icons/left-bar.svg"
         alt="Menu bar"
         height={35}
         width={35}
         className="size-9 select-none"
      />
   );
};

export default LeftBar;
