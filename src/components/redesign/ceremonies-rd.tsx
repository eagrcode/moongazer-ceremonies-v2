// src/components/ceremonies.tsx
// Changes from current:
//  - "How It Works" no longer a heavy navy pill — sits on the same bg as
//    the ceremony grid above for visual continuity
//  - Three DISTINCT icons (chat, pen, spark) replace the three hearts
//  - Numbered cyan badges + dashed connecting line for journey feel
//  - Adds a single bottom CTA into /contact
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CeremonyCards from "./ceremony-cards-rd";
import { Button } from "../ui/button";
import { BsFillChatHeartFill } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const steps = [
  {
    Icon: BsFillChatHeartFill,
    title: "Let's chat",
    body: "A free, no-pressure consultation so I can get to know you and the day you have in mind.",
  },
  {
    Icon: FaRegPenToSquare,
    title: "Plan together",
    body: "We craft your script, choose readings, music and any rituals — every detail your own.",
  },
  {
    Icon: HiSparkles,
    title: "Your day",
    body: "I deliver the ceremony with care and confidence, leaving you free to be present.",
  },
];

export default function Ceremonies() {
  return (
    <section
      id="ceremonies"
      className="flex flex-col w-full justify-center items-center bg-primary text-secondary p-6 sm:p-8 md:p-12 lg:p-16 gap-12 md:gap-16"
    >
      {/* Ceremony grid */}
      <div className="flex flex-col gap-8 items-center justify-center w-full max-w-screen-xl">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-2 text-center"
        >
          <span className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold">
            Services
          </span>
          <h2>Ceremonies</h2>
          <em>Learn more about my services</em>
        </motion.div>
        <CeremonyCards />
      </div>

      {/* How It Works — redesigned */}
      <div className="flex flex-col gap-12 items-center justify-center w-full max-w-screen-xl">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-2 text-center"
        >
          <span className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold">
            Process
          </span>
          <h2>How It Works</h2>
          <em>From first conversation to your day</em>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 w-full max-w-4xl">
          {/* Dashed connector behind the badges (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[26px] left-[16.66%] right-[16.66%] border-t-2 border-dashed border-brand-primary/50"
          ></div>

          {steps.map(({ Icon, title, body }, i) => (
            <div key={title} className="flex flex-col items-center text-center gap-4 relative">
              {/* Numbered badge */}
              <span
                className="flex items-center justify-center w-12 h-12 md:w-[54px] md:h-[54px] rounded-full bg-brand-primary text-primary font-dancing font-bold text-xl md:text-2xl z-10"
                style={{ boxShadow: "0 0 0 4px hsl(190 10% 92%), 0 0 0 6px hsl(190 50% 55%)" }}
              >
                {i + 1}
              </span>
              {/* Icon */}
              <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-primary/15 text-brand-primary">
                <Icon className="text-xl md:text-2xl" />
              </span>
              <p className="font-semibold text-secondary tracking-wide text-base md:text-lg">
                {title}
              </p>
              <p className="text-sm text-secondary/70 max-w-[280px] leading-relaxed px-4 md:px-0">
                {body}
              </p>
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="bg-brand-primary rounded-md w-auto">
          <Link href="/contact">Start with a free chat</Link>
        </Button>
      </div>
    </section>
  );
}
