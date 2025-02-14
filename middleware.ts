import { adminRoute, authRoutes, privateRoutes } from '@/routes';

import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { getToken } from 'next-auth/jwt';

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
   const isLoggedIn = !!req.auth;
   const { pathname } = req.nextUrl;
   const url = 'http://localhost:3000';

   const token = await getToken({ req, secret: process.env.AUTH_SECRET });

   const role = token?.role;
   const isAdmin = role === 'admin';

   const isPrivateRoute = privateRoutes.includes(pathname);
   const isAuthRoute = authRoutes.includes(pathname);
   const isApiRoutes = pathname.includes('/api');
   const isAdminRoute = pathname.startsWith(adminRoute);
   const isUnthorizedRoute = pathname.startsWith('/unauthorized');

   if (isApiRoutes) {
      return;
   }

   if (isLoggedIn && isAdminRoute && !isAdmin)
      return Response.redirect(`${url}/unauthorized`);

   if (isLoggedIn && isAdmin && isUnthorizedRoute)
      return Response.redirect(`${url}/${role}/dashboard`);

   if (isLoggedIn && isAuthRoute && isAdmin) {
      return Response.redirect(`${url}/${role}/dashboard`);
   }

   if (isLoggedIn && isAuthRoute && !isAdmin)
      return Response.redirect(`${url}/${role}/dashboard`);

   if (!isLoggedIn && isAuthRoute) return;

   if (!isLoggedIn && isPrivateRoute)
      return Response.redirect(`${url}/auth/login`);
});

export const config = {
   matcher: [
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      '/(api|trpc)(.*)',
   ],
};
