import type { Book } from "./types";

export default function BookList({ books }: { books: Book[] }) {
  return (
    <>
      {books.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <p>{item.author}</p>
        </div>
      ))}
    </>
  );
}
