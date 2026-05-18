// src/components/ceremony-cards.tsx
// Changes from current:
//  - Adds a "From £X" pricing badge above the title (surfaces pricing
//    from the buried "included" list)
//  - Adds a short tagline per ceremony
//  - Keeps existing s3 images, framer-motion intro, Button component
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Funeral, Renewal, Commitment, Naming } from "@/lib/s3StaticImages";
import { motion } from "framer-motion";

const ceremonies = [
  {
    id: 1,
    title: "Funeral",
    tag: "A celebration of life",
    from: "From £235",
    img: Funeral,
    path: "/funeral",
    alt: "funeral",
  },
  {
    id: 2,
    title: "Naming",
    tag: "Welcome a new arrival",
    from: "From £250",
    img: Naming,
    path: "/naming",
    alt: "naming",
  },
  {
    id: 3,
    title: "Vow Renewal",
    tag: "Relive the love",
    from: "From £300",
    img: Renewal,
    path: "/renewal",
    alt: "renewal",
  },
  {
    id: 4,
    title: "Commitment",
    tag: "Committed in love & life",
    from: "From £450",
    img: Commitment,
    path: "/commitment",
    alt: "commitment",
  },
];

export default function CeremonyCards() {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full text-secondary"
    >
      {ceremonies.map((item) => (
        <div
          key={item.id}
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
              href={item.path}
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
