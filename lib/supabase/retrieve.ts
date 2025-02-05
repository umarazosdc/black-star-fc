import { supabase } from './supabase';

export const retrieve = async (path: string) => {
   // Retrieve file from Supabase
   const { data, error } = await supabase.storage
      .from('uploads')
      .download(path);
   if (error) {
      throw error;
   }
   return data;
};
