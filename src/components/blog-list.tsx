"use client";

import React, { useState } from "react";
import BlogCard from "@/components/blog-card";
import { BlogFilters, ResetFilters } from "@/components/blog-filters";
import { _BlogList } from "@/lib/types/types";

export default function BlogList({ posts, categories }: _BlogList) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // Filter posts based on category ID
  const filterPosts = (id: number) => {
    if (id > 0) {
      setFilteredPosts(posts.filter((post) => post.category_id === id));
    } else {
      setFilteredPosts(posts); // Show all posts when "All Posts" is selected
    }
  };

  return (
    <main className="relative flex w-full flex-col items-center">
      <section className="mt-[75px] flex w-full justify-center bg-primary text-secondary">
        <div className="flex flex-col gap-4 w-full max-w-screen-lg">
          {/* Category Filter Buttons */}
          <div className="flex justify-between">
            <ResetFilters filterPosts={filterPosts} />
            {categories.map((category) => (
              <BlogFilters
                key={category.id}
                filterPosts={filterPosts}
                id={category.id}
                name={category.category}
              />
            ))}
          </div>

          {/* Render Filtered Blog Posts */}
          <div className="flex flex-col gap-4">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                summary={post.summary}
                category={post.categories.category}
                created_at={post.created_at}
                image_url={post.image_url}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
