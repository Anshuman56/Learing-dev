function Item({ isPacking, name }) {
  return (
    <li className="item">
      {name} {isPacking && " ✅"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacking={true} name="Space suit" />
        <Item isPacking={true} name="Helmet with a golden leaf" />
        <Item isPacking={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
