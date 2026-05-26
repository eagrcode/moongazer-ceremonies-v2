import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { AromaWorkshop, Aromatherapy, Workshop2 } from "@/lib/s3StaticImages";
import { FaLeaf, FaRegCommentDots } from "react-icons/fa";
import { GiWaterDrop, GiFlowerPot, GiMoon } from "react-icons/gi";
import { PiHandHeart } from "react-icons/pi";
import { HiArrowRight } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Remedies & Rituals - MoonGazer Ceremonies",
  alternates: {
    canonical: "https://moongazerceremonies.co.uk/remedies-rituals",
  },
};

export default function RemediesRitualsPage() {
  const expect = [
    {
      Icon: PiHandHeart,
      title: "Guided demonstrations",
      body: "Of selected Neal's Yard Remedies products and how to use them.",
    },
    {
      Icon: GiWaterDrop,
      title: "Hands-on with oils",
      body: "Supported, sensory exploration of essential oils and blends.",
    },
    {
      Icon: FaLeaf,
      title: "Seasonal wellbeing",
      body: "Practical guidance you can carry into daily life.",
    },
    {
      Icon: FaRegCommentDots,
      title: "Time to talk",
      body: "A relaxed pace with space for questions and conversation.",
    },
  ];

  const workshops = [
    {
      Icon: GiWaterDrop,
      title: "Essential oils for everyday wellbeing",
      body: "Build a small everyday kit and learn how to use it confidently.",
    },
    {
      Icon: FaLeaf,
      title: "Seasonal self-care practices",
      body: "Tune into the rhythm of the year with simple, supportive rituals.",
    },
    {
      Icon: GiMoon,
      title: "Creating simple home rituals",
      body: "Bring small moments of pause and intention into your home.",
    },
    {
      Icon: PiHandHeart,
      title: "Natural support during change",
      body: "Gentle wellbeing tools for transition, grief and reset.",
    },
    {
      Icon: GiFlowerPot,
      title: "Small group gatherings",
      body: "Welcoming sessions for friends, families and private circles.",
    },
  ];

  return (
    <main className="relative flex w-full flex-col items-center bg-primary text-secondary">
      {/* HERO — editorial 2-col with image grid */}
      <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 pt-20 md:pt-32 pb-12 md:pb-16">
        <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-5 text-center lg:text-left order-2 lg:order-1 min-w-0">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] text-brand-primary font-semibold">
              {`Neal's Yard Workshops · South Lincs & Cambridgeshire`}
            </span>
            <h1 className="font-dancing font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[0.95] break-words">
              Remedies <span className="text-brand-primary">&</span> Rituals
            </h1>
            <p className="text-base md:text-lg text-secondary/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {`Small, welcoming Neal's Yard Remedies workshops — calm, practical and sensory sessions that support seasonal wellbeing and simple, everyday self-care.`}
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mt-2 justify-center lg:justify-start lg:items-stretch xl:items-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-primary rounded-md w-full sm:w-auto lg:w-full xl:w-auto"
              >
                <Link href="/contact">Enquire about a workshop</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto lg:w-full xl:w-auto rounded-md"
              >
                <a
                  href="https://uk.nyrorganic.com/shop/deerobinson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  {`Visit Neal's Yard`} <HiArrowRight size={14} />
                </a>
              </Button>
            </div>
          </div>

          {/* Image grid — wide feature + 2 squares */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 w-full max-w-md mx-auto lg:max-w-none">
            <div className="col-span-2 relative aspect-[2/1] rounded-xl overflow-hidden bg-primary2 shadow-sm">
              <Image
                src={AromaWorkshop}
                alt="Aromatherapy workshop in progress"
                fill
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-primary2 shadow-sm">
              <Image
                src={Aromatherapy}
                alt="Essential oils and botanicals"
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 14rem, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-primary2 shadow-sm">
              <Image
                src={Workshop2}
                alt="Hands-on workshop session"
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 14rem, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="w-full max-w-screen-xl flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold">
              In each workshop
            </span>
            <h2 className="font-dancing text-4xl md:text-5xl font-bold">What to expect</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {expect.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3 p-6 rounded-xl bg-primary2 shadow-sm">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-primary/15 text-brand-primary">
                  <Icon size={22} />
                </span>
                <h3 className="font-poppins font-semibold text-base text-secondary">{title}</h3>
                <p className="text-sm text-secondary/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm md:text-base text-secondary/70 leading-relaxed max-w-3xl">
            {`In some sessions, you'll also create your own simple blends or small ritual items to take home — something practical to continue using beyond the workshop. There's no pressure to buy. The focus is on understanding, experience and confident, everyday use.`}
          </p>
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="w-full flex justify-center bg-primary2 px-4 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start md:items-center">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold">
              My approach
            </span>
            <h2 className="font-dancing text-4xl md:text-5xl font-bold">
              Grounded, practical, calm
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed">
              {`As an independent Neal's Yard Remedies consultant, I combine product knowledge with a grounded understanding of wellbeing and life's natural rhythms.`}
            </p>
            <p className="text-base text-secondary/75 leading-relaxed">
              {`My background in aromatherapy, holistic therapies and counselling informs how I guide each session. Workshops are thoughtfully structured, well-organised and relaxed — offering both information and space to reflect.`}
            </p>
            <p className="font-dancing text-2xl md:text-3xl text-brand-primary mt-2 leading-snug">
              Practical tools that support calm, balance and seasonal awareness.
            </p>
          </div>
        </div>
      </section>

      {/* THEMED WORKSHOPS */}
      <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="w-full max-w-screen-xl flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold">
                Themes
              </span>
              <h2 className="font-dancing text-4xl md:text-5xl font-bold">
                Seasonal & themed workshops
              </h2>
            </div>
            <p className="text-sm text-secondary/70 max-w-xs md:text-right">
              Held across South Lincolnshire and Cambridgeshire — private bookings welcome.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {workshops.map(({ Icon, title, body }, i) => {
              return (
                <div
                  key={title}
                  className={`flex flex-col gap-3 p-6 rounded-xl shadow-sm bg-primary2`}
                >
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary/15 text-brand-primary`}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="font-poppins font-semibold text-base leading-snug">{title}</h3>
                  <p className={`text-sm leading-relaxed text-secondary/70`}>{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOIN OR HOST CTA */}
      <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-24">
        <div className="w-full max-w-screen-xl bg-secondary text-primary rounded-2xl px-6 sm:px-10 md:px-14 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold">
              Join or host
            </span>
            <h2 className="font-dancing text-4xl md:text-5xl font-bold leading-tight">
              Bring a workshop home.
            </h2>
            <p className="text-sm md:text-base text-primary/75 leading-relaxed max-w-md mx-auto md:mx-0">
              {`Whether you'd like to attend an upcoming session or host a small group in your own home, I'd love to hear from you.`}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild size="lg" className="bg-brand-primary w-full rounded-md">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full border-primary/30 text-primary hover:bg-primary/10 rounded-md"
            >
              <a
                href="https://uk.nyrorganic.com/shop/deerobinson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                {`Visit my Neal's Yard shop`} <HiArrowRight size={14} />
              </a>
            </Button>
            <span className="text-xs text-primary/50 text-center mt-1">
              uk.nyrorganic.com/shop/deerobinson
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
