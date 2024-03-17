"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Hare from "../../public/assets/images/Moon_Black.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

  return (
    <>
      <header className="fixed flex w-full justify-center items-center p-4 text-gray-950/60 z-10 md:px-12">
        <div className="flex w-full max-w-5xl  justify-between">
          {/* <div className="flex flex-col w-12">
          <Image alt="Hare" src={Hare} style={{ height: "auto", width: "100%" }} />
          <p className="font-dancing text-brand text-base">MoonGazer</p>
        </div> */}
          <div
            onClick={() => setShowMobMenu((prev) => !prev)}
            className="md:hidden flex w-10 h-4 flex-col justify-between cursor-pointer"
          >
            <div className="bg-gray-950 border-2 border-b-gray-950"></div>
            <div className="bg-gray-950 border-2 border-b-gray-950 max-w-8"></div>
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <li className={"ease-in duration-100 hover:text-gray-950"}>
                    <button>CEREMONIES</button>
                  </li>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href={"/wedding"}>WEDDING</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/renewal"}>RENEWAL</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/commitment"}>COMMITMENT</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/naming"}>NAMING</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/funeral"}>FUNERAL</Link>
                  </DropdownMenuItem>
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
      </header>

      {showMobMenu && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }} // End at the original position, fully visible
          transition={{ duration: 0.3, ease: "easeIn" }} // Customize the transition
          className="md:hidden flex w-full items-center justify-center absolute h-svh bg-brand-light z-10"
        >
          <button
            onClick={() => setShowMobMenu((prev) => !prev)}
            className="absolute top-4 left-4 text-gray-950"
          >
            CLOSE
          </button>
          <nav>
            <ul className="flex flex-col items-center gap-4 text-gray-950">
              <li>
                <Link href={"/"}>HOME</Link>
              </li>
              <li>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>CEREMONIES</AccordionTrigger>
                    <AccordionContent asChild>
                      <ul className="flex flex-col items-center justify-center text-sm gap-4 pt-4">
                        <li>
                          <Link href={"/wedding"}>WEDDING</Link>
                        </li>
                        <li>
                          <Link href={"/renewal"}>RENEWAL</Link>
                        </li>
                        <li>
                          <Link href={"/commitment"}>COMMITMENT</Link>
                        </li>
                        <li>
                          <Link href={"/naming"}>NAMING</Link>
                        </li>
                        <li>
                          <Link href={"/funeral"}>FUNERAL</Link>
                        </li>
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
    </>
  );
}
