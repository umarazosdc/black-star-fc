import { auth } from "@/auth";
import BookmarkedPlayerCard from "@/components/utils/bookmarked-player-card";
import GridWrappers from "@/components/utils/grid-wrappers";
import Wrapper from "@/components/utils/wrapper";
import { getBookmarkedPlayersById } from "@/lib/database/queries";
import React from "react";

const BookmarksPage = async () => {
  const session = await auth();
  const id = session?.user.id;
  const bookmarks = await getBookmarkedPlayersById(id as string);
  return (
    <Wrapper title="Bookmarks">
      <GridWrappers>
        {bookmarks.map((bookmark, key) => (
          <BookmarkedPlayerCard
            key={key}
            src={bookmark.player.image}
            position={bookmark.player.position}
            age={bookmark.player.age}
            id={bookmark.player.id}
            name={bookmark.player.firstname + " " + bookmark.player.lastname}
            isAdmin
          />
        ))}
      </GridWrappers>
    </Wrapper>
  );
};

export default BookmarksPage;
