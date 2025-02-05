'use server';

import { signIn } from '@/auth';

export const providerSignIn = async (provider: string) => {
   await signIn(provider, { redirectTo: '/auth/dashboard' });
};
