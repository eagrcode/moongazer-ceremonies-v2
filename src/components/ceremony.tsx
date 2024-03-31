import Link from "next/link";
import { Button } from "./ui/button";

type DescriptionType = {
  introduction: string[];
  additionalSections?: { title: string; content: string[] }[];
};

type PropTypes = {
  title: string;
  tag: string;
  description: DescriptionType;
  included: string[];
  isFuneral?: boolean;
};

type Sectiontype = {
  title: string;
  content: string[];
};

const Section = ({ title, content }: Sectiontype) => (
  <>
    <h3>{title}</h3>
    {content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </>
);

export default function Ceremony({ title, tag, description, included }: PropTypes) {
  return (
    <>
      <section className="flex w-full justify-center bg-primary text-secondary">
        <div className="flex flex-col justify-center items-center text-center max-w-screen-md gap-4 mt-[75px]">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">{title}</h1>
            <em className="text-secondary/80">{tag}</em>
          </div>
          {description.introduction.map((item) => (
            <p>{item}</p>
          ))}
          {description.additionalSections &&
            description.additionalSections.map((detail, index) => (
              <>
                <h3>{detail.title}</h3>
                <p key={index}>{detail.content}</p>
              </>
            ))}
          {description.additionalSections &&
            description.additionalSections.map((section, index) => (
              <Section key={index} title={section.title} content={section.content} />
            ))}
        </div>
      </section>
      <section className="flex w-full justify-center bg-secondary text-primary">
        <div className="flex flex-col items-center text-center gap-4 max-w-screen-md">
          <h2>Included with this ceremony</h2>
          <div className="flex flex-col w-full max-w-[400px] md:max-w-none gap-4 text-center md:grid grid-cols-2 md:justify-center">
            {included.map((item, index) => (
              <p
                key={index}
                className={`flex items-center justify-center bg-primary/10 px-4 py-4 rounded-full flex-1 font-semibold ${
                  index === included.length - 1 && "col-span-2"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
          <Button asChild size="full">
            <Link href="/contact">Contact me now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
