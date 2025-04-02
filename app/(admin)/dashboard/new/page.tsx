import { auth } from "@/auth";
import AddPlayerCard from "@/components/admin/add-player-card";
import DoneButton from "@/components/admin/done-button";
import NewPlayerAlertDialog from "@/components/admin/new-player-alertdialog";
import GridWrappers from "@/components/utils/grid-wrappers";
import { getPreUploadedPlayers } from "@/lib/database/queries";
import { PlusIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const AddNewPlayersPage = async () => {
  const session = await auth();
  const user = session?.user;

  const players = await getPreUploadedPlayers();

  if (user?.role !== "admin") redirect("/unauthorized");

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="self-start flex items-center justify-between w-full">
        <h2 className="font-bold text-base">Add player</h2>
        <DoneButton className="text-accent text-xs"/>
      </div>
      <main className="flex flex-col gap-3 pb-1">
        <GridWrappers>
          {players.map((player, key) => (
            <AddPlayerCard
              name={player.firstname + " " + player.lastname}
              age={player.dob}
              position={player.position}
              key={key}
              statImg={player.image}
            />
          ))}
          <NewPlayerAlertDialog>
            <button className="shadow-md rounded-md bg-card flex justify-center items-center min-h-72">
              <PlusIcon className="text-accent size-40" />
            </button>
          </NewPlayerAlertDialog>
        </GridWrappers>
        <footer className="flex justify-end mt-8">
          <DoneButton className="bg-accent text-primary py-2.5 px-6 text-sm rounded-md" />
        </footer>
      </main>
    </div>
  );
};

export default AddNewPlayersPage;
