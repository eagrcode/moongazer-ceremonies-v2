import { createClient } from "../supabase/client";
import { CategoriesDB } from "../types/types";

export const getCategories = async (): Promise<CategoriesDB[]> => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.from("categories").select("*");

    if (error) {
      throw error;
    }

    console.log(data);
    return data as CategoriesDB[];
  } catch (error: any) {
    throw new Error(error.message);
  }
};
