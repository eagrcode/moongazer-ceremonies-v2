import { sql } from "@vercel/postgres";
import { unstable_cache } from "next/cache";

type BlogPost = {
  id: number;
  title: string;
  published: boolean;
  image_url: string;
  content: string[];
  created_at: Date;
  summary: string;
  tags: string[];
  category_id: number;
  category: string;
};

export const getBlogPosts = unstable_cache(
  async (): Promise<BlogPost[]> => {
    try {
      const { rows } = await sql`
      SELECT "Post".*, "category".name AS category
      FROM "Post"
      JOIN "category" ON "Post".category_id = "category".id;
    `;

      console.log("SERVER ACTION: ", rows);

      return rows as BlogPost[];
    } catch (error: any) {
      console.error("Error in getBlogPosts:", error.message);
      throw error;
    }
  },
  ["posts"],
  { revalidate: 1, tags: ["posts"] }
);
