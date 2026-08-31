interface Book {
  title: string;
  author: string;
  status: "want" | "reading" | "done";
}

function filterByStatus(
  books: Book[],
  status: "want" | "reading" | "done",
): Book[] {
  return books.filter((item) => item.status === status);
}
