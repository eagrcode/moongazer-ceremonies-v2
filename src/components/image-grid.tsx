"use client";

import Image from "next/image";
import { Grid1, Grid2, Grid3, Grid4 } from "@/lib/s3StaticImages";
import { motion } from "framer-motion";

const images = [
  {
    id: 0,
    img: Grid1,
    alt: "barn wedding",
  },
  {
    id: 1,
    img: Grid2,
    alt: "girl & flowers",
  },
  {
    id: 2,
    img: Grid3,
    alt: "mother & baby",
  },
  {
    id: 3,
    img: Grid4,
    alt: "wedding cake",
  },
];

const imageElement = images.map((img, index) => (
  <motion.div
    viewport={{ once: true }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
    key={index}
    className="rounded-sm border-2 border-brand-primary/20 shadow-md"
  >
    <Image
      className="rounded-sm grayscale ease-in duration-200 hover:grayscale-0"
      src={img.img}
      alt={img.alt}
      width={300}
      height={300}
      style={{ objectFit: "contain" }}
    />
  </motion.div>
));

export default function ImageGrid() {
  return <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">{imageElement}</div>;
}
