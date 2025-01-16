'use client';
import { PlayerSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
   Form,
   FormControl,
   FormLabel,
   FormItem,
   FormField,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import FlexAligned from '../utils/flex-aligned';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '../ui/select';
import { getName } from 'country-list';

const NewPlayersForm = () => {
   console.log(getName('NG'));
   const form = useForm<z.infer<typeof PlayerSchema>>({
      defaultValues: {
         firstname: '',
         lastname: '',
         image: '',
         videos: [''],
         side: '',
         positon: '',
         height: 0,
         weight: 0,
         dob: '',
         nationality: '',
         achievements: [''],
      },
      resolver: zodResolver(PlayerSchema),
   });

   const roles = [
      { role: 'Centre-back' },
      { role: 'Full-back' },
      { role: 'Wing-back' },
      { role: 'Centre-midfielder' },
      { role: 'Defensive-midfielder' },
      { role: 'Attacking-midfielder' },
      { role: 'Wide-midfielder' },
      { role: 'Centre-forward' },
      { role: 'Second-striker' },
      { role: 'Winger' },
   ];
   const positions = [
      { position: 'Defender' },
      { position: 'Midfielder' },
      { position: 'Forward' },
   ];
   const weights = [
      { weight: 45.9 },
      { weight: 60.66 },
      { weight: 62.1 },
      { weight: 68.44 },
      { weight: 73.39 },
      { weight: 80.1 },
   ];
   const heights = [
      { height: 5 },
      { height: 5.3 },
      { height: 5.5 },
      { height: 5.8 },
      { height: 6 },
      { height: 6.2 },
   ];

   const handleAddPlayer = () => {};

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(handleAddPlayer)}>
            <div className="space-y-6 flex flex-col">
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="image"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Image</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 className="text-sm"
                                 type="file"
                                 accept="image/*"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="videos"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Videos</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 className="text-sm"
                                 type="file"
                                 accept="video/*"
                                 multiple
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </FlexAligned>
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="firstname"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>First name</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 placeholder="Isa"
                                 className="text-sm"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="lastname"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Last name</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 placeholder="Umar"
                                 className="text-sm"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </FlexAligned>
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="side"
                     render={({ field }) => (
                        <Select>
                           <SelectTrigger>
                              <FormItem>
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Position"
                                       {...field}
                                    />
                                 </FormControl>
                              </FormItem>
                           </SelectTrigger>
                           <SelectContent>
                              {positions.map((position, key) => (
                                 <SelectItem
                                    key={key}
                                    value={position.position.toLowerCase()}
                                 >
                                    {position.position}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="side"
                     render={({ field }) => (
                        <Select>
                           <SelectTrigger>
                              <FormItem>
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Role"
                                       {...field}
                                    />
                                 </FormControl>
                              </FormItem>
                           </SelectTrigger>
                           <SelectContent>
                              {roles.map((role, key) => (
                                 <SelectItem
                                    key={key}
                                    value={role.role.toLowerCase()}
                                 >
                                    {role.role}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     )}
                  />
               </FlexAligned>
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="weight"
                     render={({ field }) => (
                        <Select>
                           <SelectTrigger>
                              <FormItem>
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Weight"
                                       {...field}
                                    />
                                 </FormControl>
                              </FormItem>
                           </SelectTrigger>
                           <SelectContent>
                              {weights.map((weight, key) => (
                                 <SelectItem
                                    key={key}
                                    value={weight.weight.toString()}
                                 >
                                    {weight.weight}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="height"
                     render={({ field }) => (
                        <Select>
                           <SelectTrigger>
                              <FormItem>
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Height"
                                       {...field}
                                    />
                                 </FormControl>
                              </FormItem>
                           </SelectTrigger>
                           <SelectContent>
                              {heights.map((height, key) => (
                                 <SelectItem
                                    key={key}
                                    value={height.height.toString()}
                                 >
                                    {height.height}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     )}
                  />
               </FlexAligned>
               <FlexAligned>
                  <FormField
                     control={form.control}
                     name="dob"
                     render={({ field }) => (
                        <Select>
                           <SelectTrigger>
                              <FormItem>
                                 <FormControl>
                                    <SelectValue
                                       placeholder="D O B"
                                       {...field}
                                    />
                                 </FormControl>
                              </FormItem>
                           </SelectTrigger>
                           <SelectContent>
                              {weights.map((weight, key) => (
                                 <SelectItem
                                    key={key}
                                    value={weight.weight.toString()}
                                 >
                                    {weight.weight}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="nationality"
                     render={({ field }) => (
                        <Select>
                           <SelectTrigger>
                              <FormItem>
                                 <FormControl>
                                    <SelectValue
                                       placeholder="Nationality"
                                       {...field}
                                    />
                                 </FormControl>
                              </FormItem>
                           </SelectTrigger>
                           <SelectContent>
                              <SelectTrigger>
                                 <SelectValue
                                    placeholder="Nationality"
                                    {...field}
                                 />
                                 <SelectContent>
                                    <SelectItem value="nigerian">
                                       Nigerian
                                    </SelectItem>
                                 </SelectContent>
                              </SelectTrigger>
                           </SelectContent>
                        </Select>
                     )}
                  />
               </FlexAligned>
            </div>
         </form>
      </Form>
   );
};

export default NewPlayersForm;
