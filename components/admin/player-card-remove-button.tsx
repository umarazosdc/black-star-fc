"use client";
import React from "react";
import Button from "../utils/button";
import { toast } from "sonner";
import { removePlayerById } from "@/lib/database/queries";
import { useRouter } from "next/navigation";

const PlayerCardRemoveButton = ({
  src,
  videos,
  id,
  name,
}: {
  src: string[];
  videos?: string[];
  id: string;
  name: string;
}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const router = useRouter();
  const handleRemovePlayer = async () => {
    const toastId = toast.loading(`Removing ${name}...`);

    const data = {
      images: Array.isArray(src) ? src : [src],
      videos: Array.isArray(videos) ? videos : [],
    };

    try {
      const response = await fetch("/api/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to delete media from Cloudinary");
      }

      // Only remove player from the database if the deletion succeeded
      await removePlayerById(id);
      setIsLoading(true);
      router.refresh();
      toast.success(`${name} was successfully removed.`, { id: toastId });
    } catch (error) {
      console.error("Error trying to delete player: ", error);
      toast.error("Error trying to delete player.", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      className="bg-red-600 text-primary"
      onClick={handleRemovePlayer}
      aria-disabled={isLoading}
    >
      {isLoading ? "Removing..." : "Remove"}
    </Button>
  );
};

export default PlayerCardRemoveButton;
