import BlogPost from "@/components/blog-post";
import { getBlogPostById } from "@/lib/actions/get-blog-post-by-id";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const blogPost = await getBlogPostById(id);

  if (!blogPost) {
    return {
      title: "Blog Post Not Found - Moongazer Ceremonies",
      description:
        "Oops, the blog post you're looking for isn't here. Please check our other posts.",
    };
  }

  return {
    title: `${blogPost.title} - Moongazer Ceremonies`,
    description: blogPost.summary,
    openGraph: {
      title: blogPost.title,
      description: blogPost.summary,
      url: `https://moongazerceremonies.co.uk/blog/${id}`,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const blogPost = await getBlogPostById(id);

  if (!blogPost) {
    return (
      <main className="relative flex w-full flex-col items-center">
        <section className="mt-[75px] flex w-full justify-center bg-primary text-secondary">
          <h1 className="text-xl font-semibold">Blog Post Not Found</h1>
          <p className="mt-4">
            Oops, the blog post you’re looking for isn’t here.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="relative flex w-full flex-col items-center">
      <section className="mt-[75px] flex w-full justify-center bg-primary text-secondary">
        <article>
          <BlogPost blogPost={blogPost} />
        </article>
      </section>
    </main>
  );
}
