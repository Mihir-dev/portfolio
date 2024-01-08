"use client";
import Image from "next/image";
import React, { useState } from "react";
import profile from "../public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import BgCircle from "./BgCircle";
import toast from "react-hot-toast";

const Introtwo = () => {
  const [bgbtn, setBgbtn] = useState();
  const handleSubmit = () => {
    toast.success("Button Success");
  };
  return (
    <section className="mb-28 max-w-[40rem] text-center sm:mb-0 ">
      <div className="flex items-center justify-center relative">
        <BgCircle />
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profile}
              alt="profile"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-44 w-44 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-7 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey, I'm Mihir Thotam.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> and{" "}
        <span className="font-bold">competetive coder</span>. I love{" "}
        <span className="font-bold">solving problems</span> and{" "}
        <span className="font-bold">designing beautiful applications</span>.
      </motion.p>

      <motion.div
        className="hidden sm:flex  flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white hover:text-[#3F2305]  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
          href="/resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-[#3F2305] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack "
          href="https://www.linkedin.com/in/mihir-thotam-5ba2111b9/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-[#3F2305] active:scale-105 transition cursor-pointer borderBlack "
          href="https://github.com/Mihir-dev"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>

      <motion.div
        className=" sm:hidden flex flex-row sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack "
          href="/resume.pdf"
          download
        >
          <HiDownload />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack "
          href="https://www.linkedin.com/in/mihir-thotam-5ba2111b9/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack "
          href="https://github.com/Mihir-dev"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Introtwo;
