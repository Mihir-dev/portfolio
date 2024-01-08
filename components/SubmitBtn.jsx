"use client";
import React from "react";

import { FaPaperPlane } from "react-icons/fa";

const SubmitBtn = ({}) => {
  return (
    <>
      <button
        type="submit"
        className="group mt-2 hidden sm:flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#3F2305] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
      >
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      </button>
      <div className="sm:hidden flex item-center justify-center">
        <button
          type="submit"
          className="group mt-2 flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#B99470]  text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
        >
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </>
        </button>
      </div>
    </>
  );
};

export default SubmitBtn;

// bg-gray-900
