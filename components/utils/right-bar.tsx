import Image from 'next/image';
import React from 'react';

const RightBar = () => {
   return (
      <Image
         src="/icons/right-bar.svg"
         alt="Menu bar"
         height={35}
         width={35}
         className="size-9"
      />
   );
};

export default RightBar;
