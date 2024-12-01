import { SingleBlogPost } from "@/lib/types/types";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost({ blogPost }: { blogPost: SingleBlogPost }) {
  return (
    <div className="flex flex-col gap-4 max-w-4xl text-base">
      <div className="flex flex-col justify-between pb-4 gap-4 border-b-2 border-b-secondary/30">
        <Link className="text-sm hover:text-gray-950" href={"/blog"}>
          {"< Back to posts"}
        </Link>
        <div className="flex flex-col gap-4 lg:flex-row-reverse">
          <div className="flex w-full items-end max-w-[450px]">
            <Image
              className="rounded-md object-cover"
              src={blogPost.image_url || ""}
              alt={""}
              height={176}
              width={250}
              placeholder="blur"
              blurDataURL="blur"
            />
          </div>

          <div className="flex flex-col w-full justify-between gap-4 lg:justify-end">
            <div className="flex flex-col gap-4">
              <p className="text-sm">
                {formatDate(new Date(blogPost?.created_at))}
                {" | "}
                {blogPost.categories.category}
              </p>
              <h1 className="flex text-4xl font-serif font-normal">
                {blogPost?.title}
              </h1>
              <p className="text-sm">Posted by Dee</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blogPost?.content || "" }}
      />
    </div>
  );
}
