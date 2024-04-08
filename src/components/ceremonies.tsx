"use client";

import { motion } from "framer-motion";
import CeremonyCards from "./ceremony-cards";

export default function ceremonies() {
  return (
    <section className="flex w-full justify-center bg-primary text-secondary">
      <div className="flex flex-col gap-8 items-center w-full max-w-screen-lg">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-2 text-center"
        >
          <h2>Ceremonies</h2>
          <em>view the services I offer</em>
        </motion.div>
        <CeremonyCards />
      </div>
    </section>
  );
}
