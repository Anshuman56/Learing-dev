import { useState } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";

export default function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [id, setId] = useState(0);
  function handlerOnClick(e) {
    e.preventDefault();
    setList([...list, { key: id, data: item }]);
    setItem("");
    setId(id + 1);
  }
  function deletOneHandler(id) {
    setList(list.filter((item) => item.key !== id));
  }

  return (
    <>
      <AddItemForm
        value={item}
        onChange={(e) => setItem(e.target.value)}
        addItem={handlerOnClick}
      />
      <ItemList listItems={list} deletOne={deletOneHandler} />
    </>
  );
}
