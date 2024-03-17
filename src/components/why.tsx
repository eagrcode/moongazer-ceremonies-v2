"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Moon from "../../public/assets/images/Moon_White.png";

export default function why() {
  return (
    <section className="flex w-full px-4 py-16 bg-brand-light">
      <div className="flex flex-col w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative flex flex-col gap-8 text-secondary/90"
        >
          <div className="flex w-20 opacity-20 self-center">
            <Image src={Moon} alt={""} style={{ height: "auto", width: "100%" }} />
          </div>
          <h2 className="font-dancing text-4xl font-semibold text-secondary self-center">
            Why Choose a Celebrant?
          </h2>
          <p>
            When you choose a celebrant, you have the freedom to hold your ceremony anywhere and at
            any time. You can choose to include symbolic elements like hand fasting, write your own
            vows and promises which reflect your personalities. Your celebrant will guide you along
            the way, making your day as unique as you are.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
