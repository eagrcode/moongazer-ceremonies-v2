import { _BlogCard } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

export default function BlogCard({
  id,
  title,
  summary,
  category,
  created_at,
  image_url,
}: _BlogCard) {
  return (
    <div key={id} className="flex">
      <Image
        className="flex flex-1 max-h-[300px] bg-cyan-600 justify-center items-center font-bold"
        src={image_url || ""}
        alt={""}
        height={200}
        width={200}
      />
      <div className="flex flex-1 flex-col gap-4 justify-between p-4 border-t-2 border-r-2 border-b-2 border-gray-400">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h2 className="font-serif font-light text-xl hover:underline">
              <Link href={`/blog/${id}`}>{title}</Link>
            </h2>
          </div>
          <div>
            <p className="text-xs">{summary}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center text-xs pt-4 border-t border-gray-400">
          <p>{category}</p>
          {"-"}
          <p>{formatDate(new Date(created_at))}</p>
        </div>
      </div>
    </div>
  );
}
