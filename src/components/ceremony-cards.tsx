"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Wedding, Funeral, Renewal, Commitment, Naming } from "@/lib/s3StaticImages";
import { motion } from "framer-motion";

export default function CeremonyCards() {
  const ceremonies = [
    // {
    //   id: 1,
    //   title: "Wedding",
    //   img: Wedding,
    //   path: "/wedding",
    //   alt: "wedding",
    // },
    {
      id: 2,
      title: "Renewal",
      img: Renewal,
      path: "/renewal",
      alt: "renewal",
    },
    {
      id: 3,
      title: "Commitment",
      img: Commitment,
      path: "/commitment",
      alt: "commitment",
    },
    {
      id: 4,
      title: "Naming",
      img: Naming,
      path: "/naming",
      alt: "naming",
    },
    {
      id: 5,
      title: "Funeral",
      img: Funeral,
      path: "/funeral",
      alt: "funeral",
    },
  ];

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-center w-full gap-4 text-secondary md:flex-row"
    >
      {ceremonies.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col w-full max-w-[700px] items-center rounded-md shadow-lg ${index % 2 === 0 ? "bg-primary" : "bg-secondary/5"}`}
        >
          <div className="flex w-full flex-1 rounded-tl-md rounded-tr-md overflow-hidden">
            <Image
              src={item.img}
              alt={item.alt}
              height={300}
              width={450}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="flex-1 flex flex-col w-full h-full gap-8 text-center items-center justify-center py-8 px-4 bg-primary/10 rounded-br-md rounded-bl-md shadow-lg">
            <h3 className="text-secondary">{item.title}</h3>
            <p>A ceremony that reflects your love story</p>
            <Button asChild size="sm" className="bg-brand-primary">
              <Link aria-label={`Learn more about ${item.title} ceremonies`} href={item.path}>
                {`Learn More >`}
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
