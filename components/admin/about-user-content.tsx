import {
   BriefcaseBusinessIcon,
   Clock3Icon,
   DotIcon,
   MailIcon,
   MapPinIcon,
} from 'lucide-react';
import React from 'react';
import Wrapper from '../utils/wrapper';
import Icontext from '../utils/icontext';
import formatDate from '@/lib/date';
import SectionWrapper from '../utils/section-wrapper';
import BookmarkedPlayerCard from '../utils/bookmarked-player-card';
import RequestedPlayerCard from '../utils/requested-player-card';
import { cn } from '@/lib/utils';
import Button from '../utils/button';

const UserAboutContent = ({ className }: { className?: string }) => {
   const date = formatDate('2017-06-01');
   return (
      <div
         className={cn('flex flex-col gap-8 bg-card min-h-full p-4', className)}
      >
         <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-wide">Michael Jordan</h2>
            <div className="flex items-center gap-3 text-sm">
               <div className="flex gap-1.5">
                  <span className="font-bold">6</span>
                  <p className="opacity-70">requests</p>
               </div>
               <DotIcon />
               <div className="flex gap-1.5">
                  <span className="font-bold">6</span>
                  <p className="opacity-70">bookmarks</p>
               </div>
            </div>
            <div className="w-[16rem] break-words text-sm leading-relaxed">
               <p>
                  Scout seeking a prolific striker with sharp instincts and
                  finishing skills. 🎯⚡️
               </p>
            </div>
         </div>
         <Wrapper title="Details" className="space-y-3 text-sm">
            <div className="space-y-3">
               <Icontext icon={BriefcaseBusinessIcon}>
                  Coach at <b>Samba United, Akwanga</b>
               </Icontext>
               <Icontext icon={MapPinIcon}>
                  From Nasarawa Eggon, Nasarawa state
               </Icontext>
               <Icontext icon={Clock3Icon}>
                  Joined <b>{date}</b>
               </Icontext>
               <Icontext icon={MailIcon}>j3s@air.com</Icontext>
            </div>
         </Wrapper>
         <SectionWrapper title="Bookmarks" link="#" label="View all">
            <div className="flex items-center gap-6 overflow-auto pb-3">
               <BookmarkedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem] bg-primary"
                  isAdmin
               />
               <BookmarkedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem] bg-primary"
                  isAdmin
               />
               <BookmarkedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem] bg-primary"
                  isAdmin
               />
            </div>
         </SectionWrapper>
         <SectionWrapper title="Requests" link="#" label="View all">
            <div className="flex items-center gap-6 overflow-auto pb-3">
               <RequestedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem] bg-primary"
               />
               <RequestedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem] bg-primary"
               />
               <RequestedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem] bg-primary"
               />
            </div>
         </SectionWrapper>
         <div className="flex flex-col space-y-4">
            <Button className="py-2" style={{ background: '#201315' }}>
               Suspense
            </Button>
            <Button className="py-2" style={{ background: 'red' }}>
               Delete
            </Button>
         </div>
      </div>
   );
};

export default UserAboutContent;
