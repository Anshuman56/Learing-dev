import { useEffect, useState } from "react";

export default function App() {
  const [list, setList] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getList() {
      setList(null);
      setError("");
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/notes");
        if (!response.ok) throw new Error("list not found");
        const list = await response.json();
        console.log(list);
        setList(list);
      } catch (err) {
        setError(err.message);
        setList(null);
      } finally {
        setIsLoading(false);
      }
    }
    getList();
  }, []);

  async function addNote() {
    // Prevent page refresh

    const newNote = {
      title,
      content,
    };

    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) throw new Error("Failed to add note");

      const savedNote = await response.json();

      // Add the new note to the list
      setList((prevList) => [...prevList, savedNote]);

      // Clear the inputs
      setTitle("");
      setContent("");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Add Note</button>
      </form>
      {isLoading ? (
        <p>loading..</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        list &&
        list.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
