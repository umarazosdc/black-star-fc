"use client";
import React from "react";
import Button from "../homepage/button";
import { bookmarkPlayer } from "@/lib/actions";
import { toast } from "sonner";
import { getBookmarkStatus } from "@/lib/database/queries";
import { useRouter } from "next/navigation";
import useSessionHook from "@/lib/hook/use-session";

const BookmarkPlayerButton = ({ playerId }: { playerId: string }) => {
  const [isBookmarked, setIsBookmarked] = React.useState<boolean>(false);

  const session = useSessionHook();
  const userId = session?.id;

  const router = useRouter();

  // Get Bookmark status
  const getStatus = React.useCallback(async () => {
    if (!userId) return;
    const status = await getBookmarkStatus(playerId, userId);
    setIsBookmarked(status);
  }, [playerId, userId]);

  React.useEffect(() => {
    getStatus();
  }, [getStatus]);

  // Add player to BOOKMARK
  const handleBookmark = async () => {
    if (!userId)
      return toast.error("You must be logged in to bookmark a player");

    const toastId = toast.loading("Bookmarking player...");

    try {
      await bookmarkPlayer(playerId, userId); // Pass `true` for bookmarking
      setIsBookmarked(true); // ✅ Update state
      router.refresh();
      toast.success("Successfully bookmarked player", { id: toastId });
    } catch (error) {
      console.log("Failed to bookmark player ", error);

      toast.error("Failed to bookmark player", { id: toastId });
    }
  };

  const handleUnBookmark = async () => {
    if (!userId)
      return toast.error("You must be logged in to unbookmark a player");

    const toastId = toast.loading("Removing player from bookmark...");

    try {
      await bookmarkPlayer(playerId, userId); // Pass `false` for unbookmarking
      setIsBookmarked(false); // ✅ Update state
      router.refresh();
      toast.success("Removed player from bookmark", { id: toastId });
    } catch (error) {
      console.log("Failed to remove player ", error);

      toast.error("Failed to remove player from bookmark", { id: toastId });
    }
  };
  return isBookmarked ? (
    <Button
      className="w-full text-red-600 bg-red-200"
      onClick={handleUnBookmark}
    >
      Remove from bookmark
    </Button>
  ) : (
    <Button className="border-2 w-full" onClick={handleBookmark}>
      Bookmark Player
    </Button>
  );
};

export default BookmarkPlayerButton;
