// src/components/why.tsx
// Changes from current:
//  - 4 distinct icons (was 1 flower + 3 hearts)
//  - Each item is now a card with icon-in-circle + title + body copy
//  - Removes the JumpImage from inside this section (move/keep separately
//    if you still want it elsewhere — see homepage page.tsx)
"use client";

import { motion } from "framer-motion";
import { TbWorld } from "react-icons/tb";
import { GiFeather, GiSpotedFlower } from "react-icons/gi";
import { LuCompass } from "react-icons/lu";

const items = [
  {
    Icon: TbWorld,
    title: "Anytime, anywhere",
    body: "Held in the place that matters to you — no church or registry restrictions.",
  },
  {
    Icon: GiFeather,
    title: "Your words, your story",
    body: "Every script is written specifically for you and the people you love.",
  },
  {
    Icon: GiSpotedFlower,
    title: "Completely bespoke",
    body: "Ritual, music, readings, symbols — chosen and shaped together.",
  },
  {
    Icon: LuCompass,
    title: "Guided every step",
    body: "Calm, organised support from first chat through to the day itself.",
  },
];

export default function Why() {
  return (
    <section className="flex w-full justify-center bg-brand-primary py-[2px] text-secondary">
      <div className="flex flex-col items-center justify-center w-full bg-primary/90 gap-8 md:gap-12 p-6 sm:p-8 md:p-12 lg:p-16">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-12 items-center w-full max-w-screen-xl"
        >
          {/* TITLE */}
          <div className="flex w-full justify-center items-center text-center gap-2 sm:gap-4">
            <div className="hidden sm:block h-[1px] w-full bg-brand-primary max-w-[80px] md:max-w-[150px]"></div>
            <h2 className="font-dancing text-3xl md:text-4xl font-bold text-center whitespace-normal">
              Why Choose a Celebrant?
            </h2>
            <div className="hidden sm:block h-[1px] w-full bg-brand-primary max-w-[80px] md:max-w-[150px]"></div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {items.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col gap-3 p-5 md:p-6 bg-primary rounded-md border border-secondary/10"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-primary/15 text-brand-primary">
                  <Icon size={24} />
                </span>
                <h3 className="font-poppins font-semibold text-base text-secondary tracking-wide">
                  {title}
                </h3>
                <p className="text-sm text-secondary/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
