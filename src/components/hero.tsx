import { Button } from "./ui/button";
import Image from "next/image";
import { HareHero } from "@/lib/s3StaticImages";
import Link from "next/link";

export default function Hero() {
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
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center text-center md:items-start md:text-left">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.24em] text-brand-primary font-semibold">
            Independent Celebrant · Lincolnshire
          </span>
          <h1 className="font-dancing text-secondary text-6xl sm:text-7xl drop-shadow-md md:text-8xl lg:text-9xl leading-[0.95]">
            MoonGazer
            <br />
            <span className="text-brand-primary">Ceremonies</span>
          </h1>
          <em className="text-secondary/70 text-sm sm:text-md max-w-lg">
            Personal, heartfelt Funerals & Celebrations across Lincolnshire, Cambridgeshire and
            beyond
          </em>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="bg-brand-primary w-full sm:w-fit rounded-md">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-fit rounded-md">
              <a href="#ceremonies">Explore Ceremonies</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
