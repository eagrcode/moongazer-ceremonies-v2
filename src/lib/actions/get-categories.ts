"use server";

import { sql } from "@vercel/postgres";

type Categories = {
  id: number;
  name: string;
};

export const getCategories = async (): Promise<Categories[]> => {
  try {
    const { rows } = await sql`SELECT * from "category" order by name asc;`;

    console.log("SERVER ACTION: ", rows);

    return rows as Categories[];
  } catch (error: any) {
    console.error("Error in getCategories:", error.message);
    throw error;
  }
};
