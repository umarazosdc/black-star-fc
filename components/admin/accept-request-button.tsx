"use client";
import React from "react";
import Button from "../utils/button";
import { acceptRequest } from "@/lib/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AcceptRequestButton = ({
  userId,
  playerId,
  playerName,
}: {
  userId: string;
  playerId: string;
  playerName: string;
}) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleAcceptRequest = async () => {
    const toastId = toast.loading("Accepting request...");

   if (isLoading) return; // Prevent multiple clicks
   setIsLoading(true);

    try {
      await acceptRequest(userId, playerId, playerName);
      router.refresh();
      toast.success("Successfully accepted request", { id: toastId });
    } catch (error) {
      console.log("Failed to accept ", error);
      toast.error("Failed to accept request", { id: toastId });
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <Button
      className="bg-emerald-500 text-primary"
      onClick={handleAcceptRequest}
      aria-disabled={isLoading}
    >
      Accept
    </Button>
  );
};

export default AcceptRequestButton;
