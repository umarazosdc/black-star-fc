import { cn } from '@/lib/utils';
import Image from 'next/image';

const Img = ({
   src,
   alt,
   className,
}: React.HTMLAttributes<HTMLImageElement> & { src: string; alt: string }) => {
   return (
      <Image
         src={src}
         alt={alt}
         fill
         className={cn('w-full h-full object-cover', className)}
      />
   );
};

export default Img;
