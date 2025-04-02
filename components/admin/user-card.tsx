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
  isAccepted,
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
  isAccepted?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-4 shadow-md p-4 bg-card rounded-md">
      <div className="grid grid-cols-[5rem_auto] gap-3 items-center w-full">
        <Link
          href={`/dashboard/user?id=${userId}`}
          className="size-[5rem] rounded-full"
        >
          <CldImg
            src={src ? src : "uploads/images/defaultjpg"}
            alt="User image"
            className="size-[5rem] rounded-full border"
          />
        </Link>

        <div className="flex flex-col gap-2 min-w-0">
          <Link
            className="text-base font-bold tracking-wide truncate w-full"
            href={`/dashboard/user?id=${userId}`}
          >
            {name}
          </Link>

          {!isAdminDashboard && (
            <Icontext icon={MailIcon} className="w-52">
              {email}
            </Icontext>
          )}

          {isAdminDashboard ? (
            <Dialog>
              <DialogTrigger>
                <Icontext
                  icon={MailsIcon}
                  className="cursor-pointer truncate w-full"
                >
                  {!isAccepted ? "Requesting" : "Requested for"}{" "}
                  <b>{playerName}</b>
                </Icontext>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="truncate">{playerName}</DialogTitle>
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

      {isAdminDashboard ? (
        !isAccepted && (
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
