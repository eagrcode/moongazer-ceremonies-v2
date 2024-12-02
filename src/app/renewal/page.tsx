import Ceremony from "@/components/ceremony";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewal - MoonGazer Ceremonies",
  alternates: {
    canonical: "https://moongazerceremonies.co.uk/renewal",
  },
};

export default function RenewalPage() {
  const data = {
    title: "Vow Renewal",
    tag: "relive the Love!",
    description: {
      introduction: [
        `This is the perfect way to celebrate your special anniversary and relive your wedding all over again. We can work together to create a personal ceremony either repeating your original vows or making new ones.`,
      ],
    },
    included: [
      "A ceremony written specifically for you, which tells your love story",
      "Symbolic rituals and unique personal aspects can be included",
      "A beautifully presented souvenir script as a keepsake of the day",
      "All meetings, email and phone contact",
      "Packages from £300",
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
