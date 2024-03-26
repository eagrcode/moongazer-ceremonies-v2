"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Moon from "../../public/assets/images/Hare_Navy.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageGrid from "./image-grid";

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

export default function Testimonials() {
  return (
    <section className="flex gap-8 w-full justify-center bg-secondary text-primary">
      <div className="flex flex-col gap-8 items-center justify-center w-full max-w-screen-lg">
        <div className="relative flex w-full max-w-screen-md">
          <Swiper
            className="items-center"
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center justify-center text-center gap-4 md:text-2xl">
                  <em>
                    <q>{item.text}</q>
                  </em>
                  <p className="opacity-50">- {item.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex w-8 absolute bottom-4 right-4">
            <Image src={Moon} alt={""} style={{ height: "auto", width: "100%" }} />
          </div>
        </div>

        <ImageGrid />
      </div>
    </section>
  );
}
