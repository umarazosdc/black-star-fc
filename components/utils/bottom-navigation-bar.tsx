'use client';
import React from 'react';
import NavIcons from './nav-icons';
import {
   BellIcon,
   LayoutDashboardIcon,
   SearchIcon,
   UserRoundIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNavigationBar = () => {
   const pathname = usePathname()
   const navItems = [
      { name: 'Home', path: '/auth/dashboard', icon: LayoutDashboardIcon },
      { name: 'Search', path: '/auth/dashboard/search', icon: SearchIcon },
      {
         name: 'Notification',
         path: '/auth/dashboard/notification',
         icon: BellIcon,
      },
      { name: 'Profile', path: '/auth/dashboard/profile', icon: UserRoundIcon },
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
      </nav>
   );
};

export default BottomNavigationBar;
