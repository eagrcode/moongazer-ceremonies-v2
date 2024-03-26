"use client";

import Link from "next/link";
import Image from "next/image";
import Hare from "../../public/assets/images/Moon_White.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

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

  const ceremonyLinks = [
    { id: 0, title: "Wedding", href: "/wedding" },
    { id: 1, title: "Renewal", href: "/renewal" },
    { id: 2, title: "Commitment", href: "/commitment" },
    { id: 3, title: "Naming", href: "/naming" },
    { id: 4, title: "Funeral", href: "/funeral" },
  ];

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
      <header className="fixed flex w-full justify-center items-center p-4 bg-primary drop-shadow-sm text-gray-950/60 z-10 md:px-12">
        <div className="flex w-full max-w-5xl justify-between">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col w-10 opacity-60">
              <Image alt="Hare" src={Hare} style={{ height: "auto", width: "100%" }} />
            </div>
            <div onClick={() => setShowMobMenu((prev) => !prev)}>
              <BiMenuAltLeft size={40} />
            </div>
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-4">
                <li
                  className={`${
                    isActive("/") ? "text-gray-950 border-b-2 border-b-gray-950" : ""
                  } ease-in duration-100 hover:text-gray-950 px-1 flex justify-center items-center`}
                >
                  <Link href={"/"}>HOME</Link>
                </li>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <li className="flex items-center gap-1 cursor-pointer ease-in duration-100 hover:text-gray-950">
                      <button>CEREMONIES</button>
                      <FaChevronDown className="font-extralight" size={15} />
                    </li>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {ceremonyLinks.map((link, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={link.href}>{link.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <li
                  className={`${
                    isActive("/contact") ? "text-gray-950 underline" : ""
                  } ease-in duration-100 hover:text-gray-950`}
                >
                  <Link href={"/contact"}>CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-4">
            <Link href={""}>
              <FaInstagram
                className="hidden ease-in duration-100 hover:text-gray-950 cursor-pointer md:block"
                size={30}
              />
            </Link>
            <Link href={""}>
              <FaSquareFacebook
                className="hidden ease-in duration-100 hover:text-gray-950 cursor-pointer md:block"
                size={30}
              />
            </Link>
          </div>
        </div>
        {showMobMenu && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }} // End at the original position, fully visible
            transition={{ duration: 0.3, ease: "easeIn" }} // Customize the transition
            className="md:hidden flex flex-col w-full items-center justify-center absolute h-dvh top-0 p-4 bg-secondary text-primary z-10"
          >
            <div className="flex w-full justify-between absolute top-0 p-4">
              <button className="text-primary" onClick={() => setShowMobMenu((prev) => !prev)}>
                <IoCloseOutline size={40} />
              </button>
              <div className="flex w-10 opacity-60">
                <Image alt="Hare" src={Hare} style={{ height: "auto", width: "100%" }} />
              </div>
            </div>

            <nav>
              <ul className="flex flex-col items-center gap-4">
                <li>
                  <Link href={"/"}>HOME</Link>
                </li>
                <li>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>CEREMONIES</AccordionTrigger>
                      <AccordionContent asChild>
                        <ul className="flex flex-col items-center justify-center text-base text-primary/80 gap-4 pt-4">
                          {ceremonyLinks.map((link, index) => (
                            <li key={index}>
                              <Link href={link.href}>{link.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>

                <li>
                  <Link href={""}>CONTACT</Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
}
