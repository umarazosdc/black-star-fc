import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import NewPlayersForm from "../explore/new-players-form";

const NewPlayerAlertDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-h-[35rem] overflow-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>Add new player</AlertDialogTitle>
          <AlertDialogDescription>
            Enter all the neccesary player&apos;s details
          </AlertDialogDescription>
        </AlertDialogHeader>
        <NewPlayersForm />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NewPlayerAlertDialog;
