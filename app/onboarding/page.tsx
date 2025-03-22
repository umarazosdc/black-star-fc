'use client';
import { Button } from '@/components/ui/button';
import Avatarr from '@/components/utils/avatarr';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const OnboardingPage = () => {
   const addPictureRef = React.useRef<HTMLInputElement>(null);
   const changePictureRef = React.useRef<HTMLInputElement>(null);
   const [selectedImage, setSelectedImage] = React.useState('');

   const handleAddPicture = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof window !== 'undefined' && event.target.files?.[0]) {
         const imageURL = URL.createObjectURL(event.target.files?.[0]);
         setSelectedImage(imageURL);
      }
   };
   return (
      <div className="min-h-full flex flex-col gap-6 p-4">
         <nav
            className={cn(
               'flex items-center justify-between',
               selectedImage && 'justify-center'
            )}
         >
            <div></div>
            <p className="text-sm font-bold">Profile picture </p>
            {!selectedImage ? (
               <Link href="#" className="text-sm text-accent">
                  Skip
               </Link>
            ) : (
               ''
            )}
         </nav>
         <main className="flex flex-col items-center">
            <div className="flex flex-col gap-8 items-center">
               {selectedImage ? (
                  <div className="flex flex-col gap-2 items-center">
                     <h1 className="font-bold">Profile picture added</h1>
                     <p className="text-sm text-muted-foreground text-center">
                        You can change, edit or delete this picture anytime.
                     </p>
                  </div>
               ) : (
                  <div className="flex flex-col gap-2 items-center">
                     <h1 className="font-bold">Keep your profile updated</h1>
                     <p className="text-sm text-muted-foreground text-center">
                        Add a profile picture so management know it&lsquo;s you.
                     </p>
                  </div>
               )}

               <Avatarr
                  selectedImage={selectedImage}
                  className="size-36 p-1.5 border-2 shadow-md"
               />
            </div>
            {selectedImage ? (
               <footer className="absolute bottom-4 right-4 left-4 flex flex-col gap-2">
                  <Link href="/ad/dashboard">
                     <Button className="bg-accent text-primary hover:bg-accent hover:text-primary w-full text-sm">
                        Done
                     </Button>
                  </Link>
                  <div>
                     <Button
                        className="border-2 text-accent hover:border-2 hover:text-accent w-full text-sm"
                        onClick={() => changePictureRef.current?.click()}
                     >
                        Change picture
                     </Button>
                     <input
                        className="hidden"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleAddPicture(e)}
                        ref={changePictureRef}
                     />
                  </div>
               </footer>
            ) : (
               <footer className="absolute bottom-4 right-4 left-4">
                  <Button
                     className="bg-accent text-primary hover:bg-accent hover:text-primary w-full text-sm"
                     onClick={() => {
                        addPictureRef.current?.click();
                     }}
                  >
                     Add picture
                  </Button>
                  <input
                     className="hidden"
                     type="file"
                     accept="image/*"
                     onChange={(e) => handleAddPicture(e)}
                     ref={addPictureRef}
                  />
               </footer>
            )}
         </main>
      </div>
   );
};

export default OnboardingPage;
