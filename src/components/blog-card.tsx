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
    <Link
      className="flex flex-col gap-2 w-full items-center max-w-[400px] bg-primary/5 border-2 border-primary/10 p-2 rounded-md cursor-pointer transition-all md:hover:border-primary/20 md:max-w-[600px] justify-self-center"
      href={`/blog/${id}`}
    >
      <article className="flex flex-col gap-4">
        <header className="flex w-full">
          <Image
            className="rounded-md object-cover"
            src={image_url || ""}
            alt={title}
            height={176}
            width={250}
            placeholder="blur"
            blurDataURL="blur"
          />
        </header>
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex gap-2 items-center text-xs text-primary/90">
            <p>{category}</p>
            {"-"}
            <p>{formatDate(new Date(created_at))}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h2 className="font-serif font-semibold text-xl">{title}</h2>
            </div>
            <div>
              <p className="text-sm text-primary/90">{summary}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
