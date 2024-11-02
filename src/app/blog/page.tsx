import React from "react";

export default async function page() {
  // Fetch blog posts
  const response = await fetch("http://localhost:3000/api/get-posts");
  const data = await response.json();
  const { rows: posts } = data.posts;

  console.log(posts);

  return (
    <main className="relative flex w-full flex-col items-center">
      <section className="mt-[75px]">
        {posts.map((post: any) => {
          const formattedDate = new Date(post.created_at).toLocaleDateString(
            "en-GB"
          );
          return (
            <React.Fragment key={post.id}>
              <p>{post.title}</p>
              <p>{formattedDate}</p>
              {post.content.map((p: any, index: any) => (
                <p key={index}>{p}</p>
              ))}
            </React.Fragment>
          );
        })}
      </section>
    </main>
  );
}
