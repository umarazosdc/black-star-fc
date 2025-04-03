import React from "react";

const AdminDashboardSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      <header className="flex flex-col gap-4">
        <p className="h-4 w-1/3 rounded-md bg-secondary opacity-25" />

        <div className="flex items-center gap-4">
          <div className="h-10 w-full rounded-md bg-secondary opacity-25" />
          <div className="size-10 rounded-full bg-secondary opacity-25" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 2 }, (_, i) => (
            <div
              className="w-full aspect-square rounded-md flex flex-col gap-2 justify-center items-center bg-secondary opacity-25"
              key={i}
            />
          ))}
        </div>
      </header>

      <div className="flex flex-col gap-6">
        {Array.from({ length: 3 }, (_, i) => (
          <div className="flex flex-col space-y-3 w-full" key={i}>
            <div className="h-5 w-2/5 rounded-md bg-secondary opacity-25" />
            <div className="self-start w-full">
              <div className="flex flex-col gap-3 overflow-auto max-h-[25rem] rounded-md">
                <div className="flex flex-col gap-3">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div
                      className="rounded-md w-full h-32 bg-secondary opacity-25"
                      key={i}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardSkeleton;
