export const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short", // Abbreviated month name (e.g., "Oct")
    day: "numeric", // Numeric day (e.g., "11")
    year: "numeric", // Full year (e.g., "2024")
  });
