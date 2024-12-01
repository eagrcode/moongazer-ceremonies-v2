"use server";

import { createClient } from "../supabase/client";
import { SingleBlogPost } from "../types/types";

export const getBlogPostById = async (
  id: string | undefined
): Promise<SingleBlogPost | null> => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*, categories(category)")
      .eq("id", id)
      .limit(1)
      .single();

    console.log(data);
    return error ? null : (data as SingleBlogPost);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
