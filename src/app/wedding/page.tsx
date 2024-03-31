import Ceremony from "@/components/ceremony";

export default function WeddingPage() {
  const data = {
    title: "Weddings",
    tag: "your day, your choice, your dreams",
    description: {
      introduction: [
        `Your ceremony can be held absolutely anywhere you like without the restrictions of a
      registry office or church. Once the legalities have been completed the sky’s the limit.
      I can create a ceremony unique to you both, the only limitations are your imagination.`,
      ],
    },
    included: [
      "A ceremony written specifically for you, which tells your love story",
      "Symbolic rituals and unique personal aspects can be included",
      "A beautifully presented souvenir script as a keepsake of the day",
      "All meetings, email and phone contact",
      "Packages from £750",
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
