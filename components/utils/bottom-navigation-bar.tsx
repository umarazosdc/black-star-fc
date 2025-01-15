'use client';
import React from 'react';
import NavIcons from './nav-icons';
import {
   BellIcon,
   LayoutDashboardIcon,
   PlusIcon,
   SearchIcon,
} from 'lucide-react';
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
} from '../ui/sheet';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import AdminSheetContent from './admin-sheet-content';
// import {} from "@/components/ui"

const BottomNavigationBar = () => {
   const pathname = usePathname();
   const navItems = [
      { name: 'Home', path: '/auth/dashboard', icon: LayoutDashboardIcon },
      { name: 'Search', path: '/auth/dashboard/search', icon: SearchIcon },
      { name: 'new', path: '/admin/dashboard/new', icon: PlusIcon },
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
               <Avatar>
                  <AvatarImage src="/imgs/users/scout/dc.jpg" />
                  <AvatarFallback>IU</AvatarFallback>
               </Avatar>
            </SheetTrigger>
            <SheetContent>
               <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                  <AdminSheetContent />
               </SheetHeader>
            </SheetContent>
         </Sheet>
      </nav>
   );
};

export default BottomNavigationBar;
