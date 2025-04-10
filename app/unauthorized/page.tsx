"use client";
import { ChevronLeftIcon, LockIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const UnauthorizedPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full h-screen gap-6 p-4">
      <ChevronLeftIcon
        className="self-start text-accent rounded-md"
        // size={24}
        strokeWidth={3}
        onClick={() => router.back()}
      />
      <div className="self-center flex flex-col items-center justify-center gap-6 h-full">
        <div className="flex flex-col gap-3">
          <span className="text-4xl font-bold text-center">403</span>
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-bold text-center">
              Access Denied/Forbidden
            </h1>
            <p className="text-center text-sm text-muted-foreground">
              The page you were trying to reach is absolutely forbidden for some
              reason
            </p>
          </div>
        </div>
        <LockIcon className="size-[8rem] opacity-80" />
      </div>
    </div>
  );
};

export default UnauthorizedPage;
