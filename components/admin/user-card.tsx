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
import { toast } from "sonner";
import { updateIsRequested } from "@/lib/actions";
import Link from "next/link";
import SuspendUserButton from "./suspend-user-button";
import DeleteUserButton from "./delete-user-button";

const UserCard = ({
  src,
  name,
  email,
  date,
  isAdminDashboard,
  playerName,
  playersAge,
  children,
  id,
  userId,
}: {
  src: string | undefined;
  name: string;
  email: string;
  date: string;
  isAdminDashboard?: boolean;
  children?: React.ReactNode;
  playerName?: string;
  playersAge?: number;
  id?: string;
  userId: string;
}) => {
  const [accept, setAccept] = React.useState<boolean>(false);

  const handleRequest = async () => {
    try {
      const result = await updateIsRequested(id as string, userId, email, name);
      if (result) {
        setAccept(result.isRequested);
        toast.success("Scout request accepted!");
      }
    } catch (error) {
      console.log("Failed to accept scout request", error);
      toast.error("Failed to accept scout request");
    }
  };

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
            <Button
              className="bg-emerald-500 text-primary"
              onClick={handleRequest}
            >
              Accept
            </Button>
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
