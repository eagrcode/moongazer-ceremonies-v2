import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Wedding, Funeral, Renewal, Commitment, Naming } from "@/lib/s3StaticImages";

export default function CeremonyCards() {
  const ceremonies = [
    {
      id: 1,
      title: "Wedding",
      img: Wedding,
      path: "/wedding",
      alt: "wedding",
    },
    {
      id: 2,
      title: "Renewal",
      img: Renewal,
      path: "/renewal",
      alt: "renewal",
    },
    {
      id: 3,
      title: "Commitment",
      img: Commitment,
      path: "",
      alt: "commitment",
    },
    {
      id: 4,
      title: "Naming",
      img: Naming,
      path: "/naming",
      alt: "naming",
    },
    {
      id: 5,
      title: "Funeral",
      img: Funeral,
      path: "/funeral",
      alt: "funeral",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-4 text-secondary md:grid grid-cols-6 md:justify-center">
      {ceremonies.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col w-full max-w-[400px] items-center rounded-sm col-span-2 ${
            ceremonies.length === 5 && index === 3 && "md:col-start-2 md:col-span-2"
          } ${ceremonies.length === 5 && index === 4 && "md:col-start-4 md:col-span-2"}`}
        >
          <div className="flex w-full flex-1">
            <Image
              src={item.img}
              alt={item.alt}
              height={200}
              width={350}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="flex-1 flex flex-col w-full h-full gap-8 text-center items-center justify-center py-8  bg-secondary/10 border-b-2 border-l-2 border-r-2 border-secondary/10">
            <h2 className="text-secondary">{item.title}</h2>
            <Button asChild size="lg">
              <Link href={item.path}>Learn More</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
