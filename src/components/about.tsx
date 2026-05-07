"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dee, HareNavy, Jump } from "../lib/s3StaticImages";
import { Button } from "./ui/button";
import Link from "next/link";
import JumpImage from "./jump";

export default function about() {
  return (
    <section
      id="about"
      className="flex flex-col w-full justify-center items-center bg-primary text-secondary p-16 gap-16"
    >
      {/* TOP */}
      <div className="flex flex-col items-center w-full max-w-screen-lg gap-4">
        {/* Part 1: Image + Introduction */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full flex flex-col gap-8 md:min-w-72"
        >
          <div className="flex-col gap-4 text-center md:text-left flex md:flex-row md:text-left items-center justify-center">
            <div className="flex flex-col w-full gap-4 md:items-start md:justify-center">
              <h2 className="font-dancing text-3xl font-bold w-full md:text-4xl">
                {`Hi, I'm Dee`}
              </h2>
              <p>
                {`I create funeral ceremonies, Neal's Yard–based wellbeing workshops and gentle ritual experiences that are personal, heartfelt and meaningful.`}
              </p>
              <p>{`My focus is always on presence, care and connection — helping people honour life's important moments and find steadiness during times of change.`}</p>
              <div className="flex flex-col justify-center w-full text-sm gap-2 text-secondary/60">
                <div className="flex gap-2 justify-center items-center md:justify-start">
                  <div className="flex w-[15px] gap-2 justify-center">
                    <Image
                      src={HareNavy}
                      alt={"Hare"}
                      height={20}
                      width={20}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <p>Calm supportive guidance</p>
                </div>
                <div className="flex gap-2 justify-center items-center md:justify-start">
                  <div className="flex w-[15px] gap-2 justify-center">
                    <Image
                      src={HareNavy}
                      alt={"Hare"}
                      height={20}
                      width={20}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <p>Fully personalised scripts</p>
                </div>
                <div className="flex gap-2 justify-center items-center md:justify-start">
                  <div className="flex w-[15px] gap-2 justify-center">
                    <Image
                      src={HareNavy}
                      alt={"Hare"}
                      height={20}
                      width={20}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <p>Experienced & caring Celebrant</p>
                </div>
              </div>
              {/* <Button
                asChild
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 hover:text-secondary"
              >
                <Link href="/contact">Contact Me</Link>
              </Button> */}
            </div>
            <Image
              className="shadow-md"
              src={Dee}
              alt={"Dee Robinson - Lincolnshire & Cambridgeshire Funeral Celebrant"}
              style={{ objectFit: "contain", borderRadius: "9999px", maxWidth: "400px" }}
              width={400}
              height={400}
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="font-dancing text-2xl text-center"
        >
          {`If you are looking for a funeral celebrant in South Lincolnshire or Cambridgeshire, I would be honoured to support you.`}
        </motion.p>
      </div>
    </section>
  );
}
