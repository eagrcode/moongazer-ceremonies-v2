import { SingleBlogPost } from "@/lib/types/types";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost({ blogPost }: { blogPost: SingleBlogPost }) {
  return (
    <article className="flex flex-col gap-4 max-w-4xl text-base">
      <header className="flex flex-col justify-between pb-4 gap-4 border-b-2 border-b-secondary/30">
        <nav>
          <Link
            className="text-sm hover:text-gray-950"
            href={"/blog"}
            aria-label="Back to all blog posts"
          >
            {"< Back to posts"}
          </Link>
        </nav>

        <div className="flex flex-col gap-4 lg:flex-row-reverse">
          <div className="flex w-full items-end max-w-[450px]">
            <Image
              className="rounded-md object-cover"
              src={blogPost.image_url || ""}
              alt={
                blogPost.title
                  ? `Image for ${blogPost.title}`
                  : "Blog post image"
              }
              height={176}
              width={250}
              placeholder="blur"
              blurDataURL="blur"
              priority
            />
          </div>

          <div className="flex flex-col w-full justify-between gap-4 lg:justify-end">
            <div className="flex flex-col gap-4">
              <p className="text-sm">
                <time dateTime={new Date(blogPost?.created_at).toISOString()}>
                  {formatDate(new Date(blogPost?.created_at))}
                </time>
                {" | "}
                {blogPost.categories.category}
              </p>
              <h1 className="text-4xl font-serif font-normal">
                {blogPost?.title}
              </h1>
              <p className="text-sm" aria-label="Author">
                Posted by Dee
              </p>
            </div>
          </div>
        </div>
      </header>

      <section
        className="blog-content p-0"
        dangerouslySetInnerHTML={{ __html: blogPost?.content || "" }}
      />
    </article>
  );
}
