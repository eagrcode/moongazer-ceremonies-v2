"use client";

import Link from "next/link";
import Image from "next/image";
import { ceremonyCards } from "@/lib/site-links";
import { motion } from "framer-motion";

export default function CeremonyCards() {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full text-secondary"
    >
      {ceremonyCards.map((item) => (
        <div
          key={item.href}
          className="flex flex-col w-full rounded-md shadow-md bg-primary overflow-hidden border border-secondary/10"
        >
          <div className="flex w-full aspect-[4/3] overflow-hidden">
            <Image
              src={item.img}
              alt={item.alt}
              height={300}
              width={450}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          <div className="flex flex-col gap-2 p-5 md:p-6 bg-primary/10">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-brand-primary font-semibold">
              {item.from}
            </span>
            <h3 className="text-secondary font-dancing text-2xl md:text-3xl leading-none">
              {item.title}
            </h3>
            <em className="text-xs sm:text-sm text-secondary/70">{item.tag}</em>
            <Link
              aria-label={`Learn more about ${item.title} ceremonies`}
              href={item.href}
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-primary hover:underline"
            >
              {`Learn more →`}
            </Link>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
