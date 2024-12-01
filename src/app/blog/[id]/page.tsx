import BlogPost from "@/components/blog-post";
import { getBlogPostById } from "@/lib/actions/get-blog-post-by-id";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const blogPost = await getBlogPostById(id);

  if (!blogPost) {
    return (
      <main className="relative flex w-full flex-col items-center">
        <section className="mt-[75px] flex w-full justify-center bg-primary text-secondary">
          <p>Oops, the blog post you’re looking for isn’t here.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="relative flex w-full flex-col items-center">
      <section className="mt-[75px] flex w-full justify-center bg-primary text-secondary">
        <BlogPost blogPost={blogPost} />
      </section>
    </main>
  );
}
