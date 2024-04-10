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
              I'm passionate about creating unforgettable moments tailored just for you. Whether
              it's guiding families through honouring their loved ones or bringing wedding dreams to
              life, I'm here to make it happen. From intimate gatherings to grand celebrations,
              whether indoors or surrounded by nature's beauty, I'll ensure every detail is just
              right. With a background in project and event management, I bring organisation and
              attention to detail to every ceremony.
            </p>
            <p>
              When I'm not crafting those special moments, you'll find me exploring the outdoors
              with my partner in our campervan, enjoying walks, sailing, and live music gigs. If
              you're planning a celebration or need help with a meaningful eulogy, I'd be honoured
              to work with you. Let's turn your visions into reality and create memories to cherish.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
