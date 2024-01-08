"use client";
import React from "react";

import { FaPaperPlane } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";

const SubmitBtnTwo = ({ setMessageState, setMailState }) => {
  const handleReset = () => {
    setMailState("");
    setMessageState("");
  };

  return (
    <>
      <div className="hidden sm:flex items-center justify-between pr-2 mt-1">
        <button
          type="submit"
          className="group hidden sm:flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
        >
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </>
        </button>

        <div className="">
          <div
            className="group sm:flex items-center justify-center  p-4  bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-950"
            onClick={handleReset}
          >
            <FaArrowRotateRight className="text-sm opacity-70 transition-all group-hover:rotate-180 group-hover:scale-110" />
          </div>
        </div>
      </div>

      <div className="sm:hidden flex item-center justify-center">
        <button
          type="submit"
          className="group mt-2 flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900   text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
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

export default SubmitBtnTwo;

// bg-gray-900
