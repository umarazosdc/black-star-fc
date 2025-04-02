"use client";
import { cn } from "@/lib/utils";
import { addNewPlayers } from "@/lib/validations";
import React from "react";
import { toast } from "sonner";

const DoneButton = ({ className }: { className?: string | undefined }) => {
  const handleAddNewPlayers = async () => {
    const toastId = toast.loading("Adding player...");

    await addNewPlayers().then((data) => {
      if (data.error) {
        toast.error(data.error, { id: toastId });
      } else {
        toast.success(data.success, { id: toastId });
      }
    });
  };
  return (
    <button className={cn(className)} onClick={handleAddNewPlayers}>
      Done
    </button>
  );
};

export default DoneButton;
