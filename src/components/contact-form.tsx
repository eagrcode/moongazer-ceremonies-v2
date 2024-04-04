"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useFormRHF } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import sendEmail from "../../lib/sendEmail";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const FormSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().min(1, { message: "Please enter your email address" }).email(),
  ceremony: z.string().min(1, { message: "Please select a ceremony" }),
  message: z
    .string()
    .min(10, { message: "Please describe your request using a minimum of 10 characters" }),
});

const select = ["Wedding", "Naming", "Renewal", "Commitment", "Funeral"];

export default function ContactForm() {
  const [resetKey, setResetKey] = useState(0);
  const { toast } = useToast();

  const form = useFormRHF<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      ceremony: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    const res = await sendEmail(data);

    if (res.success) {
      toast({
        title: `${res.message}`,
        description: (
          <div className="flex flex-col gap-2 mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <div>
              <p className="font-semibold">Name</p>
              <p>{data.fullName}</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>{data.email}</p>
            </div>
            <div>
              <p className="font-semibold">Ceremony</p>
              <p>{data.ceremony}</p>
            </div>
            <div>
              <p className="font-semibold">Message</p>
              <p>{data.message}</p>
            </div>
          </div>
        ),
      });
    } else {
      toast({
        title: `${res.message}`,
        description: (
          <div className="flex flex-col gap-2 mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <div>
              <p>Please try again</p>
            </div>
          </div>
        ),
      });
    }

    form.reset();
    setResetKey((prevKey) => prevKey + 1);
  }

  return (
    <div className="flex w-full max-w-screen-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} method="post" className="flex flex-col w-full">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                {error && <FormMessage>{error?.message}</FormMessage>}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ceremony"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormLabel>Ceremony</FormLabel>
                <Select
                  key={resetKey}
                  onValueChange={field.onChange}
                  defaultValue={field.value || ""}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Which ceremony are you enquiring about?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Ceremonies</SelectLabel>
                      {select.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe your enquiry"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button className="mt-4 w-full" size="lg" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
