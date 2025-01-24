import React from 'react';
import SearchBar from './search-bar';
import { BellIcon } from 'lucide-react';
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover';
import { getHoursMinute } from '@/lib/date';
import PopoverNotificationContent from './popover-notification-content';

const SearchNotificationBar = ({ placeholder }: { placeholder: string }) => {
   const dateString = new Date();
   const time = getHoursMinute(dateString.toString());
   console.log(time);
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
            <PopoverContent className='flex flex-col gap-2 max-h-80 overflow-auto'>
               <PopoverNotificationContent
                  time={time}
                  title="Black stars' match"
               />
               <PopoverNotificationContent
                  time={time}
                  title="Black stars' match"
               />
               <PopoverNotificationContent
                  time={time}
                  title="Black stars' match"
               />
               <PopoverNotificationContent
                  time={time}
                  title="Black stars' match"
               />
               <PopoverNotificationContent
                  time={time}
                  title="Black stars' match"
               />
               <PopoverNotificationContent
                  time={time}
                  title="Black stars' match"
               />
            </PopoverContent>
         </Popover>
      </div>
   );
};

export default SearchNotificationBar;
