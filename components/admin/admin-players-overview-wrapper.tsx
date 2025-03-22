import React from "react";
import SectionWrapper from "../utils/section-wrapper";
import PlayersOverview from "./players-overview";
import AdminPlayersSkeleton from "../skeleton/admin-players-skeleton";

const AdminPlayersOverviewWrapper = () => {
  return (
    <SectionWrapper
      title="Players"
      label="Add player"
      link="/ad/dashboard/new"
    >
      <div className="flex flex-col gap-3 overflow-auto max-h-[25rem] rounded-md shadow-md border border-secondary">
        <React.Suspense fallback={<AdminPlayersSkeleton />}>
          <PlayersOverview />
        </React.Suspense>
      </div>
    </SectionWrapper>
  );
};

export default AdminPlayersOverviewWrapper;
