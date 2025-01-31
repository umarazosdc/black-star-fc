'use client';
import Avatarr from '@/components/utils/avatarr';
import EditProfileForm from '@/components/utils/edit-profile-form';
import { CameraIcon, ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const EditProfile = () => {
   const ref = React.useRef<HTMLInputElement>(null);
   const [selectedImage, setSelectedImage] = React.useState('');

   const handleSelectDp = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof window !== 'undefined' && event.target.files?.[0]) {
         const imageURL = URL.createObjectURL(event.target.files?.[0]);
         setSelectedImage(imageURL);
      }
   };
   return (
      <>
         <nav className="flex items-center justify-between p-4">
            <div className="flex items-center gap-6">
               <Link href="#">
                  <ChevronLeftIcon className="size-[23px]" />
               </Link>
               <span className="text-sm ">Edit profile</span>
            </div>
            <button
               className="text-sm font-semibold"
               form="edit-profile-form"
               type="submit"
            >
               Save
            </button>
         </nav>
         <main className="flex flex-col gap-4 p-4">
            <div className="h-[70px] absolute inset-0 top-14 bg-card" />
            <div
               className="mt-[20px] relative size-fit"
               onClick={() => ref.current?.click()}
            >
               <Avatarr
                  selectedImage={selectedImage}
                  className="size-[70px] p-1 border-2 brightness-75"
               />
               <input
                  type="file"
                  hidden
                  accept="image/*"
                  ref={ref}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                     handleSelectDp(e);
                  }}
               />
               <CameraIcon className="absolute text-card top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
            </div>
            <EditProfileForm />
         </main>
      </>
   );
};

export default EditProfile;
