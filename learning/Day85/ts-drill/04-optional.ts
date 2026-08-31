interface Book {
  title: string;
  author: string;
  status: "want" | "reading" | "done";
  notes?: string;
}

const books: Book[] = [
  {
    title: "1984 ",
    author: " George Orwell",
    status: "want",
    notes: "This is a good book.",
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
