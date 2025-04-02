import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const timestamp = Math.floor(Date.now() / 1000); // Current timestamp
    const folder = "uploads/videos"; // Folder to store videos

    // Generate a signature (signed using your API secret)
    const signature = cloudinary.utils.api_sign_request(
      { timestamp, folder }, // Parameters
      process.env.CLOUDINARY_API_SECRET as string // API secret for signing
    );

    // Return required credentials for frontend
    return NextResponse.json({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      timestamp,
      signature,
      folder,
    });
  } catch (error) {
    console.log("Error generating Cloudinary signature: ", error);
    // Handle error and return a response
    return NextResponse.json(
      { error: "Failed to generate signature" },
      { status: 500 }
    );
  }
}
