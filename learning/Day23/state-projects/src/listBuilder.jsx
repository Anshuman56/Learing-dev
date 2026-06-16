import { useState } from "react";
import Button from "./Button";

function ListItem({ arr, onDelet }) {
  return (
    <ul>
      {arr.map((item) => (
        <li key={item.key}>
          <span>{item.data}</span>
          <Button onClick={() => onDelet(item.key)}>X</Button>
        </li>
      ))}
    </ul>
  );
}

export default function ListBuilder() {
  let [value, setValue] = useState("");
  let [addItems, setAddItems] = useState([]);
  let [id, setId] = useState(0);

  function hanldeClick(e) {
    e.preventDefault();
    if (value.trim() !== "") {
      setAddItems([...addItems, { key: id, data: value }]);
      setId(id + 1);
      setValue("");
    }
  }

  function handleDelet(deleteItem) {
    setAddItems(addItems.filter((item) => item.key !== deleteItem));
  }

  return (
    <>
      <form action="">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={hanldeClick}>Add</Button>
      </form>
      <ListItem arr={addItems} onDelet={handleDelet} />
    </>
  );
}
