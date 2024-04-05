import Hero from "@/components/hero";
import About from "@/components/about";
import Why from "@/components/why";
import Ceremonies from "@/components/ceremonies";
import Planning from "@/components/planning";
import Testimonials from "@/components/testy";

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center overflow-hidden">
      <Hero />
      <About />
      <Why />
      <Ceremonies />
      <Planning />
      <Testimonials />
    </main>
  );
}
