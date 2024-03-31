import ContactForm from "@/components/contact-form";
import React from "react";

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
