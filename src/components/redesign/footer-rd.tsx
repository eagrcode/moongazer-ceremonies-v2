import Link from "next/link";
import Image from "next/image";
import { FCC, GCC, CCL, GFB, MoonBlack, NYLogo } from "@/lib/s3StaticImages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordian-footer";

export default function Footer() {
  const links = {
    discover: [
      { path: "/", title: "Home" },
      { path: "/#about", title: "About" },
      { path: "/remedies-rituals", title: "Remedies & Rituals" },
      { path: "/contact", title: "Contact" },
    ],
    ceremony: [
      { path: "/funeral", title: "Funeral" },
      { path: "/naming", title: "Naming" },
      { path: "/renewal", title: "Vow Renewal" },
      { path: "/commitment", title: "Commitment" },
    ],
    social: [
      { path: "https://www.facebook.com/moongazerceremonies", title: "Facebook" },
      { path: "https://www.instagram.com/moongazerceremonies", title: "Instagram" },
    ],
  };

  const renderList = (items: { path: string; title: string }[], external = false) =>
    items.map((link, i) => (
      <li key={i}>
        <Link
          href={link.path}
          target={external ? "_blank" : undefined}
          aria-label={`Link to ${link.title}`}
          className="text-primary/70 hover:text-brand-primary transition-colors"
        >
          {link.title}
        </Link>
      </li>
    ));

  return (
    <footer className="flex w-full justify-center bg-secondary text-primary">
      <div className="flex flex-col w-full max-w-screen-xl gap-10 md:gap-12">
        {/* TOP — brand + nav columns */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-12">
          {/* BRAND BLOCK */}
          <div className="flex flex-col gap-5 md:max-w-sm">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-9 opacity-90">
                <Image
                  alt="MoonGazer mark"
                  src={MoonBlack}
                  height={50}
                  width={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="font-dancing text-2xl font-bold">MoonGazer Ceremonies</p>
            </div>
            <em className="text-xs leading-relaxed text-primary/70 text-center md:text-left not-italic">
              Serving as a funeral celebrant in{" "}
              <strong className="text-primary">Cambridgeshire</strong>,{" "}
              <strong className="text-primary">Lincolnshire</strong>, and surrounding areas. Proudly
              offering bespoke, compassionate ceremonies tailored to your needs.
            </em>
            {/* Accreditation badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <div className="w-12 bg-primary/95 rounded-md p-1.5 flex items-center justify-center">
                <Image
                  src={GCC}
                  alt="GCC badge"
                  height={50}
                  width={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-12 bg-primary/95 rounded-md p-1.5 flex items-center justify-center">
                <Image
                  src={GFB}
                  alt="As seen on Guides for Brides"
                  height={50}
                  width={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-24 bg-primary/95 rounded-md p-1.5 flex items-center justify-center">
                <Image
                  src={CCL}
                  alt="CCL certification"
                  height={50}
                  width={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-12 bg-primary/95 rounded-md p-1.5 flex items-center justify-center">
                <Image
                  src={FCC}
                  alt="FCC certification"
                  height={50}
                  width={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-12 bg-primary/95 rounded-md p-1.5 flex items-center justify-center">
                <Image
                  src={NYLogo}
                  alt="Neal's Yard Remedies independent consultant"
                  height={50}
                  width={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          {/* MOBILE NAV (accordions) */}
          <div className="md:hidden">
            <nav className="flex flex-col gap-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="d">
                  <AccordionTrigger>Discover</AccordionTrigger>
                  <AccordionContent asChild>
                    <ul className="flex flex-col gap-3 pt-3 text-sm">
                      {renderList(links.discover)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="c">
                  <AccordionTrigger>Ceremonies</AccordionTrigger>
                  <AccordionContent asChild>
                    <ul className="flex flex-col gap-3 pt-3 text-sm">
                      {renderList(links.ceremony)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="s">
                  <AccordionTrigger>Social</AccordionTrigger>
                  <AccordionContent asChild>
                    <ul className="flex flex-col gap-3 pt-3 text-sm">
                      {renderList(links.social, true)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </nav>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-16 text-sm">
            <nav className="flex flex-col gap-3">
              <h2 className="font-poppins font-semibold text-[11px] uppercase tracking-[0.18em] text-brand-primary mb-1">
                Discover
              </h2>
              <ul className="flex flex-col gap-2">{renderList(links.discover)}</ul>
            </nav>
            <nav className="flex flex-col gap-3">
              <h2 className="font-poppins font-semibold text-[11px] uppercase tracking-[0.18em] text-brand-primary mb-1">
                Ceremonies
              </h2>
              <ul className="flex flex-col gap-2">{renderList(links.ceremony)}</ul>
            </nav>
            <nav className="flex flex-col gap-3">
              <h2 className="font-poppins font-semibold text-[11px] uppercase tracking-[0.18em] text-brand-primary mb-1">
                Social
              </h2>
              <ul className="flex flex-col gap-2">{renderList(links.social, true)}</ul>
            </nav>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-6 border-t border-primary/10 text-xs text-primary/50 text-center md:text-left">
          <span>
            © {new Date().getFullYear()} MoonGazer Ceremonies · Dee Robinson, Independent Celebrant
          </span>
          <span>South Lincolnshire & Cambridgeshire</span>
        </div>
      </div>
    </footer>
  );
}
