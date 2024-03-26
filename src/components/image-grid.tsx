import Image from "next/image";

import Grid1 from "../../public/assets/images/Grid-1.jpg";
import Grid2 from "../../public/assets/images/Grid-2.jpg";
import Grid3 from "../../public/assets/images/Grid-3.jpg";
import Grid4 from "../../public/assets/images/Grid-4.jpg";

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

const imageElement = images.map((img) => (
  <div className="rounded-sm border-2 border-brand-primary/20 shadow-md">
    <Image
      className="rounded-sm grayscale ease-in duration-200 hover:grayscale-0"
      src={img.img}
      alt={img.alt}
    />
  </div>
));

export default function ImageGrid() {
  return <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">{imageElement}</div>;
}
