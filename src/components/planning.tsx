"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { PlanningList } from "@/lib/s3StaticImages";

export default function Planning() {
  return (
    <section className="flex w-full justify-center bg-brand-primary text-primary">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col gap-8 items-center w-full max-w-screen-lg md:flex-row-reverse md:items-start"
      >
        <div className="flex w-full max-w-96 opacity-90">
          <Image
            src={PlanningList}
            alt={"Wedding list"}
            width={350}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="flex flex-col gap-4 text-center items-center md:text-left md:items-start">
          <h2>Planning</h2>
          <p>
            Whatever your vision, I will work with you to create the ceremony of your dreams.
            Organising special moments in your life should be enjoyable, with minimal stress, and
            communication is an important way to reduce any anxieties.
          </p>
          <p>
            I will always be available to you by email, at the end of a phone, video calls and for
            extra meetings to help put your mind at ease, so you enjoy the process of creating your
            perfect day.
          </p>
          <Button size="lg">Contact Me</Button>
        </div>
      </motion.div>
    </section>
  );
}
