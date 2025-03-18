import {
  BriefcaseBusinessIcon,
  Clock3Icon,
  DotIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import React from "react";
import Wrapper from "@/components/utils/wrapper";
import Icontext from "@/components/utils/icontext";
import SectionWrapper from "@/components/utils/section-wrapper";
import BookmarkedPlayerCard from "@/components/utils/bookmarked-player-card";
import CldImg from "@/components/utils/cldimg";
import {
  getBookmarkedPlayersById,
  getRequestedPlayersById,
  getScoutTotalBookmarks,
  getScoutTotalRequests,
  getUserById,
  isSuspended,
} from "@/lib/database/queries";
import { formatDate, getAge } from "@/lib/date";
import DeleteUserButton from "@/components/admin/delete-user-button";
import SuspendUserButton from "@/components/admin/suspend-user-button";
import CancelSuspensionButton from "@/components/admin/cancel-suspension-button";

interface UserProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}
interface Player {
  firstname: string;
  lastname: string;
  image: string;
  dob: string;
  position: string;
  id: string;
}

interface Bookmark {
  player: Player;
}

interface Request extends Bookmark {}

const UserAboutPage = async ({ searchParams }: UserProps) => {
  const params = await searchParams;
  const id = params.id || undefined;
  const user = await getUserById(id as string);
  const totalRequest = await getScoutTotalRequests(user?.id as string);
  const totalBookmark = await getScoutTotalBookmarks(user?.id as string);
  const bookmarks = await getBookmarkedPlayersById(user?.id as string);
  const requests = await getRequestedPlayersById(user?.id as string);
  const onSuspension = await isSuspended(user?.id as string);

  return (
    <div className="flex flex-col gap-4 min-h-full">
      <div className="h-[85px] absolute inset-0 bg-card border-b z-0" />
      <CldImg
        src={user?.image as string}
        alt="Scout image"
        className="size-20 rounded-full p-1 border-2 mt-[20px] z-20"
      />

      <div className="space-y-2">
        <h2 className="text-xl font-bold tracking-wide">{user?.name}</h2>
        <div className="flex items-center gap-3 text-sm">
          <div className="flex gap-1.5">
            <span className="font-bold">{totalRequest}</span>
            <p className="opacity-70">requests</p>
          </div>
          <DotIcon />
          <div className="flex gap-1.5">
            <span className="font-bold">{totalBookmark}</span>
            <p className="opacity-70">bookmarks</p>
          </div>
        </div>
        {user?.bio && (
          <div className="w-[16rem] break-words text-sm leading-relaxed">
            <p>{user?.bio}</p>
          </div>
        )}
      </div>
      <Wrapper title="Details" className="space-y-3 text-sm">
        <div className="space-y-3">
          <Icontext icon={BriefcaseBusinessIcon}>Scout</Icontext>
          {user?.state && (
            <Icontext icon={MapPinIcon}>
              <span className="capitalize">{user?.state}</span> state, Nigeria.
            </Icontext>
          )}
          <Icontext icon={Clock3Icon}>
            Joined <b>{formatDate(String(user?.createdAt))}</b>
          </Icontext>
          <Icontext icon={MailIcon}>{user?.email}</Icontext>
        </div>
      </Wrapper>
      <SectionWrapper title="Bookmarks" link="#" label="View all">
        <div className="flex items-center gap-4 overflow-auto pb-1">
          {bookmarks.length > 0 ? (
            bookmarks.map((bookmark: Bookmark, key: number) => (
              <BookmarkedPlayerCard
                key={key}
                name={
                  bookmark.player.firstname + " " + bookmark.player.lastname
                }
                src={bookmark.player.image}
                age={getAge(bookmark.player.dob)}
                position={bookmark.player.position}
                id={bookmark.player.id}
                isAdmin
                className="w-[10.5rem]"
              />
            ))
          ) : (
            <p className="text-sm text-muted-foreground">
              Haven&apos;t yet bookmarked players.
            </p>
          )}
        </div>
      </SectionWrapper>
      <SectionWrapper title="Requests" link="#" label="View all">
        <div className="flex items-center gap-4 overflow-auto pb-1">
          {requests.length > 0 ? (
            requests.map((request: Request, key: number) => (
              <BookmarkedPlayerCard
                key={key}
                name={request.player.firstname + " " + request.player.lastname}
                src={request.player.image}
                age={getAge(request.player.dob)}
                position={request.player.position}
                id={request.player.id}
                isAdmin
                className="w-[10.5rem]"
              />
            ))
          ) : (
            <p className="text-sm text-muted-foreground">
              Haven&apos;t yet bookmarked players.
            </p>
          )}
        </div>
      </SectionWrapper>
      {onSuspension ? (
        <CancelSuspensionButton userId={user?.id as string} className="h-10" />
      ) : (
        <div className="flex flex-col space-y-2">
          <SuspendUserButton userId={user?.id as string} className="h-10" />
          <DeleteUserButton userId={user?.id as string} className="h-10" />
        </div>
      )}
    </div>
  );
};

export default UserAboutPage;
