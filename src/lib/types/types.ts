export type BlogPostDB = {
  id: string;
  title: string;
  summary: string;
  content: string;
  tags: string[] | null;
  categoryId: boolean;
  imageUrl: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date | null;
};

export type CategoriesDB = {
  id: number;
  category: string;
};

type Category = {
  category: string;
};

export type SingleBlogPost = {
  id: string;
  title: string;
  summary: string;
  content: string;
  created_at: Date;
  image_url: string | null;
  published: boolean;
  category_id: number;
  categories: Category;
  tags: string[] | null;
  updated_at: Date | null;
};

export type CreateBlogPost = {
  title: string;
  summary: string;
  content: string;
  categoryId: number;
};

export type UpdateBlogPost = {
  id: string;
  title: string;
  summary: string;
  content: string;
  updatedAt: string;
  categoryId: number;
};

export type UpdatePrivacy = {
  id: string;
  published: boolean;
};

// Component specific types

export type _BlogList = {
  posts: SingleBlogPost[];
  categories: CategoriesDB[];
};

export type _BlogCard = {
  id: string;
  title: string;
  summary: string;
  category: string;
  created_at: Date;
  image_url: string | null;
};
