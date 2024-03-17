import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center overflow-hidden">
      <Hero />
      <About />
    </main>
  );
}
