import Link from "next/link";
import Image from "next/image";
import Wedding from "../../public/assets/images/wedding.jpg";
import { Button } from "./ui/button";

export default function CeremonySwiper() {
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
      img: Wedding,
      path: "/renewal",
      alt: "renewal",
    },
    {
      id: 3,
      title: "Commitment",
      img: Wedding,
      path: "",
      alt: "commitment",
    },
    {
      id: 4,
      title: "Naming",
      img: Wedding,
      path: "/naming",
      alt: "naming",
    },
    {
      id: 5,
      title: "Funeral",
      img: Wedding,
      path: "/funeral",
      alt: "funeral",
    },
  ];

  return (
    <div className="flex w-full gap-4 overflow-scroll scrollbar-hide snap-mandatory snap-x text-secondary">
      {ceremonies.map((item, index) => (
        <div
          key={index}
          className="flex flex-col min-w-[80%] justify-center items-center snap-center rounded-sm sm:min-w-[70%] md:min-w-[60%] lg:min-w-[40%] xl:min-w-0 xl:[&:nth-child(2)]:mt-28 xl:[&:nth-child(4)]:mt-28"
        >
          <div className="flex w-full">
            <Image src={item.img} alt={item.alt} style={{ height: "auto", width: "100%" }} />
          </div>

          <div className="flex flex-col w-full gap-8 text-center items-center justify-center py-8  bg-secondary/10 border-b-2 border-l-2 border-r-2 border-secondary/10">
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
