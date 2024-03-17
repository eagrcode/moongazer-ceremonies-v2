"use client";

import Image from "next/image";
import Dee from "../../public/assets/images/dee-robinson-celebrant.jpg";
import { motion } from "framer-motion";

export default function about() {
  return (
    <section className="flex w-full px-4 py-16 bg-brand-light">
      <div className="flex flex-col w-full max-w-lg">
        <div className="flex flex-col items-center gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full max-w-64"
          >
            <Image
              src={Dee}
              alt={"Dee Robinson - Celebrant"}
              style={{ height: "auto", width: "100%" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex flex-col gap-2 text-secondary"
          >
            <h2 className="font-dancing text-4xl font-semibold">About Me</h2>
            <p>
              Although there is no formal requirement for a celebrant to undertake accredited
              training, it was really important to me, as a lifelong learner, to hone my craft and
              be able to carry out ceremonies to the absolute best of my ability.
            </p>
            <p>
              I want my families and couples to feel that they are in safe hands. I trained with the
              only OFSTED accredited provider Civil Ceremonies Limited and am fully insured.
            </p>
            <p>
              I only book one ceremony per day, so I will be dedicated just to you and your
              ceremony. This means that your ceremony can be any day of the week and it can be at
              any time of the day!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
