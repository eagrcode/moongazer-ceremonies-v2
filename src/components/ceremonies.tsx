"use client";

import { motion } from "framer-motion";
import CeremonyCards from "./ceremony-cards";
import { BsFillChatHeartFill } from "react-icons/bs";

export default function ceremonies() {
  return (
    <section
      id="ceremonies"
      className="flex flex-col w-full justify-center items-center bg-primary text-secondary p-16 gap-16"
    >
      <div className="flex flex-col gap-8 items-center justify-center w-full max-w-screen-xl">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-2 text-center"
        >
          <h2>Ceremonies</h2>
          <em>Learn more about my services</em>
        </motion.div>
        <CeremonyCards />
      </div>

      <div className="flex flex-col w-full justify-evenly items-center text-primary gap-8 p-16 bg-secondary rounded-full text-primary max-w-screen-lg">
        <h2>How It Works</h2>
        <div className="flex w-full justify-evenly items-center">
          <div className="flex flex-col min-w-fit">
            <div className="flex mb-4">
              <BsFillChatHeartFill size={50} />
            </div>
            <p className="text-lg font-semibold">1. Lets Chat</p>
            <p className="text-sm opacity-70 ">Free consultation to get to know you</p>
          </div>
          <div className="flex flex-col min-w-fit">
            <div className="flex mb-4">
              <BsFillChatHeartFill size={50} />
            </div>
            <p className="text-lg font-semibold">2. Plan together</p>
            <p className="text-sm opacity-70">We craft your perfect Ceremony</p>
          </div>
          <div className="flex flex-col min-w-fit">
            <div className="flex mb-4">
              <BsFillChatHeartFill size={50} />
            </div>
            <p className="text-lg font-semibold">3. Your Day</p>
            <p className="text-sm opacity-70">Delivered with care and confidence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
