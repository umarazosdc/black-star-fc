import { supabase } from './supabase';

export const upload = async (file: File) => {
   // Upload file to Supabase
   const { data, error } = await supabase.storage
      .from('uploads')
      .upload(`public/${file.name}`, file);
   if (error) {
      throw error;
   }
   return data;
};
