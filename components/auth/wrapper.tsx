import Link from "next/link";
import React from "react";

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
    <div className="flex flex-col items-center justify-center gap-6 bg-primary p-4 rounded-md">
      <div className="flex flex-col items-center justify-center gap-2 text-center w-11/12">
        <h1 className="text-base font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <main>{children}</main>
      <Link href="/login" className="text-sm">Back to Login</Link>
    </div>
  );
};

export default Wrapper;
