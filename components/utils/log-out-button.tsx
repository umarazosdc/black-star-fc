"use client";
import { logout } from "@/lib/actions";
import { LogOutIcon } from "lucide-react";
import React from "react";

const LogOutButton = () => {
  return (
    <form action={logout}>
      <button className="flex gap-2 items-center text-sm" type="submit">
        <LogOutIcon />
        <span>Logout</span>
      </button>
    </form>
  );
};

export default LogOutButton;
