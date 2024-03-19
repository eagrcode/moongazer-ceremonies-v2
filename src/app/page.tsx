import Hero from "@/components/hero";
import About from "@/components/about";
import Why from "@/components/why";
import Ceremonies from "@/components/ceremonies";

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center overflow-hidden">
      <Hero />
      <About />
      <Why />
      <Ceremonies />
    </main>
  );
}
