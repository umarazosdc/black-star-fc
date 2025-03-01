import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { UserIcon } from 'lucide-react';

const FormImage = ({
   name,
   selectedImage,
}: {
   name: string;
   selectedImage: string | undefined;
}) => {
   return (
      <div className="flex flex-col gap-3 w-full">
         <span className="text-sm">{name}</span>
         <Avatar className="h-40 rounded-md border w-full bg-primary-foreground">
            <AvatarImage src={selectedImage} alt="Player image" />
            <AvatarFallback className="bg-primary-foreground relative">
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
