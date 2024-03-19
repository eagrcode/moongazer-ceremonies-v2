"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Moon from "../../public/assets/images/Hare_White.png";
import Jump from "../../public/assets/images/Jump cropped.jpg";

export default function why() {
  return (
    <section className="flex w-full justify-center px-4 py-28 bg-secondary md:px-12">
      <div className="flex flex-col items-center w-full max-w-screen-lg">
        <div className="flex flex-col-reverse items-center gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex flex-col gap-8 items-center text-primary"
          >
            <div className="flex flex-col gap-2 text-center">
              <h2 className="font-dancing text-4xl font-bold">Why Choose a Celebrant?</h2>
              <em className="text-primary/60">explore the benefits</em>
            </div>
            <div className="flex flex-col w-full max-w-80 sm:flex-row sm:max-w-none gap-4 text-center">
              <p className="px-4 py-8 rounded-sm flex-1 bg-primary/10">
                When you choose a celebrant, you have the freedom to hold your ceremony anywhere and
                at any time
              </p>
              <p className="px-4 py-8 rounded-sm flex-1 bg-primary/10">
                You can choose to include symbolic elements like hand fasting, write your own vows
                and promises which reflect your personalities
              </p>
              <p className="px-4 py-8 rounded-sm flex-1 bg-primary/10">
                Your celebrant will guide you along the way, making your day as unique as you are
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full md:min-w-96 self-start rounded-sm"
          >
            <Image
              className="opacity-90 shadow-md"
              src={Jump}
              alt={"Dee Robinson - Celebrant"}
              style={{ height: "auto", width: "100%" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
