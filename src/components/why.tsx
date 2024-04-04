"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Jump } from "@/lib/s3StaticImages";

export default function why() {
  return (
    <section className="flex w-full justify-center bg-secondary">
      <div className="flex flex-col items-center w-full max-w-screen-lg">
        <div className="flex flex-col-reverse items-center gap-16">
          <motion.div
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full md:min-w-96 self-start rounded-sm grayscale"
          >
            <Image
              className="opacity-90 shadow-lg"
              src={Jump}
              alt={"Groom & best-men jumping"}
              width={1920}
              height={1080}
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
