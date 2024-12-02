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
    <section className="mt-[75px] flex w-full justify-center bg-secondary text-primary">
      <div className="flex flex-col items-center gap-4 w-full max-w-screen-lg text-base">
        {/* Category Filter Buttons */}
        <div className="flex gap-2 justify-between w-full items-center">
          <div className="flex w-full justify-center md:w-fit">
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <ResetFilters filterPosts={filterPosts} />
              {categories.map((category, index) => (
                <>
                  <BlogFilters
                    key={category.id}
                    filterPosts={filterPosts}
                    id={category.id}
                    name={category.category}
                  />
                </>
              ))}
            </div>
          </div>
          <div className="hidden w-full max-w-[200px] md:flex">
            <select
              className="flex w-full bg-secondary border-2 border-primary/10 rounded-2xl text-sm px-2 py-[3px] text-primary focus:border-primary/20 focus:ring-primary/20"
              name="sort"
              id="sort-select"
              onChange={handleSortChange}
              value={sortOption}
            >
              {sortOptions.map((option) => (
                <option
                  className="text-base bg-secondary text-primary"
                  key={option.id}
                  value={option.id}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Render Filtered and Sorted Blog Posts */}
        <div className="grid grid-cols-1 w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedBlogPosts.map((post) => (
            <BlogCard
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
  );
}
