import Ceremony from "@/components/ceremony";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commitment - MoonGazer Ceremonies",
  alternates: {
    canonical: "https://moongazerceremonies.co.uk/commitment",
  },
};

export default function CommitmentPage() {
  const data = {
    title: "Commitment",
    tag: "commited in Love and Life",
    description: {
      introduction: [
        `If you would like to celebrate your life-long commitment to each other, without the legalities, this is the ceremony for you. A commitment or affirmation ceremony allows you to declare your love and commitment to each other in front of your friends and family.`,
        `The sky’s the limit, you can include whatever is right for you both. I will meet with you to chat through your ideas and thoughts, and make sure that your ceremony is a clear reflection of you and your relationship.`,
        `These ceremonies are a wonderful way of reflecting your unconditional love and dedication to each other.`,
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
