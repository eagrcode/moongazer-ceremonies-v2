import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export const metadata: Metadata = {
  title: "Remedies & Rituals - MoonGazer Ceremonies",
  alternates: {
    canonical: "https://moongazerceremonies.co.uk/remedies-rituals",
  },
};

export default function RemediesRitualsPage() {
  return (
    <main className="relative flex w-full flex-col items-center">
      {/* Hero / Introduction */}
      <section className="flex w-full justify-center bg-primary text-secondary">
        <div className="flex flex-col justify-center items-center text-center max-w-screen-md gap-4 mt-[75px]">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Remedies & Rituals</h1>
            <em className="text-secondary/80">
              {`Neal's Yard Workshops in South Lincolnshire & Cambridgeshire`}
            </em>
          </div>
          <p>
            {`I offer small, welcoming Neal's Yard Remedies workshops in South Lincolnshire and Cambridgeshire, designed to support seasonal wellbeing and simple, everyday self-care.`}
          </p>
          <p>
            {`These sessions are calm, practical and sensory. Together we explore natural products through scent, texture and guided use — helping you feel confident incorporating them into daily life.`}
          </p>
          <p>
            {`Whether you are new to essential oils or already enjoy natural wellbeing products, the workshops are accessible, informative and gently paced.`}
          </p>
        </div>
      </section>

      {/* What to Expect + My Approach */}
      <section className="flex w-full justify-center bg-secondary text-primary">
        <div className="flex flex-col items-center text-center gap-4 max-w-screen-md">
          <h2>What to Expect</h2>
          <p>Each workshop includes:</p>
          <div className="flex flex-col w-full max-w-[400px] md:max-w-none gap-4 text-center md:grid grid-cols-2 md:justify-center">
            {[
              "Guided demonstration of selected Neal's Yard Remedies products",
              "Supported, hands-on exploration of essential oils and blends",
              "Practical seasonal wellbeing guidance",
              "Time for discussion and questions",
              "The opportunity to purchase products",
            ].map((item, index) => (
              <p
                key={index}
                className={`flex items-center justify-center bg-primary/10 px-8 py-8 rounded-xl flex-1 ${
                  index === 4 && "col-span-2"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
          <p>
            {`In some sessions, you will also create your own simple blends or small ritual items to take home — something practical to continue using beyond the workshop.`}
          </p>
          <p>
            {`There is no pressure to buy. The focus is on understanding, experience and confident, everyday use.`}
          </p>
        </div>
      </section>

      {/* My Approach */}
      <section className="flex w-full justify-center bg-primary text-secondary">
        <div className="flex flex-col justify-center items-center text-center max-w-screen-md gap-4">
          <h2>My Approach</h2>
          <p>
            {`As an independent Neal's Yard Remedies consultant, I combine product knowledge with a grounded understanding of wellbeing and life's natural rhythms.`}
          </p>
          <p>
            {`My background in aromatherapy, holistic therapies and counselling informs how I guide each session. Workshops are thoughtfully structured, well-organised and relaxed — offering both information and space to reflect.`}
          </p>
          <p>
            {`The aim is simple: practical tools that support calm, balance and seasonal awareness.`}
          </p>
        </div>
      </section>

      {/* Seasonal & Themed Workshops */}
      <section className="flex w-full justify-center bg-secondary text-primary">
        <div className="flex flex-col items-center text-center gap-4 max-w-screen-md">
          <h2>Seasonal & Themed Workshops</h2>
          <p>Workshops may explore:</p>
          <div className="flex flex-col w-full max-w-[400px] md:max-w-none gap-4 text-center md:grid grid-cols-2 md:justify-center">
            {[
              "Essential oils for everyday wellbeing",
              "Seasonal self-care practices",
              "Creating simple home rituals",
              "Natural support during times of change",
              "Small group wellbeing gatherings",
            ].map((item, index) => (
              <p
                key={index}
                className={`flex items-center justify-center bg-primary/10 px-8 py-8 rounded-xl flex-1 ${
                  index === 4 && "col-span-2"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
          <p>
            {`Sessions are held across South Lincolnshire and Cambridgeshire. I also welcome private bookings for small groups.`}
          </p>
        </div>
      </section>

      {/* Join or Host */}
      <section className="flex w-full justify-center bg-primary text-secondary">
        <div className="flex flex-col justify-center items-center text-center max-w-screen-md gap-4">
          <h2>Join or Host a Workshop</h2>
          <p>
            {`If you are looking for Neal's Yard workshops in South Lincolnshire or Cambridgeshire — whether to attend or to host in your home — I would be delighted to hear from you.`}
          </p>
          <p>{`Please get in touch to explore upcoming dates, themes and availability.`}</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a
                href="https://uk.nyrorganic.com/shop/deerobinson"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`Neal's Yard`}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
