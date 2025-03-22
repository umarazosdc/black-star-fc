/**
 * authRoutes: Array<string> - This is an array of routes that are used to authenticate users.
 */
export const authRoutes: Array<string> = ['/login', '/register', '/reset'];

/**
 * publicRoutes: Array<string> - This is an array of routes that are public.
 */
export const publicRoutes: Array<string> = ['/'];

/**
 * privateRoutes: Array<string> - This is an array of routes that are private.
 */
export const privateRoutes: Array<string> = [
   '/scout/dashboard',
   '/ad/dashboard',
   '/explore',
   '/onboarding',
   '/profile',
];

/**
 * adminRoute: string - This route is mainly for CRUD.
 */
export const adminRoute: string = '/admin';
