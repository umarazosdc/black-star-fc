import React from "react";
import CldImg from "@/components/utils/cldimg";
import Link from "next/link";

const ImageDisplayCard = ({
  src,
  alt,
  id,
  isUser,
}: {
  src: string;
  alt: string;
  id: string;
  isUser?: boolean;
}) => {
  return (
    <Link
      href={isUser ? `/dashboard/user?id=${id}` : `/explore/player?id=${id}`}
    >
      <CldImg src={src} alt={alt} className="rounded-md shadow-md" />
    </Link>
  );
};

export default ImageDisplayCard;
