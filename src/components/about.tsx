"use client";

import Image from "next/image";
// import Dee from "../../public/assets/images/dee-robinson-celebrant.png";
import { motion } from "framer-motion";
import Moon from "../../public/assets/images/Hare_Navy.png";
import { Dee } from "../lib/s3StaticImages";

export default function about() {
  return (
    <section id="about" className="flex w-full justify-center bg-primary">
      <div className="flex flex-col items-center w-full max-w-screen-lg">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full max-w-96 md:min-w-72 self-start"
          >
            <Image
              className="shadow-md"
              src={Dee}
              alt={"Dee Robinson - Celebrant"}
              style={{ objectFit: "contain" }}
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex flex-col gap-4 text-secondary"
          >
            <div className="flex justify-between">
              <h2 className="font-dancing text-4xl font-bold">About Me</h2>
            </div>
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
