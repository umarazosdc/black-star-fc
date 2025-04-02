"use client";
import React from "react";
import Button from "../homepage/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { sendRequest } from "@/lib/actions/create";

const RequestPlayerButton = ({
  userId,
  playerId,
  playerName,
  playerPosition,
  userName,
}: {
  userId: string;
  playerId: string;
  playerName: string;
  playerPosition: string;
  userName: string;
}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const router = useRouter();

  const handleRequestPlayer = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);

    const toastId = toast.loading("Requesting for player...");
    try {
      await sendRequest(playerId, playerName, playerPosition, userId, userName);
      router.refresh();
      toast.success("Successfully sent a request", { id: toastId });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, { id: toastId });
      } else {
        toast.error("An unknown error occurred", { id: toastId });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      className="bg-accent text-primary w-full"
      onClick={handleRequestPlayer}
      disabled={isLoading}
    >
      {isLoading ? "Requesting..." : "Request for Player"}
    </Button>
  );
};

export default RequestPlayerButton;
