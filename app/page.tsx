import Button from '@/components/homepage/button';
import Hero from '@/components/homepage/hero';
import Navbar from '@/components/utils/navbar';
import Link from 'next/link';

export default function Home() {
   return (
      <div className="min-h-screen flex flex-col px-4">
         <Navbar />
         <main className="flex-grow flex flex-col items-center gap-8 mt-12">
            <Hero />
            <p className="text-center w-[20rem] text-sm select-none">
               Your ultimate platform for scouting and tracking football talent
               worldwide.
            </p>
            <footer className="flex flex-col items-center gap-6 mt-8">
               <Link href="/explore">
                  <Button className="bg-accent text-primary">
                     Explore players
                  </Button>
               </Link>
               <Link href="/auth/login">
                  <Button className="border border-accent text-accent">
                     Sign in for free
                  </Button>
               </Link>
            </footer>
         </main>
      </div>
   );
}
