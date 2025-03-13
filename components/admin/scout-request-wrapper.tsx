import React from "react";
import Wrapper from "../utils/wrapper";
import ScoutRequest from "./scout-request";
import ScoutRequestsSkeleton from "../skeleton/scout-requests-skeleton";

const ScoutRequestWrapper = () => {
  return (
    <Wrapper title="Who requested for players">
      <div className="flex flex-col gap-3 overflow-auto max-h-[25rem] rounded-md shadow-md border border-secondary">
        <React.Suspense fallback={<ScoutRequestsSkeleton />}>
          <ScoutRequest />
        </React.Suspense>
      </div>
    </Wrapper>
  );
};

export default ScoutRequestWrapper;
