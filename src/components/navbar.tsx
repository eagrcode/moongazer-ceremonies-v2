"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { MoonWhite, MoonBlack } from "@/lib/s3StaticImages";
import { ceremonyLinks, navbarLinks, socialLinks } from "@/lib/site-links";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Navbar() {
  const [showMobMenu, setShowMobMenu] = useState<boolean>(false);
  const path = usePathname();

  const isActive = (href: string) => path === href;

  useEffect(() => {
    if (showMobMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMobMenu]);

  return (
    <>
      <header className="fixed flex w-full h-[75px] justify-center items-center text-base font-medium p-4 bg-primary/70 backdrop-blur-lg drop-shadow-md text-gray-950/70 z-10 md:px-12">
        <NavbarContent
          onToggleMobileMenu={() => setShowMobMenu((prev) => !prev)}
          isActive={isActive}
        />
        {showMobMenu && <MobileNav onCloseMobileMenu={() => setShowMobMenu(false)} />}
      </header>
    </>
  );
}

function NavbarContent({
  onToggleMobileMenu,
  isActive,
}: {
  onToggleMobileMenu: () => void;
  isActive: (href: string) => boolean;
}) {
  return (
    <div className="flex w-full max-w-5xl justify-between">
      <div className="flex items-center gap-4">
        <div className="hidden md:flex flex-col w-10 opacity-60">
          <Image
            alt="Hare"
            src={MoonBlack}
            height={50}
            width={50}
            style={{ objectFit: "contain" }}
          />
        </div>
        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden"
          onClick={onToggleMobileMenu}
        >
          <BiMenuAltLeft size={40} />
        </button>
      </div>

      <div className="flex gap-4">
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-4">
            {navbarLinks.slice(0, 1).map((link) => (
              <li
                key={link.href}
                className={`${
                  isActive(link.href) ? "text-gray-950 border-b-2 border-b-gray-950" : ""
                } ease-in duration-100 hover:text-gray-950 px-1 flex justify-center items-center`}
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
            <li>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex items-center gap-1 cursor-pointer ease-in duration-100 hover:text-gray-950"
                  >
                    Ceremonies
                    <FaChevronDown className="font-extralight" size={15} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {ceremonyLinks.map((link) => (
                    <DropdownMenuItem key={link.href}>
                      <Link
                        aria-label={`Learn more about ${link.title} ceremonies`}
                        href={link.href}
                        className="w-full"
                      >
                        {link.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            {navbarLinks.slice(1).map((link) => (
              <li
                key={link.href}
                className={`${
                  isActive(link.href) ? "text-gray-950 border-b-2 border-b-gray-950" : ""
                } ease-in duration-100 hover:text-gray-950 ${
                  link.href === "/blog" ? "px-1" : ""
                } flex justify-center items-center`}
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4 items-center">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              aria-label={`Link to ${link.title} page`}
              href={link.href}
              target="_blank"
            >
              <FaSquareFacebook
                className="hidden ease-in duration-100 hover:text-gray-950 cursor-pointer md:block"
                size={30}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ onCloseMobileMenu }: { onCloseMobileMenu: () => void }) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="md:hidden flex flex-col w-full items-center justify-center absolute h-dvh top-0 p-4 bg-secondary text-primary z-10"
    >
      <div className="flex w-full justify-between absolute top-0 p-4">
        <button
          type="button"
          aria-label="Close menu"
          className="text-primary"
          onClick={onCloseMobileMenu}
        >
          <IoCloseOutline size={40} />
        </button>
        <div className="flex w-10 opacity-60">
          <Image
            alt="Hare"
            src={MoonWhite}
            height={50}
            width={50}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <nav>
        <ul className="flex flex-col items-center gap-4">
          {navbarLinks.slice(0, 1).map((link) => (
            <li onClick={onCloseMobileMenu} key={link.href}>
              <Link href={link.href}>{link.title.toUpperCase()}</Link>
            </li>
          ))}
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>CEREMONIES</AccordionTrigger>
                <AccordionContent asChild>
                  <ul className="flex flex-col items-center justify-center text-base text-primary/80 gap-4 pt-4">
                    {ceremonyLinks.map((link) => (
                      <li onClick={onCloseMobileMenu} key={link.href}>
                        <Link
                          aria-label={`Learn more about ${link.title} ceremonies`}
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          {navbarLinks.slice(1).map((link) => (
            <li onClick={onCloseMobileMenu} key={link.href}>
              <Link href={link.href}>{link.title.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
