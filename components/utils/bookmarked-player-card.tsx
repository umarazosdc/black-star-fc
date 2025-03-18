"use client";
import React from "react";
import PlayerImage from "./player-image";
import { BookmarkIcon } from "lucide-react";
import Link from "next/link";
import Age from "./age";
import { cn } from "@/lib/utils";
import { getBookmarkStatus, toggleBookmark } from "@/lib/database/queries";
import useSessionHook from "@/lib/hook/use-session";

const BookmarkedPlayerCard = ({
  src,
  position,
  name,
  age,
  className,
  isAdmin,
  id,
  ...props
}: {
  src: string;
  position: string;
  name: string;
  age: number;
  isAdmin?: boolean;
  id: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [bookmarkStatus, setBookmarkStatus] = React.useState<boolean>();
  const session = useSessionHook();
  const userId = session?.id;

  const handleBookmark = async (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();

    const bookmark = await getBookmarkStatus(id, userId as string);
    setBookmarkStatus(bookmark?.isBookmarked);
    try {
      await toggleBookmark(!bookmarkStatus, id, userId as string);
    } catch (error) {
      console.log("Error trying to toggle player's bookmark ", error);
      return null;
    }
  };
  return (
    <div
      className={cn(
        "shadow-md rounded-md bg-card border-t border-r flex flex-col gap-4 p-3 text-secondary select-none w-full",
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
          {isAdmin ? (
            ""
          ) : bookmarkStatus ? (
            <BookmarkIcon
              className="text-accent cursor-pointer size-9"
              onClick={(e) => {
                handleBookmark(e);
              }}
              fill="#E76D57"
            />
          ) : (
            <BookmarkIcon
              className="text-accent cursor-pointer size-9"
              onClick={(e) => {
                handleBookmark(e);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookmarkedPlayerCard;
