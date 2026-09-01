import BookList from "./BookList";
import Counter from "./Counter";

import UserCard from "./UserCard";

export default function App() {
  const books = [{ title: "halkl", author: "heijl" }];
  return (
    <>
      <Counter startAt={3} label="You start at " />
      <UserCard name="Anshuma" email="andhummaj" />
      <UserCard name="Anshuma" email="andhummaj" verified={true} />
      <BookList books={books} />
    </>
  );
}
