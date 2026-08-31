interface Book {
  title: string;
  author: string;
  status: "want" | "reading" | "done";
}

const books: Book[] = [
  {
    title: "1984 ",
    author: " George Orwell",
    status: "want",
  },
  {
    title: "Pride and Prejudice ",
    author: " Jane Austen",
    status: "reading",
  },
  {
    title: "The Hobbit ",
    author: "J.R.R. Tolkien",
    status: "done",
  },
];
