import type { Book } from "./types";
export default function BookCard({
  book,
  onDelete,
}: {
  book: Book;
  onDelete: (id: string) => void;
}) {
  return (
    <>
      <h2>{book.title}</h2>
      <h2>{book.author}</h2>
      <button onClick={() => onDelete(book._id)}>Delete</button>
    </>
  );
}
