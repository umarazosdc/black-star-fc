import { authRoutes, privateRoutes } from '@/routes';
import NextAuth from 'next-auth';
import authConfig from './auth.config';

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
   console.log('ROUTE: ', req.nextUrl.pathname);
   const isLoggedIn = !!req.auth;
   const { pathname } = req.nextUrl;
   const url = 'http://localhost:3000';

   const isPrivateRoute = privateRoutes.includes(pathname);
   const isAuthRoute = authRoutes.includes(pathname);
   const isApiRoutes = pathname.includes('/api');

   if (isApiRoutes) return;

   if (isLoggedIn && isAuthRoute)
      return Response.redirect(`${url}/scout/dashboard`);

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
