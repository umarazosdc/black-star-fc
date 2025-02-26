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

export async function POST(request: NextRequest) {
   if (request.method !== 'POST') {
      return NextResponse.json(
         { error: 'Method Not Allowed' },
         { status: 405 }
      );
   }

   try {
      const formData = await request.formData();
      const file = formData.get('file') as File | null;

      if (!file) {
         return NextResponse.json(
            { error: 'No file uploaded' },
            { status: 400 }
         );
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result = await new Promise<CloudinaryUploadResult>(
         (resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
               { folder: 'uploads/images' },
               (error, result) => {
                  if (error) reject(error);
                  else resolve(result as CloudinaryUploadResult);
               }
            );
            uploadStream.end(buffer);
         }
      );
      return NextResponse.json({ publicId: result.public_id }, { status: 200 });
   } catch (error) {
      console.log('Upload image failed', error);
      return NextResponse.json(
         { error: 'Upload image failed' },
         { status: 500 }
      );
   }
}
