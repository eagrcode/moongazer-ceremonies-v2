import Ceremony from "@/components/ceremony";

export default function FuneralPage() {
  const data = {
    title: "Funeral",
    tag: "a celebration of life",
    description: {
      introduction: [
        `After the loss of a loved one, planning a funeral can feel quite daunting. As a trained grief counsellor, I understand the range of emotions that family and friends experience. I can guide and support you through this very difficult time with compassion and kindness.`,
      ],
      additionalSections: [
        {
          title: "The Funeral Service",
          content: [
            `Initially, we will meet so that I can learn about your loved one to enable me to create the eulogy. I will reflect your family's beliefs and values and capture the unique essence of your loved one.`,
            `My ceremonies are typically non-religious; however, if you choose to include a prayer or hymn, I am more than happy to accommodate your wishes, regardless of denomination or belief system.`,
            `You will be in control at all stages of the process. In consultation with you and your family, we will finalize any readings or tributes, hymns, and music. After our meeting, you will receive the draft Order of Service and eulogy to approve or amend if necessary. I will liaise with your funeral director at all times.`,
          ],
        },
        {
          title: "The Interment or Scattering of Ashes Ceremony",
          content: [
            `The interment or scattering of your loved one's ashes usually occurs some days, weeks, or months after the cremation service. For this occasion, you may decide upon a small ceremony.`,
            `These ceremonies can be held almost anywhere: the cemetery gardens, the woods, or even your own backyard. Permission may be required in certain circumstances and locations.`,
            `Once again, the choices are yours, and I will work with you to provide a fitting and dignified ceremony`,
          ],
        },
        {
          title: "Memorial or Celebration of Life Ceremonies",
          content: [
            `A Memorial or Celebration of Life ceremony usually takes place after the formal funeral service. It can be held a week or a year later, or it can mark a special date significant to you and your loved one.`,

            `The ceremony can be held anywhere. Many people choose locations with personal significance, such as a beach, a park, or the family home. Any location or venue is a potential option.`,

            `It provides an ideal opportunity for family and friends, who may not have been able to attend the funeral, to gather and reminisce.`,

            `My role can range from helping you shape the content of the ceremony to acting as your master of ceremonies on the day.`,
          ],
        },
        {
          title: "Your own Funeral Wishes",
          content: [
            `Have you ever considered what you would like said at your own funeral?`,
            `Where would you want it to be held? What music would you prefer? Hymns or pop songs? Bagpipes or a rock band? Which readings or poems would you include?`,
            `It can be comforting to know that your family is aware of your preferences, and that you've eased their burden by making these decisions in advance.`,
            `We all have stories to share about our lives. They form part of the legacy we leave behind. I can assist you in articulating your story and choices. These can then be paired with your will or entrusted to a family member. This ensures that when the time comes, no one is left wondering, "I don’t know what they wanted."`,
          ],
        },
      ],
    },
    included: [
      "Interview meeting at clients home or if preferred at the funeral directors, whichever is more convenient to you",
      "Follow up interviews or telephone calls as required",
      "Full Support, help and guidance with all decisions about the ceremony from my professional knowledge",
      "Full bespoke delivery script written to your choices and any elements from my recommendation (poems, readings, quotes, music)",
      "Presentation script given after the funeral",
      "Scattering of Ashes Ceremony £150",
      "Funeral services are for a fixed fee of £235",
    ],
  };

  return (
    <main className="relative flex w-full flex-col items-center">
      <Ceremony
        title={data.title}
        tag={data.tag}
        description={data.description}
        included={data.included}
        isFuneral={true}
      />
    </main>
  );
}
