import React from "react";
import { FaTwitter } from "react-icons/fa";

const TwitterButton = () => {
  return (
    <form className="w-full">
      <button className="flex justify-center items-center w-full bg-card text-sky-500 h-14 rounded-md shadow-md">
        <FaTwitter size={23} />
      </button>
    </form>
  );
};

export default TwitterButton;
