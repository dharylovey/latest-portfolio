import * as z from "zod";
import { ContactSchema } from "@/schema";
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export const onSubmit = async (values: z.infer<typeof ContactSchema>) => {
  try {
    const { email, message } = values;
    const data = { email, message };
    console.log(data);
    resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'mdhar1487@gmail.com',
      subject: 'Contact Form Submission',
      text: 'Hello, World!',
    })
  } catch (error) {
    return Response.json({
      error: 'Error sending email',
    })
  }
};

//not working
