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
} from '@/components/ui/sheet';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import AdminSheetContent from '@/components/utils/admin-sheet-content';

const BottomNavigationBar = () => {
   const pathname = usePathname();
   const navItems = [
      { name: 'Home', path: '/admin/dashboard', icon: LayoutDashboardIcon },
      { name: 'Search', path: '/admin/dashboard/search', icon: SearchIcon },
      { name: 'new', path: '/admin/dashboard/new', icon: PlusIcon },
      {
         name: 'Notification',
         path: '/auth/dashboard/notification',
         icon: BellIcon,
      },
   ];
   return (
      <nav className="flex justify-between items-center py-1 px-3 bg-primary sticky bottom-0 z-50 border-t w-full">
         {navItems.map((item) =>
            item.name === 'new' ? (
               pathname !== '/admin/dashboard/new' && (
                  <Link
                     href={item.path}
                     key={item.name}
                     className="bg-accent p-2.5 rounded-full shadow-md text-primary"
                  >
                     <PlusIcon strokeWidth={3} />
                  </Link>
               )
            ) : (
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
            )
         )}

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
