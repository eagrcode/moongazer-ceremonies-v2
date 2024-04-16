import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact - MoonGazer Ceremonies",
  description: "Get in touch to start planning your ceremony.",
  alternates: {
    canonical: "https://moongazerceremonies.co.uk/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="relative flex w-full flex-col items-center">
      <section className="flex flex-col items-center bg-primary text-secondary w-full text-4xl">
        <h1 className="mt-[75px]">Get in touch</h1>
        <ContactForm />
      </section>
    </main>
  );
}
