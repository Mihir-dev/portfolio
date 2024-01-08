"use client";
import React from "react";
import { motion } from "framer-motion";

const BgCircle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="hidden absolute xl:flex justify-center items-center -top-3 -z-10"
    >
      <div className="absolute border -z-10 border-[#706969] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border -z-10 border-[#706969] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border -z-10 border-[#706969] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      {/* <div className="absolute border border-[#DFDFDE] rounded-full h-[700px] w-[700px] mt-52 opacity-20 animate-pulse" /> */}
      <div className="absolute border -z-10 border-[#706969] rounded-full h-[800px] w-[800px] mt-52  animate-ping" />
    </motion.div>
  );
};

export default BgCircle;
