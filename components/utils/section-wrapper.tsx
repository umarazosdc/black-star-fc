import Link from "next/link";
import React from "react";

const SectionWrapper = ({
  title,
  link,
  label,
  children,
}: {
  title: string;
  link: string;
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="self-start flex items-center justify-between w-full">
        <h2 className="font-bold text-base">{title}</h2>
        <Link href={link} className="text-xs text-accent">
          {label}
        </Link>
      </div>
      <main className="flex items-center gap-3 overflow-x-auto pb-1 flex-nowrap">
        {children}
      </main>
    </div>
  );
};

export default SectionWrapper;
