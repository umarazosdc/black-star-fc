'use client';
import { PlayerSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import FlexAligned from '../utils/flex-aligned';
import { Button } from '../ui/button';
import { newPlayer } from '@/lib/validations';
import PlayerStat from '../admin/player-stat';
import FormInputField from './form-input-field';
import FormCalendar from './form-calendar';
import FormPosition from './form-position';
import FormSide from './form-side';
import FormHeight from './form-height';
import FormWeight from './form-weight';
import FormImage from './form-image';
import { Input } from '../ui/input';
import { stats } from '@/lib/data';
import { AlertDialogCancel } from '@/components/ui/alert-dialog';

const NewPlayersForm = () => {
   const form = useForm<z.infer<typeof PlayerSchema>>({
      defaultValues: {
         firstname: '',
         lastname: '',
         side: '',
         position: '',
         height: 0,
         weight: 0,
         dob: new Date(),
         // stats: { spd: 0, sho: 0, def: 0, dri: 0, pac: 0, pas: 0 },
      },
      resolver: zodResolver(PlayerSchema),
   });

   const [isLoading, startTransition] = useTransition();
   const [thumbnailPublicId, setThumbnailPublicId] = React.useState<string>();
   const [urlThumbnail, setUrlThumbnail] = React.useState<string>();
   const [statImagePublicId, setStatImagePublicId] = React.useState<string>();
   const [urlStatImage, setUrlStatImage] = React.useState<string>();
   const [playerVideosPublicIds, setPlayerVideosPublicIds] =
      React.useState<Array<string>>();
   const [thumbnailLoading, setThumbnailLoading] =
      React.useState<boolean>(false);
   const [statisticLoading, setStatisticLoading] =
      React.useState<boolean>(false);
   const [videoLoading, setVideoLoading] = React.useState<boolean>(false);

   const statRef = React.useRef<HTMLInputElement>(null);
   const thumbnailRef = React.useRef<HTMLInputElement>(null);

   const handleThumbnailImage = async (
      e: React.ChangeEvent<HTMLInputElement>
   ) => {
      e.preventDefault();
      const file = e.target.files?.[0];
      if (!file) {
         console.log('Thumbnail file was not selected.');
         return;
      }

      const url = URL.createObjectURL(file);
      setUrlThumbnail(url);

      const formData = new FormData();
      formData.append('file', file);
      setThumbnailLoading(true);
      setThumbnailLoading(true);
      try {
         const res = await fetch('/api/image-upload', {
            method: 'POST',
            body: formData,
         });
         if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
         }
         const data = await res.json();
         setThumbnailPublicId(data.publicId);
         form.setValue('thumbnail', data.publicId);
      } catch (error) {
         console.error('Error uploading data:', error);
      } finally {
         setThumbnailLoading(false);
         setThumbnailLoading(false);
      }
   };

   const handleStatImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const file = e.target.files?.[0];
      if (!file) {
         console.log('Statistic file was not selected.');
         return;
      }

      const url = URL.createObjectURL(file);
      setUrlStatImage(url);

      const formData = new FormData();
      formData.append('file', file);
      setStatisticLoading(true);
      try {
         const res = await fetch('/api/image-upload', {
            method: 'POST',
            body: formData,
         });
         if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
         }
         const data = await res.json();
         setStatImagePublicId(data.publicId);
         form.setValue('statImage', data.publicId);
      } catch (error) {
         console.error('Error fetching data:', error);
      } finally {
         setStatisticLoading(false);
      }
   };

   const handleVideos = async (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const file = e.target.files;
      if (!file) return;
      const fileArr = [...file];
      const formData = new FormData();
      fileArr.forEach((file) => formData.append('file', file));
      setVideoLoading(true);
      try {
         const res = await fetch('/api/videos-upload', {
            method: 'POST',
            body: formData,
         });
         if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
         }
         const data = await res.json();
         setPlayerVideosPublicIds(data.publicIds);
         form.setValue('videos', data.publicIds);
      } catch (error) {
         console.error('Error uploading videos: ', error);
         return;
      } finally {
         setVideoLoading(false);
      }
   };

   const handlePlayerSubmit = async (values: z.infer<typeof PlayerSchema>) => {
      if (!thumbnailPublicId || !statImagePublicId || !playerVideosPublicIds) {
         console.log('Failed to get the publid_id');
         return;
      }
      startTransition(() => {
         newPlayer({
            ...values,
            thumbnail: thumbnailPublicId,
            statImage: statImagePublicId,
            videos: playerVideosPublicIds,
         });
      });
   };

   const handleCancelButton = async () => {
      // // Check if all required public IDs are absent
      // if (!thumbnailPublicId && !statImagePublicId && !playerVideosPublicIds) {
      //    console.error('No file selected!');
      //    return; // Exit the function if no files are selected
      // }

      // Initialize arrays for images and videos
      const images = [];
      const videos = [];

      // Add image public IDs if they exist
      if (thumbnailPublicId) images.push(thumbnailPublicId);
      if (statImagePublicId) images.push(statImagePublicId);

      // Add video public IDs if they exist
      if (playerVideosPublicIds && Array.isArray(playerVideosPublicIds)) {
         videos.push(...playerVideosPublicIds);
      }

      const payload = {
         images,
         videos,
      };

      // Check if there's any data to send
      if (images.length > 0 || videos.length > 0) {
         try {
            await fetch('/api/delete', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(payload),
            });
         } catch (error) {
            console.log('Failed to cancel', error);
         }
      } else {
         console.log('No valid files to cancel!');
      }
   };

   return (
      <div className="flex flex-col gap-3">
         <div className="flex gap-3">
            <div
               className="w-full"
               onClick={() => {
                  thumbnailRef.current?.click();
               }}
            >
               <FormImage
                  selectedImage={urlThumbnail}
                  name="Thumbnail"
                  isLoading={thumbnailLoading}
               />
               <input
                  type="file"
                  onChange={(e) => handleThumbnailImage(e)}
                  hidden
                  required
                  ref={thumbnailRef}
                  accept="image/*"
                  disabled={thumbnailLoading}
               />
            </div>
            <div
               className="w-full"
               onClick={() => {
                  statRef.current?.click();
               }}
            >
               <FormImage
                  selectedImage={urlStatImage}
                  name="Statistic image"
                  isLoading={statisticLoading}
               />
               <input
                  type="file"
                  onChange={(e) => handleStatImage(e)}
                  hidden
                  required
                  ref={statRef}
                  accept="image/*"
                  disabled={statisticLoading}
               />
            </div>
         </div>
         <div className="flex flex-col gap-3">
            <span className="text-sm">Videos</span>
            {videoLoading ? (
               <span className="text-sm rounded-md border bg-card py-2 px-3 w-full">
                  Uploading videos
               </span>
            ) : (
               <Input
                  type="file"
                  accept="video/*"
                  multiple
                  required
                  disabled={videoLoading}
                  onChange={(e) => handleVideos(e)}
               />
            )}
         </div>

         <Form {...form}>
            <form onSubmit={form.handleSubmit(handlePlayerSubmit)}>
               <div className="space-y-6 flex flex-col">
                  <FlexAligned>
                     <FormInputField
                        name="First name"
                        field="firstname"
                        form={form}
                        placeholder="Isa"
                     />
                     <FormInputField
                        name="Last name"
                        field="lastname"
                        form={form}
                        placeholder="Umar"
                     />
                  </FlexAligned>
                  <FlexAligned>
                     <FormPosition field="position" form={form} />
                     <FormSide form={form} field="side" />
                  </FlexAligned>
                  <FlexAligned>
                     <FormWeight form={form} field="weight" />
                     <FormHeight form={form} field="height" />
                  </FlexAligned>
                  <FormCalendar field="dob" form={form} />
                  <div className="flex flex-col gap-3">
                     <span className="text-sm font-bold">Statistics</span>
                     <div className="grid grid-cols-3 gap-3">
                        {Object.entries(stats).map(([key, label]) => (
                           <PlayerStat
                              key={key}
                              form={form}
                              name={label}
                              stat={
                                 key as
                                    | 'spd'
                                    | 'def'
                                    | 'sho'
                                    | 'pas'
                                    | 'pac'
                                    | 'dri'
                              }
                           />
                        ))}
                     </div>
                  </div>
               </div>
               <footer className="flex flex-col mt-8">
                  <Button
                     className="bg-accent text-primary hover:bg-accent"
                     type="submit"
                     disabled={
                        isLoading ||
                        thumbnailLoading ||
                        videoLoading ||
                        statisticLoading
                     }
                  >
                     Add
                  </Button>
                  <AlertDialogCancel
                     // variant="outline"
                     className="hover:bg-secondary transition-colors duration-300"
                     type="button"
                     onClick={handleCancelButton}
                     disabled={
                        isLoading ||
                        thumbnailLoading ||
                        videoLoading ||
                        statisticLoading
                     }
                  >
                     Cancel
                  </AlertDialogCancel>
               </footer>
            </form>
         </Form>
      </div>
   );
};

export default NewPlayersForm;
