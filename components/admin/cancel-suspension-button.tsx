"use client";
import React from "react";
import Button from "../utils/button";
import { toast } from "sonner";
import { unSuspendUser } from "@/lib/database/queries";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const CancelSuspensionButton = ({
  userId,
  className,
}: {
  userId: string;
  className?: string | undefined;
}) => {
  const router = useRouter();

  const handleSuspensionCancelation = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    const toastId = toast.loading("Lifting user suspension...");

    try {
      await unSuspendUser(userId);
      router.refresh();
      toast.success("Lifted user suspension.", { id: toastId });
    } catch (error) {
      console.log("Failed to lift user suspension", error);
      toast.error("Failed to lift user suspension.", { id: toastId });
    }
  };

  return (
    <Button
      className={cn(className)}
      style={{ background: "#201315" }}
      onClick={(e) => handleSuspensionCancelation(e)}
    >
      Continue
    </Button>
  );
};

export default CancelSuspensionButton;
