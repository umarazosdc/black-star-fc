import React from "react";
import Icontext from "../utils/icontext";
import { Clock3Icon, MailIcon } from "lucide-react";
import CancelSuspensionButton from "./cancel-suspension-button";
import DeleteUserButton from "./delete-user-button";
import CldImg from "../utils/cldimg";
import Link from "next/link";

const SuspendedUserCard = ({
  src,
  name,
  email,
  date,
  userId,
}: {
  src: string;
  name: string;
  email: string;
  date: string;
  userId: string;
}) => {
  return (
    <div className="flex flex-col gap-4 shadow-md p-4 bg-card rounded-md">
      <div className="self-start flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <Link href={`/dashboard/user?id=${userId}`}>
            <CldImg
              src={src}
              alt="Player"
              className="rounded-full border size-[5rem]"
            />
          </Link>

          <div className="flex flex-col gap-2">
            <Link
              className="text-base font-bold tracking-wide truncate w-48"
              href={`/dashboard/user?id=${userId}`}
            >
              {name}
            </Link>

            <Icontext icon={MailIcon}>{email}</Icontext>
            <Icontext icon={Clock3Icon}>
              Since <b>{date}</b>
            </Icontext>
          </div>
        </div>
      </div>
      <div className="self-end flex items-center gap-4">
        <CancelSuspensionButton userId={userId} />
        <DeleteUserButton userId={userId} />
      </div>
    </div>
  );
};

export default SuspendedUserCard;
