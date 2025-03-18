const UserSidebarSkeleton = () => (
  <div className="flex items-center gap-4 w-full">
    <div className="rounded-full size-10 bg-gray-300 animate-pulse"></div>
    <div className="flex flex-col gap-1 w-full">
      <div className="w-32 h-4 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-40 h-3 bg-gray-200 animate-pulse rounded"></div>
    </div>
  </div>
);

export default UserSidebarSkeleton;
