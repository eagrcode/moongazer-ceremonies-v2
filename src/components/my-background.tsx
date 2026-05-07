import { HareNavy } from "@/lib/s3StaticImages";
import Image from "next/image";

export default function MyBackground() {
  return (
    <section id="my-background" className="flex w-full justify-center bg-primary">
      <div className="flex flex-col items-center text-center gap-4 max-w-screen-md bg-brand-light min-h-max text-primary p-8 rounded-sm">
        <h2>My Background</h2>
        <p>
          {`I have a background in aromatherapy teaching, holistic therapies, counselling and project management. This combination of emotional understanding and thoughtful organisation informs how I guide each session, ensuring workshops are calm, considered and well held.`}
        </p>
        <p>
          {`Alongside my funeral work, I offer small wellbeing workshops and seasonal gatherings, and I’m involved in local theatre and volunteering with Sue Ryder and Grief Kind Spaces.`}
        </p>
      </div>
    </section>
  );
}
