"use client";

type BlogFiltersProps = {
  filterPosts: (id: number) => void;
  id: number;
  name: string;
};

export function BlogFilters({ filterPosts, id, name }: BlogFiltersProps) {
  return <button onClick={() => filterPosts(id)}>{name}</button>;
}

export function ResetFilters({
  filterPosts,
}: {
  filterPosts: (id: number) => void;
}) {
  return <button onClick={() => filterPosts(0)}>All</button>;
}
