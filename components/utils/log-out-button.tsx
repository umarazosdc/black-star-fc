"use client";
import { signOut } from "next-auth/react";
import { LogOutIcon } from "lucide-react";
import React from "react";

const LogOutButton = () => {
  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    signOut();
  };

  return (
    <form onSubmit={(e) => handleLogout(e)}>
      <button className="flex gap-2 items-center text-sm" type="submit">
        <LogOutIcon />
        <span>Logout</span>
      </button>
    </form>
  );
};

export default LogOutButton;
