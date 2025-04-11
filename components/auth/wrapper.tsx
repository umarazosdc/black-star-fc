import Link from "next/link";
import React from "react";
import Img from "../utils/image";

const Wrapper = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="h-screen md:h-fit flex flex-col items-center justify-center bg-card px-4 md:px-0 w-full">
      <div className="flex flex-col items-center justify-center gap-6 text-center bg-primary rounded-md p-4 w-full">
        <div className="relative size-16">
          <Img src="/imgs/logo/logo.jpg" alt="Logo" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center w-11/12">
          <h1 className="text-base font-bold">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <main className="w-full">{children}</main>
        <Link href="/login" className="text-sm">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default Wrapper;
