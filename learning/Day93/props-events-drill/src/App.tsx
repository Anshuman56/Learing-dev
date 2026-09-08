import BookCard from "./BookCard";
import ContactForm from "./ContactForm";
import Counter from "./Counter";
import Greet from "./Greet";
import Search from "./Search";

export default function App() {
  return (
    <>
      <Greet name="kalia" />
      <Greet name="kalia" excited={true} />
      <Greet name="kalia" excited={false} />
      <Counter startAt={2} label="start" step={4} />
      <Search />
      <ContactForm />
      <BookCard
        book={{ title: "ram", author: "rgd", _id: "001" }}
        onDelete={(id) => console.log(id)}
      />
    </>
  );
}
