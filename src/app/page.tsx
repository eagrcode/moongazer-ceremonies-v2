import Hero from "@/components/hero";
import About from "@/components/about";
import Why from "@/components/why";
import Ceremonies from "@/components/ceremonies";
import Planning from "@/components/planning";
import Testimonials from "@/components/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MoonGazer Ceremonies",
  description:
    "Dee Robinson, your trusted independent celebrant for funeral services and bespoke ceremonies in Cambridgeshire and Lincolnshire. Also proudly serving Hertfordshire, Bedfordshire, Norfolk, Suffolk, Northamptonshire, Rutland, and Essex, I specialise in creating dignified and personalised commemorations.",
  alternates: {
    canonical: "https://moongazerceremonies.co.uk",
  },
};

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
