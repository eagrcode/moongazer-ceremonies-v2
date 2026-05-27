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
          <Title />
          <Cards />
        </motion.div>
      </div>
    </section>
  );
}

function Title() {
  return (
    <div className="flex w-full justify-center items-center text-center gap-2 sm:gap-4">
      <div className="hidden sm:block h-[1px] w-full bg-brand-primary max-w-[80px] md:max-w-[150px]"></div>
      <h2 className="font-dancing text-3xl md:text-4xl font-bold text-center whitespace-normal">
        Why Choose a Celebrant?
      </h2>
      <div className="hidden sm:block h-[1px] w-full bg-brand-primary max-w-[80px] md:max-w-[150px]"></div>
    </div>
  );
}

function Card({ Icon, title, body }: { Icon: React.ElementType; title: string; body: string }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center max-w-sm">
      <Icon className="text-4xl md:text-5xl text-brand-primary" />
      <h3 className="font-semibold text-xl md:text-2xl">{title}</h3>
      <p className="text-secondary/90">{body}</p>
    </div>
  );
}

function Cards() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full justify-center items-center">
      {items.map((item, index) => (
        <Card key={index} Icon={item.Icon} title={item.title} body={item.body} />
      ))}
    </div>
  );
}
