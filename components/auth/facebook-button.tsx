import React from "react";
import { FaFacebook } from "react-icons/fa";

const FacebookButton = () => {
  return (
    <form className="w-full">
      <button className="flex justify-center items-center w-full bg-card text-blue-500 h-14 rounded-md shadow-md">
        <FaFacebook size={23} />
      </button>
    </form>
  );
};

export default FacebookButton;
