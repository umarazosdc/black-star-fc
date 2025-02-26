import { adminRoute, authRoutes, privateRoutes, publicRoutes } from '@/routes';

import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
   const isLoggedIn = !!req.auth;
   const { pathname } = req.nextUrl;
   const baseURL = 'http://localhost:3000';
   const res = NextResponse.next();
   const token = await getToken({ req, secret: process.env.AUTH_SECRET });
   const role = token?.role;
   const isAdmin = role === 'admin';

   const isPrivateRoute = privateRoutes.includes(pathname);
   const isPublicRoute = publicRoutes.includes(pathname);
   const isAuthRoute = authRoutes.includes(pathname);
   const isApiRoute = pathname.startsWith('/api');
   const isAdminRoute =
      pathname.startsWith(adminRoute + '/') || pathname === adminRoute;

   // API route
   if (isApiRoute) {
      return res;
   }

   // Authentication route
   if (isAuthRoute) {
      if (isLoggedIn) {
         return NextResponse.redirect(new URL(`/${role}/dashboard`, baseURL));
      }
      return res;
   }

   // Private route
   if (isPrivateRoute && !isLoggedIn) {
      return NextResponse.redirect(new URL('/login', baseURL));
   }

   // Public route
   if (isPublicRoute) {
      return res;
   }

   // Admin route
   if (isAdminRoute) {
      if (!isAdmin || !isLoggedIn) {
         return NextResponse.redirect(new URL('/unauthorized', baseURL));
      }
      return res;
   }

   // Allow other access
   return res;
});

export const config = {
   matcher: [
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      '/(api|trpc)(.*)',
   ],
};
