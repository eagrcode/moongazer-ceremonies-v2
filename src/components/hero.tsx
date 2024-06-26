import { Button } from "./ui/button";
import Image from "next/image";
import { HareHero } from "@/lib/s3StaticImages";
import Link from "next/link";

export default function hero() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-primary px-4 md:px-12">
      <div className="flex flex-col w-full max-w-5xl gap-4 items-center justify-center md:flex-row-reverse">
        <div className="flex w-full max-w-64 opacity-80 md:max-w-[450px]">
          <Image
            alt="Hare"
            src={HareHero}
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            priority={true}
          />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-center md:items-start md:text-left">
          <h1 className="font-dancing text-brand-primary text-7xl drop-shadow-md md:text-8xl lg:text-9xl">
            MoonGazer Ceremonies
          </h1>
          <em className="text-gray-900/70 text-lg max-w-lg">
            where every moment is personalised, and every celebration is unique
          </em>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/contact">GET IN TOUCH</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#about">EXPLORE</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
