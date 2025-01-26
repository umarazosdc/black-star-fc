import React from 'react';
import SearchBar from './search-bar';
import { BellIcon } from 'lucide-react';
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover';
import { getHoursMinute } from '@/lib/date';
import NotificationContent from './notification-content';

const SearchNotificationBar = ({ placeholder }: { placeholder: string }) => {
   const dateString = new Date();
   const time = getHoursMinute(dateString.toString());
   return (
      <div className="flex items-center gap-4">
         <SearchBar placeholder={placeholder} />

         <Popover>
            <PopoverTrigger asChild>
               <button className="relative size-10 rounded-full p-2 bg-card flex items-center justify-center">
                  <BellIcon className="text-accent" />
                  {/* ONLY render this span if there's any notification */}
                  <span
                     className="absolute top-0 right-0.5 size-2.5 rounded-full"
                     style={{ background: 'red' }}
                  ></span>
               </button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2 max-h-80 overflow-auto">
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
            </PopoverContent>
         </Popover>
      </div>
   );
};

export default SearchNotificationBar;
