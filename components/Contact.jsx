"use client";

import React, { useState } from "react";
import SubmitBtn from "./SubmitBtn";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtnTwo from "./SubmitBtnTwo";
import toast from "react-hot-toast";

const Contact = () => {
  const [mailState, setMailState] = useState();
  const [messageState, setMessageState] = useState();

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Contact Me
      </h2>
      <p className="text-gray-700 -mt-6 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mthotam@gmail.com">
          mthotam@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          try {
            await sendEmail(formData);
            toast.success("Successfully sent!");
          } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
          }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={mailState}
          onChange={(e) => setMailState(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 "
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={messageState}
          onChange={(e) => setMessageState(e.target.value)}
        />
        <SubmitBtnTwo
          setMailState={setMailState}
          setMessageState={setMessageState}
        />
      </form>
    </motion.section>
  );
};

export default Contact;
