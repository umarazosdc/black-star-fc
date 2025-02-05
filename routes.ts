/**
 * authRoutes: Array<string> - This is an array of routes that are used to authenticate users.
 */
export const authRoutes: Array<string> = ['/auth/login', '/auth/register'];

/**
 * publicRoutes: Array<string> - This is an array of routes that are public.
 */
export const publicRoutes: Array<string> = ['/'];

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
