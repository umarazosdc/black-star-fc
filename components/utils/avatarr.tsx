import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Avatarr = ({
   selectedImage,
   className,
}: {
   selectedImage: string | undefined;
   className?: string | undefined;
}) => {
   return (
      <Avatar className={cn('size-10', className)}>
         <AvatarImage
            src={selectedImage}
            alt="Profile picture"
            className="rounded-full"
         />
         <AvatarFallback className="bg-primary-foreground overflow-hidden relative">
            <UserIcon
               fill="gray"
               className="size-full absolute -bottom-[20%]"
               stroke="gray"
            />
         </AvatarFallback>
      </Avatar>
   );
};

export default Avatarr;
