"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { HareNavy } from "@/lib/s3StaticImages";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageGrid from "./image-grid";
import { motion } from "framer-motion";
import { IoIosStar } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 0,
    text: `Dee shows empathy and sensitivity in all she does, and her life experience helps to guide people through both happy and sad times. I can’t imagine anyone better suited to the role of a celebrant, and would thoroughly recommend her services.`,
    author: `J. Maddern`,
  },
  {
    id: 1,
    text: `Personally, I couldn’t think of a more lovely person to act as a celebrant at a wedding, nor a more empathetic, sensitive or caring person to conduct a funeral. She truly guides those around her through life with wisdom and love.`,
    author: `S. Macdonald`,
  },
  {
    id: 2,
    text: `Amazing service. You really helped me before, during and after our special day. Can’t recommend highly enough.`,
    author: `V. Fraser`,
  },
  {
    id: 3,
    text: `We would highly recommend Dee to anyone we know; she really made the effort to get to know us as much as possible and to make sure that we were completely happy with everything.`,
    author: `Nick & Laura`,
  },
];

const starsCount = 5;

const renderStars = () => {
  const stars = [...Array(starsCount)].map((_, index) => (
    <div key={index} className="flex">
      <IoIosStar size={25} className="text-primary-brand" />
    </div>
  ));

  return stars;
};

export default function Testimonials() {
  return (
    <section className="flex gap-8 w-full justify-center bg-brand-primary text-secondary py-[2px]">
      <div className="flex w-full bg-primary/90 justify-center">
        <div className="flex flex-col gap-4 items-center justify-center w-full max-w-screen-lg md:p-4">
          {/* STARS */}
          <div className="flex gap-4 justify-center text-brand-primary">{renderStars()}</div>

          {/* TESTIMONIALS */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative flex w-full max-w-screen-md items-center justify-center"
          >
            <Swiper
              className="items-center justify-center"
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="flex items-center justify-center">
                  <div className="flex flex-col items-center justify-between text-center gap-4 md:text-xl h-[200px] md:h-[150px]">
                    <div className="flex flex-1 items-center">
                      <em>
                        <q>{item.text}</q>
                      </em>
                    </div>
                    <p className="opacity-50">- {item.author}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
