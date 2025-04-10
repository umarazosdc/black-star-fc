import { auth } from "@/auth";
import BookmarkedPlayerCard from "@/components/utils/bookmarked-player-card";
import GridWrappers from "@/components/utils/grid-wrappers";
import Wrapper from "@/components/utils/wrapper";
import { getBookmarkedPlayersById } from "@/lib/database/queries";
import { redirect } from "next/navigation";
import React from "react";

const BookmarksPage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/login");

  if (session?.user.role === "admin") redirect("/dashboard");

  const id = session?.user.id;
  const isAdmin = session?.user.role === "admin";
  const bookmarks = await getBookmarkedPlayersById(id as string);
  return (
    <Wrapper title="Bookmarks">
      <GridWrappers>
        {bookmarks.length > 0 ? (
          bookmarks.map((bookmark, key) => (
            <BookmarkedPlayerCard
              key={key}
              src={bookmark.player.image}
              position={bookmark.player.position}
              age={bookmark.player.age}
              id={bookmark.player.id}
              name={bookmark.player.firstname + " " + bookmark.player.lastname}
              isAdmin={isAdmin}
              userId={id as string}
            />
          ))
        ) : (
          <p className="text-sm text-muted-foreground">
            You have not bookmarked any player yet.
          </p>
        )}
      </GridWrappers>
    </Wrapper>
  );
};

export default BookmarksPage;
