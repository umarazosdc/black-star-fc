import { cn } from "@/lib/utils";
import React from "react";

const SearchDisplayer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) => {
  return (
    <main className={cn("grid grid-cols-2 gap-4 md:grid-cols-4", className)}>
      {children}
    </main>
  );
};

export default SearchDisplayer;
