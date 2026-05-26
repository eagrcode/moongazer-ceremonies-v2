import ContactForm from "@/components/contact-form";
import Image from "next/image";
import type { Metadata } from "next";
import { HareWhite } from "@/lib/s3StaticImages";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact - MoonGazer Ceremonies",
  description: "Get in touch to start planning your ceremony.",
  alternates: {
    canonical: "https://moongazerceremonies.co.uk/contact",
  },
};

export default function ContactPage() {
  const channels = [
    {
      Icon: HiMail,
      label: "Email",
      value: "hello@moongazerceremonies.co.uk",
      href: "mailto:hello@moongazerceremonies.co.uk",
    },
    {
      Icon: HiPhone,
      label: "Phone",
      value: "07700 900 000",
      href: "tel:+447700900000",
    },
    {
      Icon: HiLocationMarker,
      label: "Based in",
      value: "South Lincolnshire & Cambridgeshire",
    },
  ];

  return (
    <main className="relative flex w-full flex-col items-center bg-primary text-secondary pt-[75px]">
      {/* HEADER */}
      <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="w-full max-w-screen-xl flex flex-col items-center text-center gap-4">
          <span className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold">
            Say hello
          </span>
          <h1 className="font-dancing text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95]">
            Get in <span className="text-brand-primary">touch</span>
          </h1>
          <p className="text-base md:text-lg text-secondary/75 max-w-xl leading-relaxed">
            {`Whether you're planning ahead or simply curious about the process, I'd love to hear from you. Every conversation starts gently and without obligation.`}
          </p>
        </div>
      </section>

      {/* SPLIT — info left, form right */}
      <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-24">
        <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
          {/* LEFT — info card */}
          <aside className="relative flex flex-col gap-8 bg-secondary text-primary rounded-2xl p-8 md:p-10 shadow-md overflow-hidden">
            {/* Decorative accent circle */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand-primary/20 blur-2xl pointer-events-none" />
            <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center shadow-lg z-10">
              <Image
                src={HareWhite}
                alt="Hare mark"
                width={36}
                height={36}
                className="w-9 h-9"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-[11px] uppercase tracking-[0.22em] text-brand-primary font-semibold">
                A free consultation
              </span>
              <h2 className="font-dancing text-3xl md:text-4xl font-bold leading-tight">
                {`Let's start with a chat.`}
              </h2>
              <p className="text-sm md:text-base text-primary/70 leading-relaxed">
                {`Fill in the form and I'll come back to you, usually within 24 hours. Or reach out directly using any of the details below.`}
              </p>
            </div>

            <ul className="flex flex-col gap-5 relative z-10 min-w-0">
              {channels.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 min-w-0">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary/20 text-brand-primary">
                    <Icon size={18} />
                  </span>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-primary/50 font-semibold">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm md:text-base hover:text-brand-primary transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm md:text-base">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-primary/10 relative z-10">
              <span className="text-[11px] uppercase tracking-[0.22em] text-primary/50 font-semibold">
                Follow along
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/moongazerceremonies"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-brand-primary hover:text-secondary transition-colors"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="https://www.instagram.com/moongazerceremonies"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-brand-primary hover:text-secondary transition-colors"
                >
                  <FaInstagram size={15} />
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT — form card */}
          <div className="flex flex-col gap-6 bg-primary2 rounded-2xl p-8 md:p-10 shadow-md">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-[0.22em] text-brand-primary font-semibold">
                Enquiry form
              </span>
              <h2 className="font-dancing text-3xl md:text-4xl font-bold">Tell me a little</h2>
              <p className="text-sm text-secondary/70">
                {`The more you share, the more I can tailor my reply — but a short note is just as welcome.`}
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-24">
        <div className="w-full max-w-screen-xl flex flex-col items-center text-center gap-3">
          <p className="font-dancing text-2xl md:text-3xl text-brand-primary leading-snug max-w-2xl">
            {`Every ceremony begins with a single conversation — I'd be honoured to share yours.`}
          </p>
        </div>
      </section>
    </main>
  );
}
