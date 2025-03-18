"use client";
import React from "react";
import Button from "../utils/button";
import { toast } from "sonner";
import { removeUserById } from "@/lib/database/queries";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const DeleteUserButton = ({
  userId,
  className,
}: {
  userId: string;
  className?: string | undefined;
}) => {
  const router = useRouter();

  const handleUserDeletion = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const toastId = toast.loading("Deleting user...");
    try {
      await removeUserById(userId);
      router.refresh();
      toast.success("Delete user.", { id: toastId });
    } catch (error) {
      console.log("Failed to delete user", error);
      toast.error("Failed to delete user", { id: toastId });
    }
  };
  return (
    <Button
      className={cn(className)}
      style={{ background: "red" }}
      onClick={(e) => handleUserDeletion(e)}
    >
      Delete
    </Button>
  );
};

export default DeleteUserButton;
