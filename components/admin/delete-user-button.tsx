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

  const handleUserDeletion = async () => {
    try {
      await removeUserById(userId);
      router.refresh();
      toast.success("Delete user.");
    } catch (error) {
      console.log("Failed to delete user", error);
      toast.error("Failed to delete user");
    }
  };
  return (
    <Button
      className={cn(className)}
      style={{ background: "red" }}
      onClick={handleUserDeletion}
    >
      Delete
    </Button>
  );
};

export default DeleteUserButton;
