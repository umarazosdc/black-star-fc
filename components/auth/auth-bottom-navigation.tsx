'use client';
import React from 'react';
import { BellIcon, LayoutDashboardIcon, SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/components/ui/sheet';
import Avatarr from '@/components/utils/avatarr';
import NavIcons from '@/components/utils/nav-icons';
import AuthSheetContent from './auth-sheet-content';

const AuthBottomNavigationBar = () => {
   const pathname = usePathname();
   const navItems = [
      { name: 'Home', path: '/scout/dashboard', icon: LayoutDashboardIcon },
      { name: 'Search', path: '/scout/dashboard/search', icon: SearchIcon },
      {
         name: 'Notification',
         path: '/scout/dashboard/notification',
         icon: BellIcon,
      },
   ];
   return (
      <nav className="flex justify-between items-center py-1 px-3 bg-primary sticky bottom-0 z-50 border-t w-full">
         {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
               <NavIcons
                  icon={item.icon}
                  name={item.name}
                  className={cn(
                     pathname === item.path
                        ? 'text-accent opacity-100'
                        : 'text-secondary opacity-70'
                  )}
               />
            </Link>
         ))}

         <Sheet>
            <SheetTrigger>
               <Avatarr selectedImage={'/imgs/users/scout/dc.jpg'} />
            </SheetTrigger>
            <SheetContent>
               <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                  <AuthSheetContent />
               </SheetHeader>
            </SheetContent>
         </Sheet>
      </nav>
   );
};

export default AuthBottomNavigationBar;
