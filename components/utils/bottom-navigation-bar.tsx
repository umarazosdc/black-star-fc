'use client';
import React from 'react';
import NavIcons from './nav-icons';
import { BellIcon, LayoutDashboardIcon, SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Img from './image';
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '../ui/sheet';

const BottomNavigationBar = () => {
   const pathname = usePathname();
   const navItems = [
      { name: 'Home', path: '/auth/dashboard', icon: LayoutDashboardIcon },
      { name: 'Search', path: '/auth/dashboard/search', icon: SearchIcon },
      {
         name: 'Notification',
         path: '/auth/dashboard/notification',
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
               <div className="relative size-[2.5rem] select-none">
                  <Img
                     src="/imgs/users/scout/dc.jpg"
                     alt="Profile"
                     className="rounded-full border"
                  />
               </div>
            </SheetTrigger>
            <SheetContent>
               <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
               </SheetHeader>
            </SheetContent>
         </Sheet>
      </nav>
   );
};

export default BottomNavigationBar;
