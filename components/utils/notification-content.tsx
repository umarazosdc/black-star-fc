import React from 'react';

const NotificationContent = ({
   title,
   content,
   time,
}: {
   title: string;
   content: string;
   time: string;
}) => {
   return (
      <div className="flex flex-col gap-2 p-2 rounded-md shadow-md border-r border-t bg-card">
         <h1 className="text-sm font-bold truncate">{title}</h1>
         <p className="text-xs w-3/4 truncate">{content}</p>
         <p className="self-end text-xs">{time}</p>
      </div>
   );
};

export default NotificationContent;
