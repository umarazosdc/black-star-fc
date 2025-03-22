import AddPlayerCard from "@/components/admin/add-player-card";
import DoneButton from "@/components/admin/done-button";
import NewPlayerAlertDialog from "@/components/admin/new-player-alertdialog";
import GridWrappers from "@/components/utils/grid-wrappers";
import SectionWrapper from "@/components/utils/section-wrapper";
import { getPreUploadedPlayers } from "@/lib/database/queries";
import { PlusIcon } from "lucide-react";
import React from "react";

const AddNewPlayersPage = async () => {
  const players = await getPreUploadedPlayers();

  return (
    <SectionWrapper title="Add player" link="#" label="Done">
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
        <DoneButton />
      </footer>
    </SectionWrapper>
  );
};

export default AddNewPlayersPage;
