import Button from '@/components/homepage/button';
import Hero from '@/components/homepage/hero';
import Sidebar from '@/components/utils/sidebar';
import Link from 'next/link';

export default function Home() {
   return (
      <div className="min-h-screen flex flex-col">
         <Sidebar />
         <main className="flex-grow flex flex-col items-center gap-8 mt-12 px-4">
            <Hero />
            <p className="text-center w-[20rem] text-sm select-none">
               Your ultimate platform for scouting and tracking football talent
               worldwide.
            </p>
            <footer className="mt-8">
               <Link href="/explore">
                  <Button className="bg-accent text-primary">
                     Explore players
                  </Button>
               </Link>
            </footer>
         </main>
      </div>
   );
}
