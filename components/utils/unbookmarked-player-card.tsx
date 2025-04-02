"use client";
import React from "react";
import PlayerImage from "./player-image";
import { BookmarkIcon } from "lucide-react";
import Link from "next/link";
import Age from "./age";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { bookmarkPlayer } from "@/lib/actions/create";

const SuggestedPlayersCard = ({
  src,
  position,
  name,
  age,
  className,
  isAdmin,
  id,
  userId,
  ...props
}: {
  src: string;
  position: string;
  name: string;
  age: number;
  isAdmin?: boolean;
  id: string;
  userId: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter();

  // Add player to BOOKMARK
  const handleBookmark = async (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    if (!userId)
      return toast.error("You must be logged in to bookmark a player");

    const toastId = toast.loading("Bookmarking player...");

    try {
      await bookmarkPlayer(id, userId); // Pass `true` for bookmarking
      router.refresh();
      toast.success("Successfully bookmarked player", { id: toastId });
    } catch (error) {
      console.log("Failed to remove player ", error);

      toast.error("Failed to bookmark player", { id: toastId });
    }
  };

  return (
    <div
      className={cn(
        "shadow-md rounded-md bg-card border-t border-r flex flex-col gap-4 p-3 text-secondary select-none w-full  flex-shrink-0",
        className
      )}
      {...props}
    >
      <Link href={`/explore/player?id=${id}`}>
        <PlayerImage src={src} position={position} />
      </Link>

      <div className="flex flex-col gap-4">
        <Link className="font-bold text-sm" href={`/explore/player?id=${id}`}>
          {name}
        </Link>
        <div
          className={cn(
            isAdmin ? "self-end" : "flex justify-between items-center"
          )}
        >
          <Age age={age} />

          {!isAdmin && (
            <BookmarkIcon
              className="text-accent cursor-pointer size-9"
              onClick={handleBookmark}
              fill={"none"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestedPlayersCard;
