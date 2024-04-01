"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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

const FormSchema = z.object({
  fullName: z.string({
    required_error: "Please enter your name.",
  }),
  email: z
    .string({
      required_error: "Please enter your email address.",
    })
    .email(),
  ceremony: z.string({
    required_error: "Please choose a ceremony.",
  }),
  message: z.string({
    required_error: "Please describe your request.",
  }),
});

const select = ["Wedding", "Naming", "Renewal", "Commitment", "Funeral"];

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      ceremony: "",
      message: "",
    },
  });

  const { toast } = useToast();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    toast({
      title: "Thank you for your message!",
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
          <p className="font-semibold">I will get back to you asap</p>
        </div>
      ),
    });

    form.reset();
  }

  return (
    <div className="flex w-full max-w-screen-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ceremony"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ceremony</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
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
                    placeholder="Please describe your enquiry"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
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
