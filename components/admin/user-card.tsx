"use client";
import React from "react";
import Button from "../utils/button";
import Icontext from "../utils/icontext";
import { Clock3Icon, MailIcon, MailsIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";
import Age from "../utils/age";
import CldImg from "../utils/cldimg";
import Link from "next/link";
import SuspendUserButton from "./suspend-user-button";
import DeleteUserButton from "./delete-user-button";
import AcceptRequestButton from "./accept-request-button";
import { getRequestStatus } from "@/lib/database/queries";

const UserCard = ({
  src,
  name,
  email,
  date,
  isAdminDashboard,
  playerName,
  playersAge,
  children,
  userId,
  playerId,
}: {
  src: string | undefined;
  name: string;
  email: string;
  date: string;
  isAdminDashboard?: boolean;
  children?: React.ReactNode;
  playerName?: string;
  playersAge?: number;
  userId: string;
  playerId?: string;
}) => {
  const [accept, setAccept] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getPlayerStatus = async () => {
      const status = await getRequestStatus(playerId as string, userId);

      setAccept(status);
    };

    getPlayerStatus();
  }, [playerId, userId]);

  return (
    <div className="flex flex-col gap-4 shadow-md p-4 bg-card rounded-md">
      <div className="self-start flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <Link href={`/admin/dashboard/user?id=${userId}`}>
            <CldImg
              src={src ? src : "uploads/images/defaultjpg"}
              alt="User image"
              className="size-[5rem] rounded-full border"
            />
          </Link>

          <div className="flex flex-col gap-2">
            <Link
              className="text-base font-bold tracking-wide truncate w-48"
              href={`/admin/dashboard/user?id=${userId}`}
            >
              {name}
            </Link>
            {!isAdminDashboard && (
              <Icontext icon={MailIcon} className="w-52">
                {email}
              </Icontext>
            )}
            {isAdminDashboard ? (
              // Add dialog to display player
              <Dialog>
                <DialogTrigger>
                  <Icontext icon={MailsIcon} className="cursor-pointer">
                    {!accept ? "Requesting" : "Requested for"}{" "}
                    <b>{playerName}</b>
                  </Icontext>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{playerName}</DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>
                    {children}
                    <DialogFooter>
                      <Age age={playersAge} className="self-end" />
                    </DialogFooter>
                  </DialogContent>
                </DialogTrigger>
              </Dialog>
            ) : (
              <Icontext icon={Clock3Icon}>
                Joined <b>{date}</b>
              </Icontext>
            )}
          </div>
        </div>
      </div>
      {isAdminDashboard ? (
        !accept && (
          <div className="self-end flex items-center gap-4">
            <AcceptRequestButton
              playerId={playerId as string}
              userId={userId}
              playerName={playerName as string}
            />
            <Button className="bg-red-600 text-primary">Reject</Button>
          </div>
        )
      ) : (
        <div className="self-end flex items-center gap-4">
          <SuspendUserButton userId={userId} />
          <DeleteUserButton userId={userId} />
        </div>
      )}
    </div>
  );
};

export default UserCard;
