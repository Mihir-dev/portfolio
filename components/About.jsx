"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="about"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        About Me
      </h2>

      <p className="mb-3">
        Born and raised in{" "}
        <span className="font-semibold">Mumbai(Maharastra)</span> , I completed
        my 10th standard with flying colors with{" "}
        <span className="font-semibold">94%</span> and completed my 12th
        standard with <span className=" font-semibold">83%</span>. With a CGPA
        of <span className=" font-semibold">9.87</span>, I completed my degree
        in{" "}
        <span className="font-semibold">
          Bachelor of Engineering in Information Technology
        </span>{" "}
        from prestigious college of Vidyalankar Institute of Technology, Wadala.
        The <span className="font-semibold">problem-solving</span> component of
        programming is my favorite. I adore the satisfaction I get from solving
        an issue at last. My core stack is{" "}
        <span className="font-bold">
          React, Next.js, Node.js, SQL and MongoDB
        </span>{" "}
        . I am also familiar with{" "}
        <span className="font-semibold">Blockchain and Data Analysis</span> .
        I'm constantly trying to learn new technology. I work as a software
        developer for <span className="font-semibold">Reliance Jio Ltd</span> at
        the moment.
      </p>

      <p>
        Outside of programming, I find pleasure in{" "}
        <span className="font-semibold">sports</span> and{" "}
        <span className="font-semibold"> watching movies</span>. Exploring new
        knowledge is a passion, and currently, I'm diving into{" "}
        <span className="font-semibold">history</span> and{" "}
        <span className="font-semibold">cooking</span>.
      </p>
    </motion.section>
  );
};

export default About;
