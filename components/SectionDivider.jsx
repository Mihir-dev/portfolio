"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    // <motion.div
    //   className="bg-gray-400/20 my-20 h-16 w-1 rounded-full hidden sm:block "
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ delay: 0.125 }}
    // ></motion.div>

    <motion.hr
      className="border-dotted border-x-0 border-b-0 border-4 border-gray-500 m-auto w-20 my-28 hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.hr>

    // Dotted Line
  );
};

export default SectionDivider;
