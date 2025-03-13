import React from "react";
import AdminUsersSkeleton from "../skeleton/admin-users-skeleton";
import Wrapper from "../utils/wrapper";
import SuspendedUsersOverview from "./suspended-users-overview";

const SuspendedUserOverviewWrapper = () => {
  return (
    <Wrapper title="Users on suspension">
      <div className="flex flex-col gap-3 overflow-auto max-h-[25rem] rounded-md shadow-md border border-secondary">
        <React.Suspense fallback={<AdminUsersSkeleton />}>
          <SuspendedUsersOverview />
        </React.Suspense>
      </div>
    </Wrapper>
  );
};

export default SuspendedUserOverviewWrapper;
