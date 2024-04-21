"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import CardWrapper from "@/components/contacts/card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/contacts/formError";
import { FormSuccess } from "@/components/contacts/formSucces";

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    console.log(values);
    const {email, message} = values;
    alert(`Email: ${email}\nMessage: ${message}`);
  }

  return (
    <section id="contact" className="h-full flex justify-center items-center space-y-4 py-[100px] border-slate-500/[0.5] px-8">
      <CardWrapper headerLabel="Please contact me directly through form" >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message here "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message="" />
            <FormSuccess message="" />
            <Button type="submit" size={"lg"} className="w-full bg-primary hover:bg-white hover:text-black dark:hover:text-black  dark:text-white">
              Send message
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </section>
  );
};

export default ContactForm;
