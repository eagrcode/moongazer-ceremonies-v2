import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { HareWhite } from "@/lib/s3StaticImages";
import { FaCheck } from "react-icons/fa";

type PriceItem = {
  label: string;
  price: string;
  note?: string;
};

type DescriptionType = {
  introduction: string[];
  additionalSections?: { title: string; content: string[] }[];
};

type PropTypes = {
  title: string;
  tag: string;
  description: DescriptionType;
  included: string[];
  pricing: PriceItem[];
  ctaCopy?: string;
};

const Section = ({ title, content }: { title: string; content: string[] }) => (
  <div className="flex flex-col gap-3 mt-6">
    <div className="flex items-center gap-3">
      <span className="block w-7 h-px bg-brand-primary" />
      <h3 className="font-dancing text-2xl md:text-3xl font-bold leading-tight text-secondary">
        {title}
      </h3>
    </div>
    {content.map((p, i) => (
      <p key={i} className="text-[15px] leading-relaxed text-secondary/75">
        {p}
      </p>
    ))}
  </div>
);

export default function Ceremony({
  title,
  tag,
  description,
  included,
  pricing,
  ctaCopy,
}: PropTypes) {
  const lastWord = title.split(" ").slice(-1)[0];
  const restOfTitle = title.split(" ").slice(0, -1).join(" ");

  return (
    <div className="w-full bg-primary text-secondary pt-[75px]">
      {/* HEADER */}
      <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 pt-12 md:pt-16 pb-4">
        <div className="w-full max-w-screen-xl flex flex-col gap-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] md:text-xs tracking-[0.12em] uppercase text-secondary/60">
            <Link href="/#ceremonies" className="hover:text-brand-primary transition-colors">
              Ceremonies
            </Link>
            <span>/</span>
            <span className="text-secondary font-semibold">{title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-[11px] md:text-xs uppercase tracking-[0.24em] text-brand-primary font-semibold">
                Ceremony
              </span>
              <h1 className="font-dancing font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
                {restOfTitle && <span>{restOfTitle} </span>}
                <span className="text-brand-primary">{lastWord}</span>
              </h1>
              <em className="text-base md:text-lg text-secondary/70">{tag}</em>
            </div>
            <div className="hidden md:flex flex-shrink-0">
              <div
                className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-brand-primary flex items-center justify-center"
                style={{ boxShadow: "0 18px 40px -15px rgba(77,175,206,0.55)" }}
              >
                <Image
                  src={HareWhite}
                  alt="Hare mark"
                  width={64}
                  height={64}
                  className="w-14 h-14 lg:w-16 lg:h-16"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-secondary/10 mt-6" />
        </div>
      </section>

      {/* BODY — narrative + sticky sidebar */}
      <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 pt-10 pb-16 md:pb-20">
        <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">
          {/* LEFT — narrative */}
          <article className="flex flex-col gap-6">
            <span className="text-[11px] uppercase tracking-[0.24em] text-brand-primary font-semibold">
              About this ceremony
            </span>
            {description.introduction.map((p, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed text-secondary">
                {p}
              </p>
            ))}
            {description.additionalSections?.map((sec, i) => (
              <Section key={i} title={sec.title} content={sec.content} />
            ))}
          </article>

          {/* RIGHT — sticky sidebar */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
            {/* Pricing card — navy */}
            <div className="relative overflow-hidden bg-secondary text-primary rounded-2xl p-7 md:p-8 shadow-md flex flex-col gap-5">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-primary/20 blur-2xl pointer-events-none" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-brand-primary font-semibold relative z-10">
                Investment
              </span>
              <div className="flex flex-col gap-4 relative z-10">
                {pricing.map((p, i) => (
                  <div
                    key={i}
                    className={`flex items-baseline justify-between pb-3 ${
                      i === pricing.length - 1 ? "" : "border-b border-primary/10"
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 pr-3 min-w-0">
                      <span className="text-sm font-semibold tracking-wide">{p.label}</span>
                      {p.note && <span className="text-xs text-primary/55">{p.note}</span>}
                    </div>
                    <span className="font-dancing font-bold text-2xl md:text-3xl text-brand-primary leading-none whitespace-nowrap">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-brand-primary text-primary hover:bg-brand-primary/90 relative z-10"
              >
                <Link href="/contact">Book a free consultation</Link>
              </Button>
              <span className="text-xs text-primary/55 text-center relative z-10">
                No obligation · usually within 24 hrs
              </span>
            </div>

            {/* Included */}
            <div className="bg-primary2 rounded-2xl p-6 md:p-7 flex flex-col gap-4 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.24em] text-brand-primary font-semibold">
                {`What's included`}
              </span>
              <ul className="flex flex-col gap-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary/15 text-brand-primary mt-0.5">
                      <FaCheck size={10} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Whisper */}
            <div className="text-sm text-secondary/70 leading-relaxed px-1">
              <p>
                Prefer to talk first? Email{" "}
                <a
                  href="mailto:contact@moongazerceremonies.co.uk"
                  className="text-brand-primary font-semibold break-all hover:underline"
                >
                  contact@moongazerceremonies.co.uk
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FINAL CTA PANEL */}
      <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-24">
        <div className="w-full max-w-screen-xl bg-primary2 rounded-2xl p-8 md:p-12 lg:p-14 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center shadow-sm">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-[0.24em] text-brand-primary font-semibold">
              Next step
            </span>
            <h2 className="font-dancing font-bold text-4xl md:text-5xl leading-tight">
              {`Let's talk about `}
              <span className="text-brand-primary">{title.toLowerCase()}</span>.
            </h2>
            <p className="text-sm md:text-base text-secondary/75 leading-relaxed max-w-md mx-auto md:mx-0">
              {ctaCopy ||
                `Every ceremony begins with a quiet, no-obligation conversation. I'd be honoured to help you shape yours.`}
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-sm mx-auto md:mx-0 md:ml-auto">
            <Button
              asChild
              size="lg"
              className="w-full bg-brand-primary text-primary hover:bg-brand-primary/90"
            >
              <Link href="/contact">Book a free consultation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full">
              <Link href="/#ceremonies">See other ceremonies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
