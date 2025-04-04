"use client";
import React from "react";
import Button from "../utils/button";
import { toast } from "sonner";
import { suspendUser } from "@/lib/database/queries";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const SuspendUserButton = ({
  userId,
  className,
}: {
  userId: string;
  className?: string | undefined;
}) => {
  const router = useRouter();

  const handleUserSuspension = async () => {
    const toastId = toast.loading("Suspending user...");
    try {
      await suspendUser(userId, 3);
      router.refresh();
      toast.success("Suspended user.", { id: toastId });
    } catch (error) {
      console.log("Failed to suspend user", error);
      toast.error("Failed to suspend user.", { id: toastId });
    }
  };
  return (
    <Button
      className={cn(className)}
      style={{ background: "#201315" }}
      onClick={handleUserSuspension}
    >
      Suspend
    </Button>
  );
};

export default SuspendUserButton;
