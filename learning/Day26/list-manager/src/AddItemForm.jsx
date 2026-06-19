export default function AddItemForm({ value, onChange, addItem }) {
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={addItem}>add</button>
    </>
  );
}
