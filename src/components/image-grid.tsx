import Image from "next/image";
import { Grid1, Grid2, Grid3, Grid4 } from "@/lib/s3StaticImages";

const images = [
  {
    id: 0,
    img: Grid1,
    alt: "",
  },
  {
    id: 1,
    img: Grid2,
    alt: "",
  },
  {
    id: 2,
    img: Grid3,
    alt: "",
  },
  {
    id: 3,
    img: Grid4,
    alt: "",
  },
];

const imageElement = images.map((img, index) => (
  <div key={index} className="rounded-sm border-2 border-brand-primary/20 shadow-md">
    <Image
      className="rounded-sm grayscale ease-in duration-200 hover:grayscale-0"
      src={img.img}
      alt={img.alt}
      width={300}
      height={300}
      style={{ objectFit: "contain" }}
    />
  </div>
));

export default function ImageGrid() {
  return <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">{imageElement}</div>;
}
