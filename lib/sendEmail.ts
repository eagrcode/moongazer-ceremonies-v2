"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SubmissionData = {
  fullName: string;
  email: string;
  ceremony: string;
  message: string;
};

export default async function sendEmail(
  data: SubmissionData
): Promise<{ success: boolean; message: string }> {
  try {
    const res = await resend.emails.send({
      from: "MoonGazer Ceremonies Contact Form <onboarding@resend.dev>",
      to: "elliot.robinson92@gmail.com",
      subject: `New Message from ${data.fullName}`,
      html: `
      <strong>Name: </strong><p>${data.fullName}</p>
      <strong>Email: </strong><p>${data.email}</p>
      <strong>Ceremony: </strong><p>${data.ceremony}</p>
      <strong>Message: </strong><p>${data.message}</p>
      `,
    });

    if (!res.error && res.data?.id) {
      console.log("Email sent successfully", res);
      return { success: true, message: "Successfully sent message!" };
    } else {
      console.error("Failed to send email", res);
      return { success: false, message: "Problem sending message!" };
    }
  } catch (error: any) {
    console.error(error.message);
    return { success: false, message: "Problem executing task!" };
  }
}
