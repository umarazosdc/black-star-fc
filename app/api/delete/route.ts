import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({
   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
   if (req.method !== 'POST') {
      return NextResponse.json(
         { error: 'Method Not Allowed!' },
         { status: 405 }
      );
   }

   let publicIds;
   try {
      publicIds = await req.json();
   } catch {
      return NextResponse.json(
         { error: 'Invalid JSON payload' },
         { status: 400 }
      );
   }

   if (!publicIds || typeof publicIds !== 'object') {
      return NextResponse.json(
         { error: 'Invalid input data' },
         { status: 400 }
      );
   }

   const { images = [], videos = [] } = publicIds;

   if (!Array.isArray(images) || !Array.isArray(videos)) {
      return NextResponse.json(
         { error: 'Images and videos should be arrays' },
         { status: 400 }
      );
   }

   try {
      // Delete images if any
      if (images.length > 0) {
         const imageDeletionResult = await cloudinary.api.delete_resources(
            images,
            {
               resource_type: 'image',
            }
         );
         console.log('Image deletion result:', imageDeletionResult);
      }

      // Delete videos if any
      if (videos.length > 0) {
         const videoDeletionResult = await cloudinary.api.delete_resources(
            videos,
            {
               resource_type: 'video',
            }
         );
         console.log('Video deletion result:', videoDeletionResult);
      }

      return NextResponse.json({ message: 'Resources deleted successfully' });
   } catch (error) {
      console.error('Failed to delete resources:', error);
      return NextResponse.json(
         { error: 'Failed to delete resources' },
         { status: 500 }
      );
   }
}
