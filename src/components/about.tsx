"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dee, HareWhite } from "@/lib/s3StaticImages";
import { FaCheck } from "react-icons/fa";

export default function About() {
  const bullets = [
    "Calm supportive guidance",
    "Fully personalised scripts",
    "Experienced & caring Celebrant",
  ];

  return (
    <section
      id="about"
      className="flex flex-col w-full justify-center items-center bg-primary text-secondary p-6 sm:p-8 md:p-12 lg:p-16 gap-12 md:gap-16"
    >
      <div className="flex flex-col items-center w-full max-w-screen-lg gap-4">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full flex flex-col gap-8 md:flex-row md:items-center md:gap-16"
        >
          {/* IMAGE LEFT */}
          <div className="relative flex-shrink-0 mx-auto md:mx-0">
            <Image
              className="shadow-md w-64 h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px]"
              src={Dee}
              alt="Dee Robinson - Lincolnshire & Cambridgeshire Funeral Celebrant"
              style={{ objectFit: "cover", borderRadius: "9999px" }}
              width={400}
              height={400}
            />
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-brand-primary flex items-center justify-center shadow-lg">
              <Image
                src={HareWhite}
                alt="Hare mark"
                width={48}
                height={48}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            <span className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold">
              About
            </span>
            <h2 className="font-dancing text-4xl md:text-5xl font-bold leading-tight">
              {`Hi, I'm Dee`}
            </h2>
            <p>
              {`I create funeral ceremonies, Neal's Yard–based wellbeing workshops and gentle ritual experiences that are personal, heartfelt and meaningful.`}
            </p>
            <p className="text-secondary/70">
              {`My focus is always on presence, care and connection — helping people honour life's important moments and find steadiness during times of change.`}
            </p>

            {/* BULLETS — accent circles with check */}
            <ul className="flex flex-col gap-3 mt-2 w-full">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/15 text-brand-primary">
                    <FaCheck size={12} />
                  </span>
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA — accent color final line */}
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="font-dancing text-2xl md:text-3xl text-center text-brand-primary mt-4"
        >
          {`If you are looking for a funeral celebrant in South Lincolnshire or Cambridgeshire, I would be honoured to support you.`}
        </motion.p>
      </div>
    </section>
  );
}
