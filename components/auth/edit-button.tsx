import React from "react";
import Button from "../utils/button";
import EditPlayerAlertDialog from "../admin/edit-player-alertdialog";
import { Player, Stats } from "@prisma/client";

const EditButton = ({ player, playerStats }: { player: Player, playerStats: Stats }) => {
  return (
    <EditPlayerAlertDialog player={player} playerStats={playerStats}>
      <Button className="bg-secondary text-primary">Edit</Button>
    </EditPlayerAlertDialog>
  );
};

export default EditButton;
