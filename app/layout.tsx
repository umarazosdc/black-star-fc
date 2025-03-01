import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/app/globals.css';
import { AuthProvider } from '@/components/ui/auth-provider';
import { Toaster } from '@/components/ui/sonner';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
   title: 'Black Stars FC',
   description: 'Generated by create next app',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${poppins.className} text-secondary antialiased h-full`}
         >
            <AuthProvider>{children}</AuthProvider>
            <Toaster />
         </body>
      </html>
   );
}
