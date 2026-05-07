"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Jump } from "@/lib/s3StaticImages";
import { FaHeart } from "react-icons/fa";
import { GiSpotedFlower } from "react-icons/gi";
import JumpImage from "./jump";

export default function why() {
  return (
    <section className="flex w-full justify-center bg-brand-primary py-[2px] text-brand-primary">
      <div className="flex flex-col items-center justify-center w-full bg-primary/90 gap-16 md:p-16">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col p-4 gap-8 items-center w-full justify-center"
        >
          {/* TITLE */}
          <div className="flex w-full justify-center items-center text-center gap-2">
            <div className="h-[1px] w-full bg-brand-primary max-w-[150px]"></div>
            <h2 className="font-dancing text-4xl font-bold">Why Choose a Celebrant?</h2>
            <div className="h-[1px] w-full bg-brand-primary max-w-[150px]"></div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center w-full max-w-[900px] sm:flex-row sm:max-w-none gap-8 text-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <GiSpotedFlower size={50} />
              <p className="text-brand-primary/90">Anytime, Anywhere</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <FaHeart size={50} />
              <p className="text-brand-primary/90"> Your words, your story</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <FaHeart size={50} />
              <p className="text-brand-primary/90">Completely bespoke</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <FaHeart size={50} />
              <p className="text-brand-primary/90">Guided every step</p>
            </div>
          </div>
        </motion.div>
        <JumpImage />
      </div>
    </section>
  );
}
