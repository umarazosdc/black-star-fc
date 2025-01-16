import React from 'react';
import SheetHeader from './sheet-header';
import SheetAccordion from './sheet-accordion';
import { LayersIcon, LogOutIcon, Users2Icon } from 'lucide-react';

const AdminSheetContent = () => {
   return (
      <div className="flex flex-col h-full">
         <main className="flex flex-col gap-8">
            <SheetHeader />
            <div className="flex flex-col gap-6">
               <SheetAccordion
                  icon={LayersIcon}
                  field="Players"
                  items={[
                     { path: '/explore', name: 'View all' },
                     { path: '/explore/requests', name: 'Requested' },
                     { path: '/explore/bookmarks', name: 'Bookmarked' },
                  ]}
               />
               <SheetAccordion
                  icon={Users2Icon}
                  field="Users"
                  items={[
                     { path: '/explore', name: 'Suspended' },
                     { path: '/explore/requests', name: 'Made Requests' },
                     { path: '/explore/bookmarks', name: 'Bookmarked players' },
                  ]}
               />
               {/* <SheetAccordion
                  icon={Settings}
                  field="Account settings"
                  items={[
                     { path: '/explore', name: 'View Profile' },
                     { path: '/explore/requests', name: 'Requested' },
                     { path: '/explore/bookmarks', name: 'Bookmarked' },
                  ]}
               /> */}
            </div>
         </main>
         <footer className="absolute bottom-8">
            <button className="flex gap-2 items-center text-sm">
               <LogOutIcon />
               <span>Logout</span>
            </button>
         </footer>
      </div>
   );
};

export default AdminSheetContent;
