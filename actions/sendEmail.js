"use server";

import Email from "@/components/Email";
import React from "react";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "gojosaturo56@gmail.com",
    subject: "Message from contact form",
    text: message,
    reply_to: senderEmail,
    react: React.createElement(Email, {
      message: message,
      senderEmail: senderEmail,
    }),
  });
};
