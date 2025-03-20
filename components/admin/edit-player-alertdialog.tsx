import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import EditPlayerForm from "../auth/edit-player-form";
import { Player, Stats } from "@prisma/client";

const EditPlayerAlertDialog = ({
  children,
  player,
  playerStats,
}: {
  children: React.ReactNode;
  player: Player;
  playerStats: Stats;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-h-[35rem] overflow-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>Edit player</AlertDialogTitle>
          <AlertDialogDescription>Make your changes</AlertDialogDescription>
        </AlertDialogHeader>
        <EditPlayerForm player={player} playerStats={playerStats} />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditPlayerAlertDialog;
