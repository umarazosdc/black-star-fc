import Button from '@/components/homepage/button';
import Hero from '@/components/homepage/hero';
import Navbar from '@/components/utils/navbar';

export default function Home() {
   return (
      <div className="min-h-screen flex flex-col px-4">
         <header>
            <Navbar />
         </header>
         <main className="flex-grow flex flex-col items-center gap-8 mt-12">
            <Hero />
            <p className="text-center w-[20rem] text-sm">
               Your ultimate platform for scouting and tracking football talent
               worldwide.
            </p>
            <footer className="flex flex-col items-center gap-6 mt-8">
               <Button className="bg-accent text-primary">
                  Explore players
               </Button>
               <Button className="border border-accent text-accent">
                  Sign in for free
               </Button>
            </footer>
         </main>
      </div>
   );
}
