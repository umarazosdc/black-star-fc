import { auth } from "@/auth";
import AdminBottomNavigationBar from "@/components/admin/admin-bottom-navigation-bar";
import { redirect } from "next/navigation";
import React from "react";

const AdminDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();

  if (session?.user.role !== "admin") redirect("/unauthorized");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow mt-6 px-4 overflow-y-auto pb-2">
        {children}
      </main>
      <AdminBottomNavigationBar />
    </div>
  );
};

export default AdminDashboardLayout;
