// /app/blog/page.js

import React from "react";
import { getBlogPosts } from "@/lib/actions/get-posts";
import { getCategories } from "@/lib/actions/get-categories";
import BlogList from "@/components/blog-list";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = await getCategories();

  return <BlogList posts={posts} categories={categories} />;
}
