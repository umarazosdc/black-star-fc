/**
 * authRoutes: Array<string> - This is an array of routes that are used to authenticate users.
 */
export const authRoutes: Array<string> = ['/auth/login', '/auth/register'];

/**
 * publicRoutes: string - This public a public route.
 */
export const publicRoutes: string = '/';

/**
 * privateRoutes: Array<string> - This is an array of routes that are private.
 */
export const privateRoutes: Array<string> = [
   '/scout/dashboard',
   '/admin/dashboard',
   '/explore',
   '/onboarding',
   '/profile',
];

/**
 * adminRoute: string - This route is mainly for CRUD.
 */
export const adminRoute: string = '/admin';
