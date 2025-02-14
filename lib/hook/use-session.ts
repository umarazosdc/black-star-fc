import { useSession } from 'next-auth/react';

export default function useSessionHook() {
   const session = useSession();
   return session.data?.user;
}
