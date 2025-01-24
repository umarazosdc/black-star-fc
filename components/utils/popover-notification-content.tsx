import React from 'react';

const PopoverNotificationContent = ({
   title,
   time,
}: {
   title: string;
   time: string;
}) => {
   return (
      <div className="flex flex-col gap-2 p-2 rounded-md shadow-md border-r border-t">
         <h1 className="text-sm font-bold">{title}</h1>
         <p className="self-end text-xs">{time}</p>
      </div>
   );
};

export default PopoverNotificationContent;
