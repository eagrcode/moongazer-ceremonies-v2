"use client";

type BlogFiltersProps = {
  filterPosts: (id: number) => void;
  id: number;
  name: string;
};

const styles =
  "text-sm border-2 border-primary/10 px-2 py-[3px] rounded-2xl md:hover:border-primary/20";

export function BlogFilters({ filterPosts, id, name }: BlogFiltersProps) {
  return (
    <button className={styles} onClick={() => filterPosts(id)}>
      {name}
    </button>
  );
}

export function ResetFilters({
  filterPosts,
}: {
  filterPosts: (id: number) => void;
}) {
  return (
    <button className={styles} onClick={() => filterPosts(0)}>
      All
    </button>
  );
}
