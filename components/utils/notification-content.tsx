import { cn } from '@/lib/utils';
import React from 'react';

const NotificationContent = ({
   title,
   content,
   time,
   className,
   isRead
}: {
   title: string;
   content: string;
   time: string;
   className?:string | undefined
   isRead?:boolean;
}) => {
   return (
      <div className={cn("flex flex-col gap-2 p-2 rounded-md shadow-md border-r border-t relative", isRead ? "bg-card" : "bg-card/25", className)}>
         <h1 className="text-sm font-bold truncate">{title}</h1>
         <p className={cn("text-xs w-[85%]", isRead ? 'line-clamp-3': "truncate")}>{content}</p>
         <p className="self-end text-xs">{time}</p>
         {isRead && <div className='size-2.5 rounded-full bg-accent absolute top-1/2 -translate-y-1/2 right-2'/>}
      </div>
   );
};

export default NotificationContent;
