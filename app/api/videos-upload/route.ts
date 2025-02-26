import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

export interface CloudinaryUploadResult {
   public_id: string;
}

// Configuration
cloudinary.config({
   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
   if (req.method !== 'POST') {
      return NextResponse.json(
         { error: 'Method Not Allowed' },
         { status: 405 }
      );
   }

   try {
      const file = (await req.formData()).getAll('file') as File[] | null;
      if (!file) {
         return NextResponse.json(
            { error: 'No video file uploaded' },
            { status: 400 }
         );
      }

      async function convertFilesToBuffers(files: File[]): Promise<Buffer[]> {
         const bufferPromises = files.map(async (file) => {
            const arrayBuffer = await file.arrayBuffer();
            return Buffer.from(arrayBuffer);
         });
         return Promise.all(bufferPromises);
      }
      const buffers = await convertFilesToBuffers(file);

      async function uploadBuffersToCloudinary(
         buffers: Buffer[]
      ): Promise<string[]> {
         const uploadPromises = buffers.map((buffer) => {
            return new Promise<string>((resolve, reject) => {
               const uploadStream = cloudinary.uploader.upload_stream(
                  { folder: 'uploads/videos', resource_type: 'video' },
                  (error, result) => {
                     if (error) {
                        reject(error);
                     } else {
                        if (result) {
                           resolve(result.public_id);
                        } else {
                           reject(new Error('Upload result is undefined'));
                        }
                     }
                  }
               );
               uploadStream.end(buffer);
            });
         });
         return Promise.all(uploadPromises);
      }

      const publicIds = await uploadBuffersToCloudinary(buffers);
      return NextResponse.json({ publicIds: publicIds }, { status: 200 });
   } catch (error) {
      console.log('Upload video failed', error);
      return NextResponse.json(
         { error: 'Upload video failed' },
         { status: 500 }
      );
   }
}
