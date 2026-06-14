import Header from "./header.jsx";
import Bio from "./bio.jsx";
import Footer from "./footer.jsx";
import "./App.css";
import Card from "./card.jsx";
import Counter from "./counter.jsx";

function App() {
  return (
    <>
      <Header />
      <Bio />
      <Counter />
      <Card
        title="JavaScript"
        description="The language I started with"
        emoji="📜"
      />
      <Card
        title="React"
        description="The language I started with"
        emoji="📜"
      />
      <Card title="Node" description="The language I started with" emoji="📜" />
      <Card title="Next" description="The language I started with" emoji="📜" />
      <Footer />
    </>
  );
}

export default App;
