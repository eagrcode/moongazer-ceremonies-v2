"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const quotes = [
  {
    text: "Dee gave us the most beautiful, personal ceremony — every word felt like it was written just for our family.",
    who: "Sarah & James",
    ceremony: "Vow Renewal",
  },
  {
    text: "A calm, gentle hand at the most difficult time. We will be forever grateful for the care she gave us.",
    who: "The Pearson family",
    ceremony: "Funeral",
  },
  {
    text: "She made it ours. Genuinely the kindest, most thoughtful person to guide you through a day like this.",
    who: "Olivia & Tom",
    ceremony: "Commitment",
  },
];

export default function Testimonials() {
  return (
    <section className="flex w-full justify-center bg-primary2 border-y border-secondary/10 py-12 px-6 sm:px-8 md:px-12 lg:px-16">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full max-w-screen-xl"
      >
        {quotes.map((q, i) => (
          <div key={i} className="flex flex-col gap-4 text-secondary">
            <div className="flex gap-1 text-brand-primary">
              {[0, 1, 2, 3, 4].map((s) => (
                <FaStar key={s} size={14} />
              ))}
            </div>
            <p className="text-[15px] leading-relaxed">{q.text}</p>
            <div className="flex flex-col gap-0.5 mt-auto pt-2">
              <span className="text-sm font-semibold tracking-wide">{q.who}</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-secondary/60">
                {q.ceremony}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
