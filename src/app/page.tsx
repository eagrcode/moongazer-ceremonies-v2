import Hero from "@/components/hero";
import About from "@/components/about";
import Image from "next/image";
import Jump from "../../public/assets/images/Jump cropped.jpg";
import Why from "@/components/why";

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center overflow-hidden">
      <Hero />
      <About />
      <Image src={Jump} alt={"Groom & Best Men jumping"} />
      <Why />
    </main>
  );
}
