export default function ItemList({ listItems, deletOne }) {
  return (
    <>
      <ul>
        {listItems.map((item) => (
          <li key={item.key}>
            {item.data}
            <button onClick={() => deletOne(item.key)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
