import Link from "next/link";
import { FCC, AOIC, CCL } from "@/lib/s3StaticImages";
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
      { path: "/home", title: "Home" },
      { path: "/blog", title: "Blog" },
      { path: "/contact", title: "Contact" },
    ],
    ceremony: [
      { path: "/funerals", title: "Funerals" },
      { path: "/weddings", title: "Weddings" },
      { path: "/naming", title: "Naming" },
      { path: "/renewal", title: "Renewal" },
      { path: "/commitment", title: "Commitment" },
    ],
    social: [
      {
        path: "",
        title: "Facebook",
      },
      { path: "", title: "Instagram" },
    ],
  };

  return (
    <footer className="flex w-full justify-center bg-primary text-secondary text-sm">
      <div className="flex flex-col gap-4 justify-between w-full max-w-screen-lg">
        <div className="flex justify-between gap-4">
          <div className="flex items-end font-dancing text-secondary text-base font-bold">
            <p className="text-2xl">MoonGazer Ceremonies</p>
          </div>
          <div className="flex flex-col w-8 opacity-60">
            <Image
              alt="Hare"
              src={MoonBlack}
              height={50}
              width={50}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:hidden">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Discover</AccordionTrigger>
              <AccordionContent asChild>
                <ul className="flex flex-col justify-center text-sm gap-4 pt-4">
                  {links.discover.map((link, index) => (
                    <li key={index}>
                      <Link href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Ceremonies</AccordionTrigger>
              <AccordionContent asChild>
                <ul className="flex flex-col justify-center text-sm gap-4 pt-4">
                  {links.ceremony.map((link, index) => (
                    <li key={index}>
                      <Link href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Social</AccordionTrigger>
              <AccordionContent asChild>
                <ul className="flex flex-col justify-center text-sm gap-4 pt-4">
                  {links.social.map((link, index) => (
                    <li key={index}>
                      <Link href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="hidden md:flex gap-4 justify-between">
          <nav>
            <h4 className="font-bold mb-2">Discover</h4>
            <ul className="flex flex-col">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#ceremoniesTag">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 className="font-bold mb-2">Ceremonies</h4>
            <ul className="flex flex-col">
              <li>
                <Link href="/funeral">Funerals</Link>
              </li>
              <li>
                <Link href="#ceremoniesTag">Weddings</Link>
              </li>
              <li>
                <Link href="/contact">Naming</Link>
              </li>
              <li>
                <Link href="/contact">Vow Renewal</Link>
              </li>
              <li>
                <Link href="/contact">Commitment</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 className="font-bold mb-2">Social</h4>
            <ul className="flex flex-col">
              <li>
                <Link
                  rel="nofollow"
                  target="_blank"
                  href="https://www.facebook.com/moongazerceremonies"
                  aria-label="link href moongazer ceremonies facebook"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  rel="nofollow"
                  target="_blank"
                  href="https://www.instagram.com/moongazerceremonies/"
                  aria-label="link href moongazer ceremonies instagram"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex w-full justify-evenly">
          <div className="w-12">
            <Image
              src={AOIC}
              alt="AOIC certification"
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
