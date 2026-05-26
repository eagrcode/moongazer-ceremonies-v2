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
    tag: "What's in a name?",
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
    pricing: [{ label: "Naming ceremony", price: "From £250", note: "Bespoke packages" }],
    ctaCopy: `Let's create a warm, joyful welcome for your little one — written entirely around your family.`,
  };

  return (
    <main className="relative flex w-full flex-col items-center">
      <Ceremony {...data} />
    </main>
  );
}
