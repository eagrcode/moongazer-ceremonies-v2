"use client";

import React, { useState, useMemo } from "react";
import BlogCard from "@/components/blog-card";
import { BlogFilters, ResetFilters } from "@/components/blog-filters";
import { _BlogList } from "@/lib/types/types";

export default function BlogList({ posts, categories }: _BlogList) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [sortOption, setSortOption] = useState<number>(0);

  // Define sorting options
  const sortOptions = [
    { id: 0, label: "Sort" },
    { id: 1, label: "Date descending" },
    { id: 2, label: "Date ascending" },
  ];

  // Update sortOption by ID
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(parseInt(e.target.value, 10));
  };

  // Filter posts based on category ID
  const filterPosts = (id: number) => {
    if (id > 0) {
      setFilteredPosts(posts.filter((post) => post.category_id === id));
    } else {
      setFilteredPosts(posts);
    }
  };

  // Combine sorting with filtering
  const sortedBlogPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      switch (sortOption) {
        case 1: // Date descending
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        case 2: // Date ascending
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        default:
          return 0; // Default (no sorting)
      }
    });
  }, [filteredPosts, sortOption]);

  return (
    <main className="relative flex w-full flex-col items-center">
      <section className="mt-[75px] flex w-full justify-center bg-primary text-secondary">
        <div className="flex flex-col gap-4 w-full max-w-screen-lg text-base">
          {/* Category Filter Buttons */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <ResetFilters filterPosts={filterPosts} />
              {"|"}
              {categories.map((category, index) => (
                <>
                  <BlogFilters
                    key={category.id}
                    filterPosts={filterPosts}
                    id={category.id}
                    name={category.category}
                  />
                  {index != categories.length - 1 && "|"}
                </>
              ))}
            </div>
            <select
              className="bg-primary border-2 border-gray-800 px-2 py-[2px] rounded-md text-base focus:ring-brand-primary focus:border-brand-primary"
              name="sort"
              id="sort-select"
              onChange={handleSortChange}
              value={sortOption}
            >
              {sortOptions.map((option) => (
                <option
                  className="text-base bg-brand-primary/10 text-secondary"
                  key={option.id}
                  value={option.id}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Render Filtered and Sorted Blog Posts */}
          <div className="flex flex-col gap-4">
            {sortedBlogPosts.map((post) => (
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
