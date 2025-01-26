import NotificationContent from '@/components/utils/notification-content';
import { getHoursMinute } from '@/lib/date';
import React from 'react';

const NotificationPage = () => {
   const dateString = new Date();
   const time = getHoursMinute(dateString.toString());
   return (
      <div className="flex flex-col gap-2">
         <NotificationContent
            time={time}
            title="Black stars' match"
            content={`I am a software engineer and web developer with a vision to build an organization dedicated to teaching programming and software development skills. My goal is to empower individuals, especially in underserved communities, with the knowledge and tools they need to thrive in the digital economy`}
         />
         <NotificationContent
            time={time}
            title="Black stars' match"
            content={`I am a software engineer and web developer with a vision to build an organization dedicated to teaching programming and software development skills. My goal is to empower individuals, especially in underserved communities, with the knowledge and tools they need to thrive in the digital economy`}
         />
         <NotificationContent
            time={time}
            title="Black stars' match"
            content={`I am a software engineer and web developer with a vision to build an organization dedicated to teaching programming and software development skills. My goal is to empower individuals, especially in underserved communities, with the knowledge and tools they need to thrive in the digital economy`}
         />
         <NotificationContent
            time={time}
            title="Black stars' match"
            content={`I am a software engineer and web developer with a vision to build an organization dedicated to teaching programming and software development skills. My goal is to empower individuals, especially in underserved communities, with the knowledge and tools they need to thrive in the digital economy`}
         />
         <NotificationContent
            time={time}
            title="Black stars' match"
            content={`I am a software engineer and web developer with a vision to build an organization dedicated to teaching programming and software development skills. My goal is to empower individuals, especially in underserved communities, with the knowledge and tools they need to thrive in the digital economy`}
         />
      </div>
   );
};

export default NotificationPage;
