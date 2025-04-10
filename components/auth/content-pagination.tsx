import Link from "next/link";
import React from "react";

const ContentPagination = ({
  icon: Icon,
  path,
  name,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
  name: string;
}) => {
  return (
    <Link
      href={path}
      className="flex items-center gap-2 text-sm py-1.5 pl-2 rounded-md"
    >
      <Icon />
      <p>{name}</p>
    </Link>
  );
};

export default ContentPagination;
