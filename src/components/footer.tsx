import Link from "next/link";
import { FCC, GCC, CCL } from "@/lib/s3StaticImages";
import Image from "next/image";
import { MoonBlack } from "@/lib/s3StaticImages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordian-footer";

export default function Footer() {
  const links = {
    discover: [
      { path: "/", title: "Home" },
      // { path: "/blog", title: "Blog" },
      { path: "/contact", title: "Contact" },
    ],
    ceremony: [
      { path: "/funeral", title: "Funeral" },
      { path: "/wedding", title: "Wedding" },
      { path: "/naming", title: "Naming" },
      { path: "/renewal", title: "Renewal" },
      { path: "/commitment", title: "Commitment" },
    ],
    social: [
      {
        path: "https://www.facebook.com/moongazerceremonies",
        title: "Facebook",
      },
      { path: "https://www.instagram.com/moongazerceremonies", title: "Instagram" },
    ],
  };

  const renderDiscoverLinks = links.discover.map((link, index) => (
    <li key={index}>
      <Link aria-label={`Link to ${link.title} page`} href={link.path}>
        {link.title}
      </Link>
    </li>
  ));

  const renderCeremonyLinks = links.ceremony.map((link, index) => (
    <li key={index}>
      <Link aria-label={`Learn more about ${link.title} ceremonies`} href={link.path}>
        {link.title}
      </Link>
    </li>
  ));

  const renderSocialLinks = links.social.map((link, index) => (
    <li key={index}>
      <Link target="_blank" aria-label={`Link to ${link.title} page`} href={link.path}>
        {link.title}
      </Link>
    </li>
  ));

  return (
    <footer className="flex w-full justify-center bg-primary text-secondary text-sm">
      <div className="flex flex-col gap-4 justify-between w-full max-w-screen-lg">
        <div className="flex gap-4">
          <div className="flex flex-col w-8 opacity-60">
            <Image
              alt="Hare"
              src={MoonBlack}
              height={50}
              width={50}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex items-end font-dancing text-secondary text-base font-bold">
            <p className="text-2xl">MoonGazer Ceremonies</p>
          </div>
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          <nav className="flex flex-col gap-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Discover</AccordionTrigger>
                <AccordionContent asChild>
                  <ul className="flex flex-col justify-center text-sm gap-4 pt-4">
                    {renderDiscoverLinks}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Ceremonies</AccordionTrigger>
                <AccordionContent asChild>
                  <ul className="flex flex-col justify-center text-sm gap-4 pt-4">
                    {renderCeremonyLinks}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Social</AccordionTrigger>
                <AccordionContent asChild>
                  <ul className="flex flex-col justify-center text-sm gap-4 pt-4">
                    {renderSocialLinks}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
        </div>
        {/* desktop nav */}
        <div className="hidden md:flex gap-4 justify-between">
          <nav>
            <h1 className="font-bold mb-2 text-base font-raleway">Discover</h1>
            <ul className="flex flex-col">{renderDiscoverLinks}</ul>
          </nav>
          <nav>
            <h1 className="font-bold mb-2 text-base font-raleway">Ceremonies</h1>
            <ul className="flex flex-col">{renderCeremonyLinks}</ul>
          </nav>
          <nav>
            <h1 className="font-bold mb-2 text-base font-raleway">Social</h1>
            <ul className="flex flex-col">{renderSocialLinks}</ul>
          </nav>
        </div>

        <div className="flex w-full justify-evenly">
          <div className="w-12">
            <Image
              src={GCC}
              alt="GCC badge"
              height={50}
              width={50}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-24">
            <Image
              src={CCL}
              alt="CCL certification"
              height={50}
              width={50}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-12">
            <Image
              src={FCC}
              alt="FCC certification"
              height={50}
              width={50}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
