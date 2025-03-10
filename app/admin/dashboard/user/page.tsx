import {
   BriefcaseBusinessIcon,
   Clock3Icon,
   DotIcon,
   MailIcon,
   MapPinIcon,
} from 'lucide-react';
import React from 'react';
import Wrapper from '@/components/utils/wrapper';
import Icontext from '@/components/utils/icontext';
import SectionWrapper from '@/components/utils/section-wrapper';
import BookmarkedPlayerCard from '@/components/utils/bookmarked-player-card';
import RequestedPlayerCard from '@/components/utils/requested-player-card';
import Button from '@/components/utils/button';
import CldImg from '@/components/utils/cldimg';
import { getUserById } from '@/lib/database/queries';

interface UserProps {
   searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const UserAboutPage = async ({ searchParams }: UserProps) => {
   const params = await searchParams;
   const id = params.id || undefined
   const user = await getUserById(id as string);

   return (
      <div className="flex flex-col gap-6 min-h-full">
         <div className="h-[85px] absolute inset-0 bg-card border-b z-0" />
         <div className="mt-[20px]">
            <CldImg
               src={user?.image as string}
               alt="Scout image"
               className="size-20 rounded-full p-1 border-2"
            />
         </div>

         <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-wide">{user?.name}</h2>
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
            <div className="flex items-center gap-6 overflow-auto pb-1">
               <BookmarkedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem]"
                  isAdmin
               />
               <BookmarkedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem]"
                  isAdmin
               />
               <BookmarkedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem]"
                  isAdmin
               />
            </div>
         </SectionWrapper>
         <SectionWrapper title="Requests" link="#" label="View all">
            <div className="flex items-center gap-6 overflow-auto pb-1">
               <RequestedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem]"
               />
               <RequestedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem]"
               />
               <RequestedPlayerCard
                  src="/imgs/players/mal.jpg"
                  position="Winger"
                  name="Lamine Yamal"
                  age={17}
                  className="w-[10.5rem]"
               />
            </div>
         </SectionWrapper>
         <div className="flex flex-col space-y-3">
            <Button className="h-10" style={{ background: '#201315' }}>
               Suspense
            </Button>
            <Button className="h-10" style={{ background: 'red' }}>
               Delete
            </Button>
         </div>
      </div>
   );
};

export default UserAboutPage;
