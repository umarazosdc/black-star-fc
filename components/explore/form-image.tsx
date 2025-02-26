import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const FormImage = ({
   name,
   selectedImage,
   isLoading,
}: {
   name: string;
   selectedImage: string | undefined;
   isLoading: boolean;
}) => {
   return (
      <div className="flex flex-col gap-3 w-full">
         <span className="text-sm">{name}</span>
         <Avatar className="h-40 rounded-md border w-full bg-primary-foreground">
            <AvatarImage
               src={isLoading ? undefined : selectedImage}
               alt="Player image"
            />
            <AvatarFallback
               className={cn(
                  'bg-primary-foreground relative',
                  isLoading && 'animate-pulse'
               )}
            >
               <UserIcon
                  fill="gray"
                  className="size-full absolute -bottom-[25%]"
                  stroke="gray"
               />
            </AvatarFallback>
         </Avatar>
      </div>
   );
};

export default FormImage;
