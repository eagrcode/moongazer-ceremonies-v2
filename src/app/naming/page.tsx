import Ceremony from "@/components/ceremony";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naming - MoonGazer Ceremonies",
  alternates: {
    canonical: "https://moongazerceremonies.co.uk/naming",
  },
};

export default function NamingPage() {
  const data = {
    title: "Naming Ceremony",
    tag: "what's in a Name?",
    description: {
      introduction: [
        `If you want to celebrate your new arrival with your family and friends, this is the perfect non-religious way to welcome a new member into your family. It might be to welcome a baby into the world or a newly adopted child into your family. We will work together to create a unique ceremony which may include readings and symbolic gestures. You can include godparents, guide parents or guardians who will promise to love and support your child during the ceremony.`,
      ],
    },
    included: [
      "A ceremony written specifically for you, which tells your love story",
      "Symbolic rituals and unique personal aspects can be included",
      "A beautifully presented souvenir script as a keepsake of the day",
      "All meetings, email and phone contact",
    ],
  };

  return (
    <main className="relative flex w-full flex-col items-center">
      <Ceremony
        title={data.title}
        tag={data.tag}
        description={data.description}
        included={data.included}
      />
    </main>
  );
}
