import React from "react";
import PlayerImage from "./player-image";
import Link from "next/link";
import Age from "./age";
import { cn } from "@/lib/utils";
import Tag from "./tag";

const RequestedPlayerCard = ({
  src,
  position,
  name,
  age,
  className,
  id,
  isRequested,
  ...props
}: {
  src: string;
  position: string;
  name: string;
  age: number;
  id: string;
  isRequested: boolean;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div>
      <div
        className={cn(
          "shadow-md rounded-md bg-card border-t border-r flex flex-col gap-2 p-3 text-secondary select-none w-full  flex-shrink-0",
          className
        )}
        {...props}
      >
        <Link href={`/explore/player?id=${id}`}>
          <PlayerImage src={src} position={position} />
        </Link>
        <div className="flex flex-col gap-2">
          <Link href={`/explore/player?id=${id}`}>
            <h2 className="font-bold text-sm">{name}</h2>
          </Link>
          <Age age={age} className="self-end" />
        </div>
        <Tag
          tag={isRequested ? "Accepted" : "Pending"}
          className={cn(
            "text-primary",
            isRequested ? "bg-emerald-400" : "bg-orange-500"
          )}
        />
      </div>
    </div>
  );
};

export default RequestedPlayerCard;
