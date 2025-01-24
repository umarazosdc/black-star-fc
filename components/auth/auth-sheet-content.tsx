import React from 'react';
import { BookmarkIcon, BoxIcon, LogOutIcon, SendIcon } from 'lucide-react';
import SheetHeader from '../utils/sheet-header';
import AuthPagination from './auth-pagination';

const AuthSheetContent = () => {
   const paths = [
      { name: 'Explore players', path: '/explore', icon: BoxIcon },
      { name: 'Bookmarks', path: '/explore/bookmarks', icon: BookmarkIcon },
      { name: 'Requested', path: '/explore/requests', icon: SendIcon },
   ];
   return (
      <div className="flex flex-col h-full">
         <main className="flex flex-col gap-6">
            <SheetHeader />
            <div className="flex flex-col gap-2">
               {paths.map((path, key) => (
                  <AuthPagination
                     key={key}
                     path={path.path}
                     icon={path.icon}
                     name={path.name}
                  />
               ))}
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

export default AuthSheetContent;
