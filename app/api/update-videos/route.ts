import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export interface CloudinaryUploadResult {
  public_id: string;
}

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  try {
    const formData = await req.formData();
    const files = formData.getAll("file") as File[];
    const oldPublicIds = formData.getAll("publicId") as string[];

    // ✅ If no new files were uploaded, return success without changing anything
    if (!files || files.length === 0) {
      return NextResponse.json(
        { message: "No files were changed" },
        { status: 200 }
      );
    }

    // Convert each file to a Buffer
    const buffers = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        return Buffer.from(arrayBuffer);
      })
    );

    // Upload each buffer to Cloudinary with corresponding public_id
    const uploadPromises = buffers.map((buffer, index) => {
      return new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "uploads/videos",
            resource_type: "video",
            public_id: oldPublicIds[index], // Use corresponding publicId
            overwrite: true, // Replace existing video
            invalidate: true, // Clear Cloudinary cache
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else if (result) {
              resolve(result.public_id);
            } else {
              reject(new Error("Upload result is undefined"));
            }
          }
        );
        uploadStream.end(buffer);
      });
    });

    // Wait for all uploads to complete
    const updatedPublicIds = await Promise.all(uploadPromises);

    return NextResponse.json({ publicIds: updatedPublicIds }, { status: 200 });
  } catch (error) {
    console.error("Upload video failed", error);
    return NextResponse.json({ error: "Upload video failed" }, { status: 500 });
  }
}
