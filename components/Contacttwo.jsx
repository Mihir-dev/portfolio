"use client";

import React, { useState } from "react";
import SubmitBtn from "./SubmitBtn";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { FaPaperPlane } from "react-icons/fa";

import Email from "@/components/Email";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const Contacttwo = () => {
  const [mailState, setMailState] = useState();
  const [messageState, setMessageState] = useState();

  const handleSubmit = async () => {
    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "gojosaturo56@gmail.com",
        subject: "Message from contact form",
        text: messageState,
        reply_to: mailState,
        react: React.createElement(Email, {
          message: messageState,
          senderEmail: messageState,
        }),
      });

      setMailState("");
      setMessageState("");
    } catch (err) {
      console.log(err);
    }
  };

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
        action={async (formData) => await sendEmail(formData)}
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
        <>
          <button
            type="submit"
            className="group mt-2 hidden sm:flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#3F2305] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
            onSubmit={handleSubmit}
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
              onSubmit={handleSubmit}
            >
              <>
                Submit{" "}
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
              </>
            </button>
          </div>
        </>
      </form>
    </motion.section>
  );
};

export default Contacttwo;
